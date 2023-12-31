"use client"
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const SearchButtton = ({otherClasses} : {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt='magnifying glass' width={40}
    height={40} className='object-contain'/>
  </button>
)
const SearchBar = ({setManufacturer, setModel}) => {

  const [searchModel, setSearchModel] = useState('')
  const [searchManufacturer, setSearchManufacturer] = useState('')
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(searchManufacturer ==='' && searchModel===''){
      return alert('Please in the search bar')
    }
    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer 
         selected={searchManufacturer}
         setSelected={setSearchManufacturer}
        />
        <SearchButtton otherClasses="sm:hidden"/>
      </div>

      <div className='searchbar__item'>
        <Image src="/model-icon.png" alt='car model' width={25} height={25}
        className='absolute w-[20px] h-[20px]' />

        <input type="text" name='model' value={searchModel} 
        onChange={(e)=>setSearchModel(e.target.value)} 
        placeholder='Tiguan' className='searchbar__input'/>
        <SearchButtton otherClasses='sm:hidden'/>
      </div>
      <SearchButtton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar