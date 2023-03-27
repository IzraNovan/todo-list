import React, { useContext, createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import url from "../axios/todo";

const Context = createContext();

export const StateContext = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [activity, setActivity] = useState("");

	const getTodo = async () => {
		const response = await url.get("/todos");
		return response.data;
	};

	const addTodo = async (todo) => {
		const request = { id: uuid(), ...todo };
		const response = await url.post("/todos", request);
		setTodos([...todos, response.data]);
	};

	const deleteTodo = async (id) => {
		await url.delete(`/todos/${id}`);
		const newTodoList = todos.filter((todo) => todo.id !== id);
		setTodos(newTodoList);
	};

	const editTodo = async (todo) => {
		const response = await url.put(`/todos/${todo.id}`, todo);
		const { id } = response.data;
		setTodos(
			todos.map((todo) => {
				return todo.id === id ? { ...response.data } : todo;
			})
		);
	};

	return (
		<Context.Provider
			value={{
				todos,
				setTodos,
				activity,
				setActivity,
				getTodo,
				addTodo,
				deleteTodo,
				editTodo,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
