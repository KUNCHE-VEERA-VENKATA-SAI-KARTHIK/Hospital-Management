import React from 'react'
import doc1 from "../assets/doc1.jpg"
import doc2 from "../assets/doc2.jpg"
import doc3 from "../assets/doc3.jpg"
import doc4 from "../assets/doc4.jpg"
import Docdetails from './Docdetails'
import { Link, useNavigate } from "react-router-dom";

export default function Doctors() {
  return (
    <>
    <div className='flex flex-row justify-between ml-14'>
        <div className='ml-16'>
            <Link to="Docdetails">
            <button className='w-100%'  onClick={< Docdetails />}>
                <img className='rounded-[700px]' src={doc1}/>
            </button>
            </Link>
            <div className='flex  justify-center'> 
                <p>
                    Dr.Hasini
                </p>
            </div>
            <div className='flex  justify-center'>
                <p>
                    MBBS, MS
                </p>
            </div>
            <div className='flex  justify-center border ml-20 mr-20'>
            <Link to="Docdetails">
                <button>Book Consultation</button>
            </Link>
            </div>
        </div>
        <div className=''>
            <Link to="Docdetails">
            <button className='w-100%'  onClick={< Docdetails />}>
                <img className='rounded-[700px]' src={doc2}/>
            </button>
            </Link>
            <div className='flex  justify-center'> 
                <p>
                    Dr.Stanlee
                </p>
            </div>
            <div className='flex  justify-center'>
                <p>
                    MBBS, MS
                </p>
            </div>
            <div className='flex  justify-center border ml-20 mr-20'>
            <Link to="Docdetails">
                <button>Book Consultation</button>
            </Link>
            </div>
        </div>
        <div className=''>
            <Link to="Docdetails">
            <button className='w-100%'  onClick={< Docdetails />}>
                <img className='rounded-[700px]' src={doc3}/>
            </button>
            </Link>
            <div className='flex  justify-center'> 
                <p>
                    Dr.Deepika
                </p>
            </div>
            <div className='flex  justify-center'>
                <p>
                    MBBS, MS
                </p>
            </div>
            <div className='flex  justify-center border ml-20 mr-20'>
            <Link to="Docdetails">
                <button>Book Consultation</button>
            </Link>
            </div>
        </div>
        <div className='mr-16'>
            <Link to="Docdetails">
            <button className='w-100%'  onClick={< Docdetails />}>
                <img className='rounded-[700px]' src={doc4}/>
            </button>
            </Link>
            <div className='flex  justify-center'> 
                <p>
                    Dr.John
                </p>
            </div>
            <div className='flex  justify-center'>
                <p>
                    MBBS, MS
                </p>
            </div>
            <div className='flex  justify-center border ml-20 mr-20'>
            <Link to="Docdetails">
                <button>Book Consultation</button>
            </Link>
                
            </div>
        </div>
        
    </div>
    </>
  )
}
