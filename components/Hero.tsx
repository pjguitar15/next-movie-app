import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Hero = ({ popularMovie }: { popularMovie: any }) => {
  const router = useRouter()
  const movieDbImageUrl = `https://image.tmdb.org/t/p/original`
  const movieImage = movieDbImageUrl + popularMovie.backdrop_path
  const handleClick = (id: number) => {
    router.push(`/view/${id}`)
  }
  return (
    <div className='flex flex-col-reverse lg:flex lg:flex-row'>
      <div className='ps-14 pe-4 flex flex-col justify-center lg:w-5/12 text-center lg:text-left mt-8 lg:mt-0'>
        <h1 className='text-white text-4xl font-bold uppercase'>
          {popularMovie.original_title}
        </h1>
        <p className='text-white mt-4'>{popularMovie.overview}</p>
        <div>
          <button
            onClick={() => handleClick(popularMovie.id)}
            className='bg-red-600 text-white px-5 py-2 mt-5'
          >
            View more info
          </button>
        </div>
      </div>
      <div className='relative lg:w-7/12'>
        <div
          className='absolute left-0 top-0 bottom-0 w-1/2 z-10'
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          }}
        ></div>
        <Image
          className='w-full object-cover'
          src={movieImage}
          alt=''
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default Hero
