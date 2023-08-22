'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const SearchResult = ({
  title,
  image,
  overview,
  releaseDate,
  originalLanguage,
  popularity,
  voteCount,
}: {
  title: string
  image: string
  overview: string
  releaseDate: string
  originalLanguage: string
  popularity: string
  voteCount: string
}) => {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false)

  const handleExpand = () => {
    setIsOverviewExpanded(!isOverviewExpanded)
  }
  return (
    <>
      <div className='mb-10 px-5 md:px-0 text-white'>
        <div className='overflow-hidden relative group'>
          <div className='hidden opacity-0 group-hover:opacity-100 group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 pointer-events-none'>
            Click to View
          </div>
          <div className='hover:scale-125 transition duration-500 cursor-pointer hover:sepia hover:brightness-50'>
            <Image
              className='w-full'
              src={image}
              width={500}
              height={300}
              objectFit='cover'
              alt='movie poster'
            />
          </div>
        </div>
        {/* content here */}
        <div className='py-5 relative'>
          <h4 className='font-bold text-xl mb-3'>{title}</h4>
          <h6 className='uppercase bg-zinc-900 inline-block px-2 border border-white rounded mb-2'>
            {originalLanguage}
          </h6>
          <h6 className='mb-1'>
            <span className='font-bold'>Released Date:</span> {releaseDate}
          </h6>
          <h6>
            {!isOverviewExpanded ? overview.slice(0, 120) + '..' : overview}
          </h6>
          <span
            onClick={handleExpand}
            className='text-yellow-400 hover:text-yellow-300 cursor-pointer'
          >
            {!isOverviewExpanded ? 'Show more' : 'Show less'}
          </span>
          <h6 className='mb-2 mt-4'>
            <span className='font-bold'>Popularity:</span> {popularity}
          </h6>
          <h6 className='mb-2'>
            <span className='font-bold'>Vote Count:</span> {voteCount}
          </h6>
        </div>
      </div>
    </>
  )
}

export default SearchResult
