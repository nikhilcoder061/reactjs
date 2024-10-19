import React from 'react'

export default function Table() {
    return (
        <>
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
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                John Doe
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                john.doe@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                (123) 456-7890
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Jane Smith
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                jane.smith@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                (098) 765-4321
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                Alice Johnson
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                alice.johnson@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                (555) 123-4567
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )
}
