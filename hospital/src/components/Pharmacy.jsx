import React, { useState } from 'react'
import himalaya from '../assets/himalaya.jpg'
import Card from './Card.jsx'

export default function Pharmacy() {

    const arr=[
        {
            title:"Himalaya",
            price:250,
        }];

  return (
    <>
        {
           arr.map((element)=>{
            <Card title={element.title} price={element.price} />
           })
        }


    </>
  )
}

