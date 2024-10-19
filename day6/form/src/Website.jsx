import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function Website() {

  const [userName, setUserName] = useState(['ram', 'shyam', 'sita']);

  console.log(userName);

  const formHandler = (event) => {
    event.preventDefault();

    const uName = event.target.name.value;

    const finalUserData = [...userName, uName];

    setUserName(finalUserData);

  }

  return (
    <div className='flex max-w-7xl mx-auto justify-between'>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              {/* <th
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
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {
              userName.map(
                (v, i) => {

                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 w-72">
                        {v}
                      </td>
                    </tr>
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
          {/* <div className="mb-4">
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
          </div> */}
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
