import React from "react";
import TodoCard from "./TodoCard";
import { useStateContext } from "../context/StateContext";

const TodoList = ({ onDelete, onEdit }) => {
	const { todos } = useStateContext();

	return (
		<div className='flex flex-col gap-5 justify-center items-center mt-10 w-full px-10'>
			{todos.map((todo) => (
				<TodoCard
					key={todo.id}
					onDelete={onDelete}
					onEdit={onEdit}
					{...todo}
				/>
			))}
		</div>
	);
};

export default TodoList;
