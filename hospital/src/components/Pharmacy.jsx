import React, { useState } from 'react'
import himalaya from '../assets/himalaya.jpg'
import Card from './Card.jsx'

export default function Pharmacy() {
    // const brr=[
    //     {
    //         title:"Himalaya",
    //         price:250
    //     }];
    // const [arr,setArr]=useState(brr)

    // setArr((prev)=>{
    //     [...prev,...brr]
    // })

    // console.log(arr)
    let objArr = [
        {
            title: 'himalaya',
            price: 120,
            image: himalaya
        },
        {
            title: 'wow',
            price: 150,
            image: himalaya
        },
        {
            title: 'patanjali',
            price: 200,
            image: himalaya
        },
        {
            title: 'mamaearth',
            price: 200,
            image: himalaya
        }
    ];
     
    

  return (
    <>
    <div className=' grid grid-cols-3 gap-4 justify-content-between mt-20'>
        {
            objArr.map((item) => {
                console.log(item);
                return(
                    <>
                <Card  image={item.image} title={item.title} price={item.price} />
                </>
                )
            })
           
        }
    </div>

    </>
  )
}

