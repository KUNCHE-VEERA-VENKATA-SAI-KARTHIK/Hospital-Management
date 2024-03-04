import React from 'react'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import t5 from '../assets/t5.png'

export default function Tiles() {
  return (
    <> 
    <div className='flex justify-center mt-4 mb-5'>
      <h1 className='font-sans text-2xl'>Center of Excellence</h1>
    </div>
    <div className='grid grid-cols-4 gap-4'> 

    <div className='shadow-lg pt-10 pb-5  pt-10 pb-5 ml-3 rounded'>
        <div className='flex  content-center  justify-center ' >
            <img src={t1}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>childcare</p>
        </div>

    </div>   
    
    <div className='shadow-lg pt-10 pb-5 rounded'>
        <div className=' flex  content-center  justify-center ' >
            <img src={t2}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>Pediatric Specialties</p>
        </div>

    </div>   
    
    <div className='shadow-lg pt-10 pb-5 rounded'>
        <div className='flex  content-center  justify-center ' >
            <img src={t3}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>Obstetrics</p>
        </div>

    </div>   
    
    <div className='shadow-lg pt-10 pb-5 rounded mr-3'>
        <div className='flex  content-center  justify-center ' >
            <img src={t4}  className='h-50 w-20'/>
        </div>
        <div className='flex  content-center  justify-center '>
        <p>Gynecology</p>
        </div>

    </div>   
    </div>
    </>
  )
}
