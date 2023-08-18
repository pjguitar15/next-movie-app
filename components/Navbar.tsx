import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-zinc-900 py-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <div className='text-white text-xl flex items-center'>
            <Link
              href='/'
              className='px-4 py-2 rounded-full bg-yellow-600 font-bold text-white mr-4'
            >
              T
            </Link>
            <div>TMDB Movies App</div>
          </div>
          <div>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
