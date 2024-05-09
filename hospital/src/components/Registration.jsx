import React from "react";
import { useState } from "react";
import supabase from "../supabase.js";
import { Link } from "react-router-dom";

export default function Registration() {
  const [formdata, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { fullname, email, password, confirmPassword } = formdata;
  const changeHandler = (e) => {
    setformData({ ...formdata, [e.target.name]: e.target.value });
  };
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formdata.email,
        password: formdata.password,
        options: {
          data: {
            full_name: formdata.fullname,
          },
        },
      });
      if (error) throw error;
      console.log(data);
      alert("check your email");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form autoComplete="off" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                FullName
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={changeHandler}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={changeHandler}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={changeHandler}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Link
                to="/Login"
                className="text-sm text-gray-600 underline hover:text-gray-900"
              >
                Already registered?
              </Link>
            </div>
          </form>
          <button
            onClick={submitHandler}
            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
