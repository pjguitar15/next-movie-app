'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    setSearchInput('')
    router.push(`/search${searchInput}`)
  }

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === '/') {
        event.preventDefault()
        inputRef.current!.focus()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='relative'>
          <MagnifyingGlassIcon className='absolute h-5 w-5 left-3 top-2 text-gray-400' />
          <input
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
            type='text'
            placeholder='Search an item'
            className='pl-10 py-2 rounded-full outline-none'
            ref={inputRef}
          />
        </div>
      </form>
    </>
  )
}

export default SearchForm
