import React, { useEffect } from "react";
import coup from "../assets/coup.png";
import Tabs from "./Tabs";
import santoor from "../assets/santoor.jpeg";
import paracetmol from "../assets/para.jpeg";
// import axios from axios;

export default function Cart() {
  // const data =useEffect(()=>
  // {
  //   axios.get(`https://hospital-fc931-default-rtdb.firebaseio.com/register/${user}.json`)
  // },[])

  return (
    <div className="flex gap-3 mt-3">
      <div className="flex-1 border">
        <h1 className="justify-items-center text-center">cart items</h1>
        <hr className="ml-4 mr-4 " />
        <Tabs
          className="mb-3"
          image={paracetmol}
          title="paracetmol "
          price="10"
        />
        <Tabs
          className="mb-3"
          image={santoor}
          title="santoor soap "
          price="30"
        />
      </div>
      <div className="flex-auto grid-flow-col justify-items-center items-center ">
        <div className="border-2 mb-3 gap-3">
          <div className="flex align-middle justify-center ">
            <span className="ml-15 flex">
              <img className="w-5 h-5 bg-white" src={coup} alt="no coup" />
              <h2 className=" text-left flex-auto justify-items-center items-center">
                coupons
              </h2>
            </span>
          </div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            coupons
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border ml-2 mb-2   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter the promo code"
            required
          />
        </div>
        <div className="border-2">
          <h1>
            <b>Shopping Summary</b>
          </h1>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name </th>
                <th scope="col">quantity</th>
                <th scope="col">price($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>santoor soap</td>
                <td>1</td>
                <td>30</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>paracetmol</td>
                <td>3</td>
                <td>30</td>
              </tr>
              <tr>
                <td>total price</td>
                <td></td>
                <td></td>
                <td>60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
