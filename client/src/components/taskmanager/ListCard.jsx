/* eslint-disable react/prop-types */
import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiEdit, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem, editTask } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const ListCard = (items) => {
	const { item } = items;

	const dispatch = useDispatch();

	const ArrowClick = (string) => {
		dispatch(arrowClick(item, string));
	};
	const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};
	
	const handleEdit = () => {
		const data = {
			task_id: item._id,
			task: item.task,
			details: item.details,
			due: item.due,
		  };
		  const dataString = JSON.stringify(data);
	
		  // Store the data in sessionStorage with a key
		  localStorage.setItem('myData', dataString);
		// console.log(item._id);
	}; 
	
	return (
		<div>
		  <ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
			<li>
			  <p>{dayjs(item.due).format('DD/MM/YYYY')}</p>
			</li>
			<li>
			  <p>{item.task}</p>
			</li>
			<li>
			  <p>{item.details}</p>
			</li>
			<li>
			  <p>{item.status}</p>
			</li>
			<li>
			  <button
				disabled={item.status === 'todo'}
				onClick={() => ArrowClick('left')}
			  >
				<BiChevronLeft />
			  </button>
			  <button
				disabled={item.status === 'done'}
				onClick={() => ArrowClick('right')}
			  >
				<BiChevronRight />
			  </button>
			  <Link to='/tmedit'>
				<button onClick={handleEdit}>
				  <BiEdit />
				</button>
			  </Link>
			  <button onClick={handleDelete}>
				<BiTrash />
			  </button>
			</li>
		  </ul>
		</div>
	  );
	};
export default ListCard;
