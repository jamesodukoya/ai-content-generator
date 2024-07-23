"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplatesListSection from './_components/TemplatesListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput]=useState<string>()
  return (
    <div className='bg-slate-100'>
      {/* Search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />

      {/* Template list */}
      <TemplatesListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard