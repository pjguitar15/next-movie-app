'use client'
import React, { useState } from 'react'
import SearchResult from './search/SearchResult'
import NoResults from './search/NoResults'

const SearchMoviesResultComponent = ({
  data,
  paramValue,
}: {
  data: Object[]
  paramValue: string
}) => {
  const [numberOfDisplayedMovies, setNumberOfDisplayedMovies] = useState(3)
  const handleLoadMovies = () => {
    setNumberOfDisplayedMovies(numberOfDisplayedMovies + 3)
  }
  const movieDbImageUrl = `https://image.tmdb.org/t/p/original`
  return (
    <React.Fragment>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {data.length > 0 ? (
          data
            .slice(0, numberOfDisplayedMovies)
            .map((item: any) => (
              <SearchResult
                key={item.id}
                id={item.id}
                title={item.original_title}
                image={movieDbImageUrl + item.poster_path}
                overview={item.overview}
                releaseDate={item.release_date}
                originalLanguage={item.original_language}
                popularity={item.popularity}
                voteCount={item.vote_count}
                searchParamsValue={paramValue}
              />
            ))
        ) : (
          <NoResults />
        )}
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
    </React.Fragment>
  )
}

export default SearchMoviesResultComponent
