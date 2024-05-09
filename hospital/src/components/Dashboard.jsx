import React from 'react'
import RadialBar from './RadialBar'

export default function Dashboard() {
  return (
    <>
    <div className='text-center'>
      <h1 className=" underline font-bold text-center py-5  ">
        DASHBOARD
      </h1>
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
