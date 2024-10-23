import { useEffect, useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  const [price, setPrice] = useState(0)

  const inc = () => {
    setCount(count + 1);
  }

  const decs = () => {
    setCount(count - 1);
  }

  useEffect(
    () => {
      setPrice(count * 100);
    },

    [count] // dependencies=> this function work on page refresh and whenever value of count change;
  )

  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Simple Counter</h1>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="btn btn-danger btn-lg mx-5" id="decrement" onClick={decs}>
            -
          </button>
          <h2 className="mx-5" id="counterValue">
            Count is {count}
          </h2>
          <h2 className="mx-5" id="counterValue">
            Price is {price}
          </h2>
          <button className="btn btn-success btn-lg mx-5" id="increment" onClick={inc}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default App
