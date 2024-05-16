import React, { useEffect, useState } from 'react'
import supabase from '../supabase.js'


export default function Docdashboard() {
    const [data,setData]=useState()
    const [user,setUser]=useState({
        name:'',age:''
      })

    useEffect(
        ()=>{fetchUsers()},[data]);

    async function fetchUsers()
    {
        const {data}=await supabase.from("users")
        .select("*")
        if(data!=null)
            {
        console.log(data)
        setData(data);
            }
            else
            {
                console.log("no data available")
            }

    }
    function handleChange(event){
    
        setUser(prevFormData=>{
          return{
            ...prevFormData,
            [event.target.name]:event.target.value
          }
        })
      }
      async function createUser(){
        await supabase
        .from('users')
        .insert({ patient_name: user.name, age: user.age })
    
      fetchUsers()    
    
    
      }
  return (
    <div>

<form onSubmit={createUser}>
        <input className='px-3 mr-3 ml-3'
          type="text"
          placeholder="Name"
          name='name'
          onChange={handleChange}
        
        />
        <input className='px-3 mr-3'
          type="number"
          placeholder="Age"
          name='age'
          onChange={handleChange}
        
        />
        <input className='px-3 mr-3'
          type="date"
          placeholder="date of visit"
          name='date_of_visit'
          onChange={handleChange}
        
        />
        <button className ="bg-blue" type='submit'>Create</button>

      </form>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ml-3 mr-3">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                  age
                </th>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                  date of visit
                </th>
                <th scope="col" class="px-6 py-3">
                  phone number
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {
        data!= null? (
            data.map((user) => (
                
            <tr class="bg-white border-b  dark:border-gray-700">
              
                <td class="px-6 py-4">
                    {user.patient_name}
                </td>
                <td class="px-6 py-4">
                    {user.age}
                </td>
                <td class="px-6 py-4">
                    {user.id}
                </td>
                <td class="px-6 py-4">
                    {user.date_of_visit}
                </td>
                <td class="px-6 py-4">
                    {user.phone_number}
                </td>
                <td class="px-6 py-4 text-right">
                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</button>
                </td>
            </tr> )))
            : (
                <h1>Loading data...</h1>
            )
        }
            
        </tbody>
    </table>
    </div>




    </div>
  )
}
