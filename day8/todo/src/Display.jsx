export default function Display({ allToDo, deleteHandeler }) {


    const deleteToDo = (index) => {
        // console.log(index);
        deleteHandeler(index);

    }


    return (
        <>
            <ul className="list-group">

                {
                    allToDo.map(
                        (listItem, listIndex) => {
                            return (
                                <li key={listIndex} className="list-group-item d-flex justify-content-between align-items-center my-2  border">

                                    {listItem}
                                    
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteToDo(listIndex)}>
                                        Delete
                                    </button>
                                </li>
                            )
                        }
                    )
                }

            </ul>
        </>
    )
}
