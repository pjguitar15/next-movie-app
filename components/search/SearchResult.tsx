import React from 'react'

const SearchResult = ({ name }: { name: string }) => {
  return (
    <>
      <div className='bg-zinc-900 px-3 py-2'>
        <h2 className='text-white capitalize text-lg'>{name}</h2>
      </div>
    </>
  )
}

export default SearchResult
