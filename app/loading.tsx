import LoadingItem from '@/components/LoadingItem'
import React from 'react'

const loading = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <LoadingItem key={item} />
        ))}
      </div>
    </div>
  )
}

export default loading
