'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NoResults = () => {
  const searchParams = useSearchParams()
  const paramValue = searchParams.get('name')
  return (
    <div className='pt-5'>
      <h2 className='text-white text-3xl'>
        No Results for <span className='inline-block'>{paramValue}</span>
      </h2>
    </div>
  )
}

export default NoResults
