import React, { useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useStateContext } from '../context/StateContext'

const Main = () => {
	const { getTodo, addTodo, deleteTodo, editTodo, setTodos, todos } =
		useStateContext()

	useEffect(() => {
		const getAllTodos = async () => {
			const allTodos = await getTodo()
			if (allTodos) setTodos(allTodos)
		}

		getAllTodos()
	}, [])

	return (
		<>
			<button>Submit</button>
			<button>Kirim</button>
		</>
	)
}

export default Main
