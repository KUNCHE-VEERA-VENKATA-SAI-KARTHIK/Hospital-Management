import React from 'react'

export default function Card(props) {
  return (
    <>
    < div className='flex justify-center'>
    <div className=' flex-col justify-center align-center'>
        {/* <div>
            <img src={props.image}/>
        </div> */}
        <div>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
        <div >
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
    </div>
    </div>
    </>
  )
}
