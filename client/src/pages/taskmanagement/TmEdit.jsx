import Sidebar from '../../components/sidebar/Sidebar';
import EditTask from '../../components/taskmanager/EditTask';
import './tmedit.scss';

const TmEdit = () => {
	return (
		<div>
			<div className='taskmanager'>
				<div className='taskmanager__left'>
					<Sidebar />
				</div>
				<div className='taskmanager__right'>
					<div className='taskmanager__addtask'>
						<EditTask />
					</div>
					{/* <div className='taskmanager__tasklist'>
						<TaskList />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default TmEdit;