import React from 'react'
import SinglePageMovie from '@/components/SinglePageMovie'

const page = async ({ params }: any) => {
  const { id } = await params
  // https://api.themoviedb.org/3/find/asdasda?external_source=imdb_id
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  // const filteredMovies = [res.results[0]]
  const filteredMovies = await res.results.filter(
    (item: any) => item.id.toString() === id.toString()
  )
  console.log('ID from API index 0: ' + res.results[0].id)
  console.log('ID from params: ' + id)
  console.log(res.results.filter((item: any) => item.id === id))
  return (
    <div className='container mx-auto pt-5'>
      <SinglePageMovie item={filteredMovies[0]} />
    </div>
  )
}

export default page
