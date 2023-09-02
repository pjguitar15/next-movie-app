import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-zinc-900 py-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <div className='text-white flex items-center'>
            <Link
              className='hover:scale-110 animation duration-300 text-xl flex items-center'
              href='/'
            >
              <Image
                className='h-12 w-12 inline-block me-3'
                src='/movie-logo.png'
                alt='logo'
                width={500}
                height={500}
              />

              <span>TMDB Movies</span>
            </Link>
            <ul className='ms-7'>
              <li>
                <Link className='text-md' href='/about'>
                  About
                </Link>
              </li>
            </ul>
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
