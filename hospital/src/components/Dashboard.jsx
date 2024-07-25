import React, { useContext ,useState,useEffect} from 'react'
import RadialBar from './RadialBar'
import UserContext from '../context/Context'
import { useNavigate } from 'react-router-dom'


export default function Dashboard() {
  let  navigate= useNavigate()
  
  const [isloggedin,setIsloggedin]=useState(false);
  const [username,setUsername]=useState();

  useEffect(() => {
    if(sessionStorage.getItem("email"))
      {
        setIsloggedin(true);
        setUsername(sessionStorage.getItem("username"));
      }
      else{
        setIsloggedin(false);
      }
    
    
  },[sessionStorage.getItem("email")])
    if (!isloggedin) {
        return (
            <div>
        <h1 className='text-center'>Please Login</h1>
        <h2>go to login page </h2> <button onClick={navigate("\Login")}>login</button>        </div>
    )
    }
    else{
        
          return (
     <>
    
    <div className='text-center'>
      <h1 className=" underline font-bold text-center py-5  ">
        DASHBOARD
      </h1>
      <h2>WELCOME {username}</h2>
      <div className='flex text-center align items-center'>

        <RadialBar/>
      </div>
    </div>

<div>
    
<h1 className=" underline font-bold text-center py-5">
        PRESCRIPTION
      </h1>
  

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ml-3 mr-3">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    medicine name
                </th>
                <th scope="col" class="px-6 py-3">
                    intake
                </th>
                <th scope="col" class="px-6 py-3">
                    {/* avthondhi ga control haa okok
                     */}
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">BUY NOW</button>
                </td>
            </tr>
           
            
        </tbody>
    </table>
</div>


</div>

</>
    
  )
}
}
