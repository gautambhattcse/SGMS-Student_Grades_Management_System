import React from 'react'

function Hero() {
  return (
    <div>
      <div className='flex flex-col p-2 justify-center items-center my-10 gap-2'>
        <div className='flex justify-center items-center'>
            <img src="./logo.png" alt="logo" width={190} height={190} />
        </div>
        <div className='flex justify-center items-center'>
            <h1 className='font-bold text-gray-500'>Simplifying Student Grades, One Click at a Time! 🚀📊</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
