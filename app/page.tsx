"use client"
import { CarCard, CustomFilter, Hero, SearcManufacturer, SearchBar, ShowMore } from "@/components"
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home( ) {
  const [allcars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")
  const [fuel, setFUel] = useState("")
  const [year, setYear] = useState(2022)
  const [limit, setLimit] = useState(10)


  const getCars = async () => {
    setLoading(true)
    try{
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
      setAllCars(result)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  } 
  useEffect(()=> {
    getCars()
  }, [fuel, year, limit, manufacturer, model])
  
  

  const isDataEmpty = !Array.isArray(allcars) || allcars.length< 1 || !allcars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width"
      id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={SearcManufacturer}
          setModel={setModel}/>
          <div className="home__filter-container">
            <CustomFilter setFilter={setFUel}  title="fuel" options={fuels}/>
            <CustomFilter setFilter={setYear} title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {allcars.length >0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allcars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image src="/loader.svg" width={50}
                height={50} alt="loader" className="object-contain"/>
              </div>
            )}
            <ShowMore 
            pageNumber={limit /10}
            isNext={limit> allcars.length}
            setLimit={setLimit}
            
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no results</h2>
            <p>{allcars?.message}</p>
          </div>
        )}


      </div>
    </main>
  )
}
