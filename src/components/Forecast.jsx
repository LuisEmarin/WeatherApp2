import React from 'react'

function Forecast({ title }) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{title}t</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>time </p>
                <img src="" alt="weather icon" className='w-12 my-1' />
                <p className='font-medium'>85°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>time </p>
                <img src="" alt="weather icon" className='w-12 my-1' />
                <p className='font-medium'>85°</p>
            </div>            
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>time </p>
                <img src="" alt="weather icon" className='w-12 my-1' />
                <p className='font-medium'>85°</p>
            </div>            
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>time </p>
                <img src="" alt="weather icon" className='w-12 my-1' />
                <p className='font-medium'>85°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>time </p>
                <img src="" alt="weather icon" className='w-12 my-1' />
                <p className='font-medium'>85°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast