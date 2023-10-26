import { useState } from 'react';
import './addtask.scss';
import { editTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditTask = () => {

		// Retrieve the data from sessionStorage using the key
	const storedData = localStorage.getItem('myData');

	// Parse the stored data from a JSON string to an object
	const parsedData = JSON.parse(storedData);

	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: parsedData.task,
		details: parsedData.details,
		due: parsedData.due,
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editTask(state.task, parsedData.task_id, state.details, state.due));
		setState({
			task: '',
			details: '',
			due: '',
		});
	};

	return (
		
		<div className="container">
		<h1>Edit Task</h1>
		<form action='' onSubmit={handleSubmit}>
		  <div className="form-group">
			<label htmlFor="title">Title</label>
			<input
			  type="text"
			  id="task"
			  name="task"
			  value={state.task}
			  onChange={handleChange}
			  placeholder="Update title"
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
			  placeholder="Update description"
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
		  <button type="submit">Update Task</button>
		</form>
	  </div>
	);
};

export default EditTask;
