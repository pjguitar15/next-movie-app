import SearchMoviesResultComponent from '@/components/SearchMoviesResultComponent'
import NoResults from '@/components/search/NoResults'
import SearchResult from '@/components/search/SearchResult'
import React from 'react'

const page = async ({ searchParams }: { searchParams: { name: string } }) => {
  // https://api.themoviedb.org/3/search/movie?query=super&include_adult=true&language=en-US&page=1

  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams.name}&include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  console.log(res.results)

  const movieDbImageUrl = `https://image.tmdb.org/t/p/original`
  // console.log(searchParams.name)
  return (
    <div className='container mx-auto'>
      {res.results.length > 0 && (
        <h1 className='text-white text-center mt-5 text-xl font-bold'>
          Search Result for: {searchParams.name}
        </h1>
      )}
      <h4 className='text-white text-center mb-5'>
        There are {res.results.length} results
      </h4>

      <SearchMoviesResultComponent
        data={res.results}
        paramValue={searchParams.name}
      />
    </div>
  )
}

export default page
