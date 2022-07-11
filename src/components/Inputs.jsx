import React, {useState} from 'react'
import {UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity]  = useState("");
  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  }
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({
          lat, lon
        })
      })
    }
  }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" className='text-xl font-light p-2 w-full shadow-xl outline-none capitalize place'
                placeholder='Search for city...'
            />
            <UilSearch onClick={handleSearchClick} size={30} className="text-white cursor-pointer hover:scale-125 transition ease-out"/>
            <UilLocationPoint onClick={handleLocationClick} size={30} className="text-white cursor-pointer hover:scale-125 transition ease-out"/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name='imperial' className='text-xl text-white font-light  transition ease-out hover:scale-125'>
          °F
          </button >
          <p className='text-xl text-white font-light ml-2 mr-1'>|</p>
          <button name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'>
          °C
          </button>
        </div>
    </div>
  )
}

export default Inputs