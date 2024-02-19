import React from 'react'
import c4 from '../assets/child.png'


export default function Tiles() {
  return (
    <> 
    <div className='flex justify-center mt-4 mb-5'>
      <h1 className='font-sans text-2xl'>Center of Excellence</h1>
    </div>
    <div className='grid grid-cols-4 gap-4'> 

    <div className='shadow-lg pt-10 pb-5  pt-10 pb-5 ml-3 rounded'>
        <div className='flex  content-center  justify-center ' >
            <img src={c4}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>childcare</p>
        </div>

    </div>   
    
    <div className='shadow-lg pt-10 pb-5 rounded'>
        <div className=' flex  content-center  justify-center ' >
            <img src={c4}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>childcare</p>
        </div>

    </div>   
    
    {/* <div className='shadow-lg pt-10 pb-5 rounded'>
        <div className='flex  content-center  justify-center ' >
            <img src={c4}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>Neurology</p>
        </div>

    </div>   
     */}
    <div className='shadow-lg pt-10 pb-5 rounded mr-3'>
        <div className='flex  content-center  justify-center ' >
            <img src={c4}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>childcare</p>
        </div>

    </div>   
    </div>
    </>
  )
}
