import React from 'react'
import SingleSearch_oneway from '../components/SingleSearch_oneway'


import Image from 'next/image';
function SearchResult() {
  return (
     <section className='my-10 space-y-2'>
       <SingleSearch_oneway/>
       <SingleSearch_oneway/>
       <SingleSearch_oneway/>
       <SingleSearch_oneway/>
       <SingleSearch_oneway/>
       <SingleSearch_oneway/>
     </section>
  )
}

export default SearchResult