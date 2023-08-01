import Image from 'next/image'

const MovieItem = ({ item }: any) => {
  // movie image root url
  const movieDbImageUrl = `https://image.tmdb.org/t/p/original`
  // items: adult(bool), backdrop_path(string), genre_ids(array), id(number), original_language(string)
  // original_title(string), overview(string), popularity(number), poster_path(string), release_date(string)
  // title(string), video(bool), vote_average(number), vote_count(number)
  return (
    <div className='mb-10 px-5 md:px-0'>
      <div className='overflow-hidden relative group'>
        <div className='hidden opacity-0 group-hover:opacity-100 group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 pointer-events-none'>
          Click to Watch
        </div>
        <div className='hover:scale-125 transition duration-500 cursor-pointer hover:sepia hover:brightness-50'>
          <Image
            className='w-full'
            src={movieDbImageUrl + item.backdrop_path}
            width={500}
            height={300}
            objectFit='cover'
            alt='movie poster'
          />
        </div>
      </div>
      {/* content here */}
      <div className='py-5 relative'>
        <h4 className='font-bold text-xl mb-3'>{item.original_title}</h4>
        <h6 className='uppercase bg-zinc-900 inline-block px-2 border border-white rounded mb-2'>
          {item.original_language}
        </h6>
        <h6 className='mb-1'>
          <span className='font-bold'>Released Date:</span> {item.release_date}
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
  )
}

export default MovieItem
