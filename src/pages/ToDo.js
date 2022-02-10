import React, {useState} from "react";

import {Button} from '../StyledComponents/Timer.styled'
import {Form, Input, Todos, SortingWrapper,SortingButton} from '../StyledComponents/Todo.styled'


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
            <Form onSubmit={handleSubmit}>
                <SortingWrapper>
                    <SortingButton onClick={handleDescSort}>Sortuj od najnowszego</SortingButton>
                    <SortingButton onClick={handleAscSort}>Sortuj od najstarszego</SortingButton>
                </SortingWrapper>
                <Input type='text' value={singleTodo} onChange={e => setSingleTodo(e.target.value)} />
                <Button bg="#adff2f" ml="15px" type='submit'>Dodaj</Button>
            </Form>
            <div className="todo-wrapper">
                {todos.map(todo => (
                    <Todos key={todo.id}>
                        <h3>{todo.text}</h3>
                        <Button onClick={()=> deleteTodo(todo.id)}>Usuń</Button>
                    </Todos>
                ))}
            </div>
        </>
    )
}
export default ToDo