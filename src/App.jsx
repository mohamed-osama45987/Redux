import Counter from "./components/Counter"
import { useSelector, useDispatch, } from "react-redux"
import { fetchCats } from "./Redux-ToolKit/Slices/Cats"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()


  const cats = useSelector((state) => {
    return state.cats.catsArray
  })

  // update the global state with cats
  useEffect(() => {
    dispatch(fetchCats())
  })




  return (<>
    <Counter />
    {cats.map((cat, idx) => {
      return <img key={idx} src={cat.url} />
    })}
  </>)
}

export default App
