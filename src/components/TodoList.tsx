import { Todo } from "./Mode"

interface Props{
   todos: Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList= ({ todos, setTodos }: Props) => {
   // const [ filteredTodos, setFilteredTodos ] = useState<Todo[]>([])
   
   // const handleDelete = (currentTodo: object) => {
   //    const filteredTodos = todos.filter(todo => todo.id  == currentTodo.id);
   //    setFilteredTodos(filteredTodos);
   // }

  return (
    <div className='max-w-[800px] flex flex-col gap-4 '>
      {todos.map((todo) => (
         <div className=" bg-white px-4 py-2 gap-6 flex justify-between w-full rounded-full">
            <p>{todo.todo}</p>
            <div className="flex gap-4 ">
               <button>Edit</button> 
               <button>Delete</button>
               <button>Complete</button>
            </div>
         </div>
      ))}
    </div>
  )
}

export default TodoList
