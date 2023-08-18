import SearchResult from '@/components/search/SearchResult'
import React from 'react'

const page = async ({ searchParams }: { searchParams: { name: string } }) => {
  // api.themoviedb.org/3/search/keyword?query=flash
  // https://api.themoviedb.org/3/search/keyword?query=test&page=1

  const data = await fetch(
    `https://api.themoviedb.org/3/search/keyword?query=${searchParams.name}&page=1&api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  console.log(res.results)

  // console.log(searchParams.name)
  return (
    <div className='container mx-auto'>
      <h1 className='text-white text-center my-5 text-xl font-bold'>
        Search Result for: {searchParams.name}
      </h1>
      <hr className='mb-5' />
      <div className='grid grid-cols-4 gap-2'>
        {res.results.map((item: any) => (
          <SearchResult key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default page
