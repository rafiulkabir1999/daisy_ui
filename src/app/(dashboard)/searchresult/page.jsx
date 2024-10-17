import React from 'react'
import Price from '../../components/filter/Price'
import Airlines from '../../components/filter/Airlines'
import ModifySearch from '../../components/ModifySearch'
import SearchResult from '../../components/SearchResult'

function Page() {
  return (
    <div className="flex container  gap-6 mt-10">
    <div className="rounded-xl w-[300px] space-y-4">
      <Price />
      <Airlines />
    </div>
    <div className="w-auto">
      <ModifySearch />
      <SearchResult />
    </div>
  </div>
  )
}

export default Page