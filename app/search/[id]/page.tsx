import React from 'react'
import SinglePageMovie from '@/components/SearchSinglePageMovie'

const page = async ({
  searchParams,
}: {
  searchParams: { searchQuery: string; idValue: string }
}) => {
  // const { id } = await params
  // https://api.themoviedb.org/3/find/asdasda?external_source=imdb_id
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchParams.searchQuery}&include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  const filteredMovies = await res.results.filter(
    (item: any) => item.id.toString() === searchParams.idValue.toString()
  )
  // 226979 Test
  // 976573 Elemental

  console.log('ID from API index 0: ' + res.results[0].id)
  console.log('ID from params: ' + searchParams.idValue)
  console.log(res.results.slice(0, 1))
  // console.log(res.results.filter((item: any) => item.id === id).slice(0, 1))
  return (
    <div className='container mx-auto pt-5'>
      <SinglePageMovie item={filteredMovies[0]} />
    </div>
  )
}

export default page
