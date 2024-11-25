'use client'

// practise
/*"use client"
import { useState } from "react"

const State = () => {
    const [count, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(count + 1)
    }
    const handleDecrement = () => {
        setCounter(count -1)
    }

    return (
        <div>
            <h1 className="text-7xl">{count}</h1>
            <button className="py-2 px-10 bg-blue-700 text-white rounded-md" onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-10 bg-red-700 text-white rounded-md ml-5" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default State;*/

import { useState } from "react"

const State = () => {
    const [count, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(count + 1)
    }
    const handleDecrement = () => {
        setCounter(count -1)
    }

    return (
        <div className="bg-purple-300">
            <h1 className="text-7xl">{count}</h1>
            <button className="py-2 px-10 bg-purple-700 text-white rounded-md xl:cols-2 sm:cols-2 md:cols-3" onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-10 bg-pink-600 text-white rounded-md ml-5 sm:cols-2 md:cols-3" onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}

export default State;



