import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';



export default function Pharmacy() {

  const [data,setData]=useState();
    useEffect(() => fetchdetails,[]);

    async function fetchdetails()
    {
      await fetch('https://fakestoreapi.com/products')
  .then(res=>(res.json()))
  .then(json=>{
    setData(json);
    console.log(data);
    
 
  })}
    

return(
  <>
  <div className='flex justify-center'>
    <h1 className='text-2xl font-bold'>pharmacy</h1>
  </div>
  <div className=' grid grid-cols-4 gap-20 justify-between border-none ml-5 mr-5 mt-6	'>
  {data ? (
    data.map((detail) => (
      <div key={detail.id}>
        <div className=' flex justify-center w-26 h-40'>
        <img src={detail.image} alt={detail.title} />
        </div>
        <div className=' flex justify-center'>
        <h2>{detail.title}</h2>
        </div>
        <div className=' flex justify-center'>
        <p>{detail.price}</p>
        </div>
        <div className=" flex justify-between flex-row ">
          <button className='border ml-5 pl-4 pr-4 pt-2 pb-2'  >
            buy now 
          </button>
          <button  className='border mr-5 '  >
          add to cart
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>Loading data...</p>
  )}
</div>
</>
)
   
}

    
 




// const Pharmacy = () => {
//   const [medicineData, setMedicineData] = useState(null);
//   const [error, setError] = useState(null);

//   const medicineName = 'prolyte'; // Replace with user input or dynamic value

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://medicine-name-and-details.p.rapidapi.com/',
//           {
//             params: {
//                 medicineName: 'prolyte'
                    
//             },
//             headers: {
//               'X-RapidAPI-Key': 'e631bd5615mshcf1bd37db534356p1445d7jsnaa9c527a9988',
//               'X-RapidAPI-Host': 'medicine-name-and-details.p.rapidapi.com',
//             },
//           }
//         );
//         setMedicineData(response.data);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [medicineName]); // Dependency array to refetch on medicineName change

//   if (error) {
//     return <div>Error fetching medicine details: {error.message}</div>;
//   }

//   if (!medicineData) {
//     return <div>Loading medicine details...</div>;
//   }

//   // Display medicine data here (replace with your component structure)
//   return (
//     <div>
//       <h1>{medicineData.name}</h1>
//       <p>{medicineData.description}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };


