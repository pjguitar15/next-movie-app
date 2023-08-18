import React from 'react'

const LoadingItem = () => {
  return (
    <div className='mb-10 px-5 md:px-0 text-white'>
      <div className='animate-pulse'>
        {/* Placeholder loading state */}
        <div className='bg-gray-300 h-64 w-full'></div>
      </div>
      <div className='py-5 relative'>
        {/* Placeholder loading state */}
        <div className='bg-gray-200 h-4 w-2/3 mb-3'></div>
        <div className='bg-gray-200 h-4 w-1/4'></div>
      </div>
    </div>
  )
}

export default LoadingItem
