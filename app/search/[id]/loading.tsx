import React from 'react'

const loading = () => {
  return (
    <div className='container mx-auto'>
      <div className='mb-10 px-5 md:px-0 text-white grid grid-cols-2 pt-10'>
        <div className='overflow-hidden relative group'>
          <div className='hover:scale-125 transition duration-500 cursor-pointer hover:sepia hover:brightness-50'>
            {/* Loading state */}
            <div className='w-full h-48 bg-gray-300 animate-pulse pt-72'></div>
          </div>
        </div>
        {/* content here */}
        <div className='py-5 pl-10 relative'>
          {/* ... rest of the content ... */}
        </div>
      </div>
    </div>
  )
}

export default loading
