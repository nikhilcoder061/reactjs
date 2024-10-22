import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'

export default function Website() {

    const [allToDo, setAllToDo] = useState(['Task1', 'Task2', 'Task3', 'Task4']);


    const inputHandeler = (inputValue) => {

        const finalTodo = [...allToDo, inputValue];

        setAllToDo(finalTodo);

    }

    const deleteHandeler = (deleteListItem) => {

        const finalTodo = allToDo.filter(
            (listItem, listIndex) => {
                // return deleteListItem != listIndex;
                if (deleteListItem == listIndex) {
                    return false;
                } else {
                    return true;
                }
            }
        )

        setAllToDo(finalTodo);

    }

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center'>Todo List</h1>
                        <Input inputHandeler={inputHandeler} />
                    </div>
                    <div className="row mx-1">
                        <Display allToDo={allToDo} deleteHandeler={deleteHandeler} />
                    </div>
                </div>
            </div>

        </>
    )
}
