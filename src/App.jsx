import { useState } from "react"
import { nanoid } from "nanoid";
import ListItem from "./Components/ListItem";

function App() {

  const [todo, setTodo] = useState("")

  const [showValidation, setShowValidation] = useState("")

  const [todoList, setTodoList] = useState([
    {id: nanoid(8), content: "item 17"},
    {id: nanoid(8), content: "item 2"},
    {id: nanoid(8), content: "item 3"},
  ])

  function deleteToDo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (todo === "") {
      setShowValidation(true)

      return;
    }

    setTodoList([...todoList, {id: nanoid(8), content: todo}])
    setTodo("");
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-Do List</h1>

        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className="text-slate-50"> Ajouter une chose à faire</label>
          <input type="text" className="mt-1 block w-full rounded" value={todo} onChange={e => setTodo(e.target.value)}></input>
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-x-[115px]">Ajouter</button>
          {showValidation && (<p className="text-red-400">Ajouter d'abord du contenue a votre tache</p>)}
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">Pas d'item a afficher...</li>
          )}
          {todoList.length > 0 && (todoList.map(item => (
               <ListItem key={item.key} itemData={item} deleteTodo={deleteToDo}/>
          )))}
        
        </ul>
      </div>
    </div>
  )
}

export default App
