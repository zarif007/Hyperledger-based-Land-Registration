import React from 'react'
import Navbar from '../components/Navbar'

const Userrequests = () => {
  return (
    <div className="text-gray-300 bg-gray-900 body-font relative min-h-screen pb-12 ">
      
        <Navbar />
        <div className='mx-auto max-w-7xl py-24'>
        <h1 className="sm:text-3xl py-4 text-2xl font-bold title-font text-white">
            User Requests
        </h1>
            <div className='rounded bg-black p-8 border-2 border-gray-800'>
                <div className='flex space-x-8'>
                    <img className='w-1/2 h-72' src="https://ipfs.io/ipfs/QmZTh26xVdFvGGksv7ELJgKWsnPjUe4wYmu7uxATwyEHWu" alt="nid pic" />
                    <div className='flex flex-col w-1/2 justify-between'>
                        <div className=''>
                            <p className='text-lg text-green-600 pb-4 font-semibold'>✅ Verified through NID Checking</p>
                            <p className='text-lg py-1'>Name: <span className='font-semibold'>Yeasmin Rahman</span></p>
                            <p className='text-lg py-1'>Email: <span className='font-semibold'>tsmanin@gmail.com</span></p>
                            <p className='text-lg py-1'>Phone Number: <span className='font-semibold'>+00854568712</span></p>
                            <p className='text-lg py-1'>Region: <span className='font-semibold'>Khulna</span></p>
                            <p className='text-lg py-1'>NID: <span className='font-semibold'>778 8858 5858</span></p>
                        </div>

                        <div className='flex space-x-4 justify-end items-end text-white'>
                            <button className='px-4 py-2 bg-red-600 text-md font-semibold rounded'>Cancel</button>
                            <button className='px-4 py-2 bg-green-600 text-md font-semibold rounded'>Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Userrequests
