import { useContext, useEffect } from "react"
import BooksContext from "../../../../Context/BooksContext"

export default function Cart() {
  const data1 = useContext(BooksContext);
  useEffect(() => console.log(data1), [data1])

  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}