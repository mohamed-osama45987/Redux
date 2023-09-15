import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmmount } from "../Redux-ToolKit/Slices/Counter"
import { useState } from "react"


const Counter = () => {
    const count = useSelector((state) => {
        return state.counter.count
    })

    const dispatch = useDispatch()

    const [ammount, setAmmount] = useState(0)

    const handelChange = (e) => {
        setAmmount(Number(e.target.value))
    }

    const handelReset = () => {
        dispatch(reset()) //reset global state
        setAmmount(0) // reset local state
    }

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={handelReset}>Reset</button>


            <input type="number" value={ammount} onChange={(e) => handelChange(e)} />

            <button onClick={() => dispatch(incrementByAmmount(ammount))}>IncrementByAmmount</button>

        </div>
    )
}

export default Counter