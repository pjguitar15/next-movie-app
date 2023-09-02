import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchForm from './SearchForm'

const Footer = () => {
  return (
    <div className='bg-zinc-900'>
      <div className='container mx-auto py-5'>
        <div className='flex justify-center'>
          <div className='text-white text-xl flex items-center'>
            <Link className='hover:scale-110 animation duration-300' href='/'>
              <Image
                className='h-12 w-12 inline-block me-3'
                src='/movie-logo.png'
                alt='logo'
                width={500}
                height={500}
              />

              <span>TMDB Movies</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='py-3 bg-zinc-800'>
        <h5 className='text-white text-center'>
          This App is built by{' '}
          <a
            className='text-yellow-500 hover:text-yellow-600 transition duration-300'
            href='https://philcodes-portfolio.vercel.app/'
            target='_blank'
          >
            Philcob Suzuki Josol
          </a>
        </h5>
      </div>
    </div>
  )
}

export default Footer
