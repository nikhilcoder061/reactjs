import React from 'react'

export default function Input({ inputHandeler }) {



    const addToDo = (event) => {
        if (event.key == 'Enter') {
            inputHandeler(event.target.value);
            event.target.value = '';
        }
    }

    return (
        <>
            <div className="my-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    placeholder="Enter Todo"
                    onKeyUp={addToDo}
                />
            </div>

        </>
    )
}
