import React from 'react'
import {UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset} from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Condition Satus</p>
        </div>
        <div className='flex flex-row items-center justify-center text-white py-3'>
            <img src="" alt="weather icon" className='w-25 m-auto ' />
            <p className='text-5xl m-auto'>100°</p>
            <div className='flex-shrink-0 flex-col space-y-2 m-auto '>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Feels like :
                    <span className='ml-1  font-medium'>106°</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity :
                    <span className='ml-1 font-medium'>65%</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind :
                    <span className='ml-1 font-medium'>20 mph</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center text-white py-3 space-x-1 text-sm '>
                <p className='flex-shrink-0 flex'>
                <UilSun size={18} />
                Rise:
                <span className='ml-1 '>6:23 AM</span>
                </p>
                    <p>|</p>
                
                <p className='flex-shrink-0 flex'>
                <UilSunset size={18} />
                Set:
                <span className='ml-1 '>8:35 PM</span>
                </p>
                    <p >|</p>

                <p className='flex'>
                <UilArrowUp size={18} />
                High:
                <span className='ml-1'>101°</span>
                </p>
                <p>|</p>
            
                <p className='flex'>
               <UilArrowDown size={18} /> 
               Low:
               <span className='ml-1'>83°</span>
               </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails