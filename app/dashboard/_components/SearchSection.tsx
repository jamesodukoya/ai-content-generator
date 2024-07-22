import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
      <div className='p-10 bg-gradient-to-r from-sky-900 to-blue-800 flex flex-col justify-center items-center text-white'>
          <h2 className='text-3xl font-bold'>Browse all templates</h2>
          <p>What kind of content would you like to create today?</p>
          <div className='w-full flex justify-center'>
              <div className='flex gap-2 items-center bg-white p-2 border rounded my-5 w-[50%]'>
                  <Search className='text-primary'/>
                  <input type='text' placeholder='Search templates'
                    onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full text-primary focus:outline-none' />
              </div>
          </div>
      </div>
  )
}

export default SearchSection