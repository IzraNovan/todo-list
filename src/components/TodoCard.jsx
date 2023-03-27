import React, { useState } from "react";
import EditTodo from "./EditTodo";
import { useStateContext } from "../context/StateContext";

const TodoCard = ({ onDelete, onEdit, activity, id }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='flex w-[60%] px-6 py-4 bg-teal-500 rounded-xl justify-between items-center'>
			<div className='flex gap-10'>
				<h1 className='text-white text-lg'>{activity}</h1>
			</div>

			<div className='flex gap-5'>
				<button
					className='px-5 py-2 w-[100px] bg-blue-500 rounded-xl text-white'
					onClick={() => setShowModal(true)}>
					Edit
				</button>
				<button
					className='px-5 py-2 w-[100px] bg-red-500 rounded-xl text-white'
					onClick={() => onDelete(id)}>
					Delete
				</button>

				{showModal ? (
					<EditTodo
						setShowModal={setShowModal}
						onEdit={onEdit}
						activity={activity}
						id={id}
					/>
				) : null}
			</div>
		</div>
	);
};

export default TodoCard;
