import React from 'react'
import doc1 from "../assets/doc1.jpg"
import  {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

export default function Docdetails() {
    const [value1, onChange] = useState('10:00');
    const [value, setValue] = useState({ 
        startDate: null ,
        endDate: null 
        }); 
        
        const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        } 
        
  return (
    <>
    <div className=' static flex flex-row justify-between mt-10 pb-90 border '>
    <div className=' flex flex-col ml-4 mr-80 '>
        <div className='border rounded-[10px] mt-4 flex flex-row m-2 ' >
            <div className=' pl-8 pt-4 pb-4'>
                <img className=' object-contain rounded-[70px]' src={doc1} />
            </div>
            <div className=' flex flex-col  pl-16 pb-4 pt-4 justify-between'>
                <h1 className='text-2xl font-bold'>name</h1>
                <p>spec</p>
                <p>exp</p>
                <p> lang</p>
            </div>
        </div>
        <div className=' m-2 flex flex-col justify-between'>
            <p className='m-2 text-xl font-bold'>
                ABOUT DOCTOR
            </p>
            <p className='m-2 text-lg'>Lorem ipsu Lorem,  et minima fugit rerum quidem maxime ipsum totam consequatur aliquam enim a reprehenderit corrupti quaerat, voluptatibus atque ad illo? Mollitia obcaecati, itaque totam laboriosam maxime quam hic praesentium eveniet quod? Obcaecati quidem voluptatem dolorum ipsam ipsa id ducimus ratione? Dolor, aperiam nulla laborum veniam ipsum facere repellendus, commodi nam sapiente quisquam est quam dolore? Repellendus amet odit aspernatur laborum architecto ut praesentium dolor. Magnam provident, illo quo ipsa aliquam sit. m dolor, sit amet consectetur adipisicing elit. Similique corrupti ducimus eius minima. Quod officia consequuntur ipsum labore quidem, a ullam deserunt perferendis. Saepe amet porro impedit iusto a quisquam voluptas quibusdam dolorem obcaecati voluptatibus. Soluta quas culpa aliquam tempore possimus accusamus omnis expedita, non veritatis, eum provident nobis. Hic, eius ea? Nam illo eius labore.</p>
            <p className='m-2 text-lg'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere aspernatur iusto nostrum doloribus totam! Repellendus odio velit quae similique, placeat aliquid nulla quam nisi consequuntur qui et neque voluptatibus consectetur fugit vitae aut! Quasi accusantium ullam quam sit rerum odit ipsam, ea consectetur corrupti neque dolor, dolore ducimus vel nostrum! Quos, voluptatem! Quas veritatis vero, rerum eum consequatur accusamus, mollitia qui molestias commodi maiores fugit in est repellat magni repudiandae sed enim placeat! Quaerat magni aliquid eius voluptatem fugit eveniet iure tempore ea corporis quibusdam. Doloribus, modi consequuntur.
            </p>
        </div>
    </div>
    <div className=' border mt-4 rounded-[2px] mr-2 absolute top-23 left-[1176px] right-0 pb-90 flex flex-col justify-center  '>
        <div className=' flex flex-col justify-center pb-80 pl-6'>
            <p className='m-4 pl-8'>
                Book Hospital Visit
            </p>
            <p className='m-4'>Available from tomorrow 10 am</p>
            <div className='m-4 '> 
            <Datepicker 
                useRange={false} 
                asSingle={true} 
                value={value} 
                onChange={handleValueChange} 
                /> 

            </div>
            <div className='m-4 pr-6 pb-2'>
            <TimePicker onChange={onChange} value={value1} />
            </div>
            <button className=' border 4 mr-4'>Book Appointment Now</button>
        </div>
    </div>
    </div>
    </>
  )
}
