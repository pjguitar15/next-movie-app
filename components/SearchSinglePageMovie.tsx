'use client'
import Image from 'next/image'

const SinglePageMovie = ({ item }: any) => {
  const backgroundPath = item.poster_path
  // movie image root url
  const movieDbImageUrl = `https://image.tmdb.org/t/p/original${backgroundPath}`
  console.log(movieDbImageUrl)

  return (
    <div className='max-w-6xl mx-auto'>
      <div className={`mb-10 px-5 md:px-0 text-white flex pt-10`}>
        <div className='overflow-hidden relative group'>
          <div className='transition duration-500'>
            <Image
              className='w-full'
              src={movieDbImageUrl}
              width={500}
              height={300}
              alt='movie poster'
            />
          </div>
        </div>
        {/* content here */}
        <div className='py-5 pl-10 relative w-10/12'>
          <h4 className='font-bold text-xl mb-3'>{item.original_title}</h4>
          <h6 className='uppercase bg-zinc-900 inline-block px-2 border border-white rounded mb-2'>
            {item.original_language}
          </h6>
          <h6 className='mb-1'>
            <span className='font-bold'>Released Date:</span>{' '}
            {item.release_date}
          </h6>
          <h6 className='mb-2'>{item.overview}</h6>
          <div>{item.adult ? 'Rated SPG' : 'PG'}</div>
          <h6 className='mb-2'>
            <span className='font-bold'>Popularity:</span> {item.popularity}
          </h6>
          <h6 className='mb-2'>
            <span className='font-bold'>Vote Count:</span> {item.vote_count}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SinglePageMovie
