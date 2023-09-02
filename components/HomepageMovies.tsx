'use client'
import { useState } from 'react'
import MovieItem from './MovieItem'

const HomepageMovies = ({ data }: { data: Object[] }) => {
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = useState(3)
  const handleLoadMovies = () => {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + 3)
  }
  
  return (
    <div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data?.slice(0, numberOfDisplayedMovies).map((item: any) => (
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
  )
}

export default HomepageMovies
