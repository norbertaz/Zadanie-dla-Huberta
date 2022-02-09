import React, {useState} from "react";

import '../styles/TodoStyles.css'


const ToDo = () => {
    const [singleTodo, setSingleTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [sortedByOldest, setSortedByOldest] = useState(false)

    const handleSubmit = e => {

        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random()*10000),
            text: singleTodo,
            date: new Date(),
            sorted: sortedByOldest,
        }
        console.log(newTodo.Date)
        setTodos([...todos].concat(newTodo))
        setSingleTodo('')
    }
    const deleteTodo = (id) => {
        const newTodos = [...todos].filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const handleDescSort = () => {
        setSortedByOldest(false)
        todos.sort((a,b) => a.date.getTime()-b.date.getTime())
        console.log(todos)
    }
    const handleAscSort = () => {
        setSortedByOldest(true)
        todos.sort((a,b) => b.date.getTime()-a.date.getTime())
        console.log(todos)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="sort-wrapper">
                    <div className="desc" onClick={handleDescSort}>Sortuj od najnowszego</div>
                    <div className="asc" onClick={handleAscSort}>Sortuj od najstarszego</div>
                </div>
                <input type='text' value={singleTodo} onChange={e => setSingleTodo(e.target.value)} />
                <button className="submit-btn" type='submit'>Dodaj</button>
            </form>
            <div className="todo-wrapper">
                {todos.map(todo => (
                    <div className="todo" key={todo.id}>
                        <div>{todo.text}</div>
                        <button className="delete" onClick={()=> deleteTodo(todo.id)}>Usuń</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ToDo