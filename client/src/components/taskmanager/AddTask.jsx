import { useState } from 'react';
import './addtask.scss';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
		details: '',
		due: '',
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id, state.details, state.due));
		setState({
			task: '',
			details: '',
			due: '',
		});
	};

	return (
		// <div>
		// 	<div className='addtask'>
		// 		<form action='' onSubmit={handleSubmit}>
		// 			<input
		// 				type='text'
		// 				name='task'
		// 				placeholder='add your task'
		// 				onChange={handleChange}
		// 				value={state.task}
		// 			/>
		// 			<input
		// 				type='text'
		// 				name='details'
		// 				placeholder='add details'
		// 				onChange={handleChange}
		// 				value={state.details}
		// 			/>
		// 			<button className='button'>Add Task</button>
		// 		</form>
		// 	</div>
		// </div>
		
		<div className="container">
		<h1>Create a Task</h1>
		<form action='' onSubmit={handleSubmit}>
		  <div className="form-group">
			<label htmlFor="title">Title</label>
			<input
			  type="text"
			  id="task"
			  name="task"
			  value={state.task}
			  onChange={handleChange}
			  placeholder="Enter title"
			  required
			/>
		  </div>
		  <div className="form-group">
			<label htmlFor="description">Description</label>
			<textarea
			  id="description"
			  name="details"
			  value={state.details}
			  onChange={handleChange}
			  rows="4"
			  placeholder="Enter description"
			  required
			/>
		  </div>
		  <div className="form-group">
			<label htmlFor="dueDate">Due Date</label>
			<input
			  type="date"
			  id="dueDate"
			  name="due"
			  value={state.due}
			  onChange={handleChange}
			  required
			/>
		  </div>
		  <button type="submit">Create Task</button>
		</form>
	  </div>
	);
};

export default AddTask;
