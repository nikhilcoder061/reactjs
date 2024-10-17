import React, { useState } from 'react'

export default function ShowPass() {

    const [showPass, setShowPass] = useState(false);

    const showHidePass = () => {
        setShowPass(!showPass);
    }
    return (
        <>
            <div className='max-w-3xl bg-blue-300 p-3 mx-auto flex gap-4' >

                <input type={showPass == false ? 'password' : 'text'} className='w-[70%] px-3' />
                <button className='border px-4 py-2 bg-red-200 text-lg' onClick={showHidePass}>
                    {showPass == false ? 'Show' : "Hide"} Password
                </button>

            </div>
        </>
    )
}
