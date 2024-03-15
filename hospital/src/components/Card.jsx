import React from "react";
import axios from "axios";

export default function Card(props) {
  const eventHandle = (props) => {
    console.log(props);
    axios
      .post(
        "https://hospital-fc931-default-rtdb.firebaseio.com/register/pharmacy.json",
        props
      )
      .then(() => alert("submitted successfully"));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className=" flex-col justify-center align-center text-blue-600 border-2 border-sky-500 bg-slate-100">
          <div>
            <img className="ml-14 mr-10" src={props.image} />
          </div>
          <div>
            <p className="text-center ">{props.title}</p>
            <p className="text-center">Price : {props.price}</p>
          </div>
          <div flex-wrap gap-1>
            <button
              type="button"
              onClick={() => {
                eventHandle(props);
              }}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              ADD TO CART
            </button>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              BUY NOW !!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
