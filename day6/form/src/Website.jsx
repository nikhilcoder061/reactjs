import React, { useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartDislike } from "react-icons/io";

export default function Website() {

  const [userName, setUserName] = useState([
    { uName: 'wscubetech', uEmail: 'wscubetech@gmail.com', uPhone: 9876543210 },
    { uName: 'wscubetech1', uEmail: 'wscubetech1@gmail.com', uPhone: 9233210 }
  ]);


  const formHandler = (event) => {
    event.preventDefault();

    const uName = event.target.name.value;
    const uEmail = event.target.email.value;
    const uPhone = event.target.phone.value;


    const finalUserData = [...userName, { uName, uEmail, uPhone }];

    setUserName(finalUserData);

  }



  return (
    <div className='flex max-w-7xl mx-auto justify-between'>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                S. No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {
              userName.map(
                (v, i) => {
                  return (
                    <AllList v={v} i={i} key={i}/>
                  )
                }
              )
            }


          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={formHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required=""
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required=""
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}


function AllList({ v, i }) {

  const [status, setStatus] = useState(true);
  const changeStatus = () => {
    setStatus(!status);
  }

  return (
    <tr key={i}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-72">
        {i + 1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-72">
        {v.uName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-72">
        {v.uEmail}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-72">
        {v.uPhone}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-900 w-72 text-3xl cursor-pointer">

        {
          status == true ? <IoMdHeart onClick={changeStatus} /> : <IoMdHeartDislike onClick={changeStatus} />
        }
      </td>
    </tr>
  )
}
