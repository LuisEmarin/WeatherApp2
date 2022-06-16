import React from 'react'
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" className='text-xl font-light p-2 w-full shadow-xl outline-none capitalize place'
                placeholder='Search for city...'
            />
            <UilSearch size={30} className="text-white cursor-pointer hover:scale-125 transition ease-out"/>
            <UilLocationPoint size={30} className="text-white cursor-pointer hover:scale-125 transition ease-out"/>
        </div>
    </div>
  )
}

export default Inputs