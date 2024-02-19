import { FormEvent, useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./components/Mode"
import TodoList from "./components/TodoList"

const App : React.FC= () => {

   const [todo, setTodo ] = useState<string>("")
   const [ todos, setTodos ] = useState<Todo[]>([]);

   const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
   } 

console.log(todos);

  return (
    <div className="bg-blue-600 w-screen flex flex-col items-center gap-6 p-4 h-screen">
      <h1 className=" text-white uppercase text-3xl text-center">taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
