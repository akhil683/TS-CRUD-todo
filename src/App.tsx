import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Sections from "./components/Sections"
import List from "./components/List"

const App = () => {
  const [ count, setCount ] = useState<number>(1);

  return (
    <>
      <h1 className=" text-red-500 text-3xl">Hello World</h1>
      <Heading title="Hello Guys" />
      <Sections title="Different Title">
        This is my section.
      </Sections>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee", "Tacos", "Code"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
