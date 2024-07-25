import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase';

export default function Pharmacy() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch product details on component mount
  useEffect(() => {
    fetchdetails();
  }, []);

  async function fetchdetails() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const json = await res.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }

  async function addToCart(detail) {
    try {
      // Get user_id from session or authenticated user
      const userId = sessionStorage.getItem("UserId");

      // Ensure userId is available
      if (!userId) {
        throw new Error("User is not logged in.");
      }

      // Insert data into cart_items table
      const url_text = "https://fakestoreapi.com/products"+detail.id
      const { error } = await supabase
        .from('cart_items')
        .insert([
          {
            user_id: userId,
            product_id: detail.id,
            item_id: detail.id,
            quantity: 1, // Default to 1, modify if you have a quantity field
            price: detail.price,
            image_url: url_text // Use image URL from API
          }
        ]);

      // Check for errors
      if (error) throw error;

      // Redirect to cart page
      navigate("/Cart");
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      // Handle the error as needed, e.g., show an alert or message to the user
    }
  }

  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold'>Pharmacy</h1>
      </div>
      <div className='grid grid-cols-4 gap-20 justify-between border-none ml-5 mr-5 mt-6'>
        {data.length > 0 ? (
          data.map((detail) => (
            <div key={detail.id}>
              <div className='flex justify-center w-26 h-40'>
                <img src={detail.image} alt={detail.title} />
              </div>
              <div className='flex justify-center'>
                <h2>{detail.title}</h2>
              </div>
              <div className='flex justify-center'>
                <p>${detail.price}</p>
              </div>
              <div className="flex justify-between flex-row">
                <button 
                  onClick={() => addToCart(detail)} 
                  className='border ml-5 pl-4 pr-4 pt-2 pb-2'>
                  Buy Now
                </button>
                <button 
                  onClick={() => addToCart(detail)} 
                  className='border bg-blue mr-5'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}
