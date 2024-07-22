import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplatesListSection from './_components/TemplatesListSection'

function Dashboard() {
  return (
    <div>
      {/* Search section */}
      <SearchSection />

      {/* Template list */}
      <TemplatesListSection />
    </div>
  )
}

export default Dashboard