import React from 'react'
import FuelCard from './FuelCard'

const Home = () => {
  return (
    <div className='flex flex-col gap-4 text-left'>
        <h1 className=' uppercase text-xl font-bold text-primary'>DashBoard</h1>
        <p>Welcome to your dashboard</p>
        <div>
            <FuelCard/>
        </div>
    </div>
  )
}

export default Home