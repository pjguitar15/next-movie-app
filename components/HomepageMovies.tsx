'use client'
import React, { useState } from 'react'
import MovieItem from './MovieItem'
import Hero from './Hero'

const HomepageMovies = ({ data }: { data: Object[] }) => {
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = useState(4)
  const handleLoadMovies = () => {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + 4)
  }

  return (
    <React.Fragment>
      <Hero popularMovie={data[0]} />
      <div className='container mx-auto py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {data
            .slice(1)
            ?.slice(0, numberOfDisplayedMovies)
            .map((item: any) => (
              <MovieItem key={item.id} item={item} />
            ))}
        </div>

        {numberOfDisplayedMovies <= data.length && (
          <div className='text-center mb-10'>
            <button
              onClick={handleLoadMovies}
              className='bg-yellow-500 mx-auto px-5 py-2'
            >
              Load more movies
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default HomepageMovies
