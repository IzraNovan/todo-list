import React from 'react'
import { useStateContext } from '../context/StateContext'

const AddTodo = ({ onAdd }) => {
	const { activity, setActivity } = useStateContext()

	const addHandler = (e) => {
		e.preventDefault()
		onAdd({ activity })
		setActivity('')
	}

	return (
		<div className='mt-10 w-full'>
			<form
				className='w-full flex gap-5 justify-center items-center'
				onSubmit={addHandler()}>
				<input
					className='border border-teal-500 p-2 w-[40%] rounded-xl'
					type='text'
					value={activity}
					placeholder="What's you going to do?"
					onChange={(event) => setActivity(event.target.value)}
				/>

				<button className='p-3 bg-teal-500 text-gray-100 w-[100px] rounded-xl drop-shadow-xl'>
					Add
				</button>
			</form>
		</div>
	)
}

export default AddTodo
