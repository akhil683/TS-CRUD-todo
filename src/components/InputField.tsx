import { FormEvent, useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
   const inputRef = useRef<HTMLFormElement>(null)


  return (
    <form className="relative inline-block max-w-[500px] bg-white rounded-full p-1" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.focus();
    }}>
      <input
         ref={inputRef}
        className="py-2 px-4  rounded-full outline-none"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="py-2 px-4 text-white bg-blue-600 rounded-full ml-2">
        GO
      </button>
    </form>
  );
};

export default InputField;
