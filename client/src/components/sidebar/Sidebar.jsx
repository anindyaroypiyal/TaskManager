import './Sidebar.scss';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
// 	const { auth } = useSelector((state) => ({ ...state }));
// 	const { currentUser } = auth;

// 	return (
// 		<div>
// 			<ul className='sidebar'>
// 				<li className='list-item'>
// 					<h5>{currentUser.username}</h5>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/dashboard'>Dashboard</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/settings'>Settings</Link>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="sidebar">
      <div className="user-profile">
        <div className="avatar">
          {/* You can replace this with an actual user avatar */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/420/940/original/avatar-icon-vector-illustration.jpg"
            alt={currentUser.username}
          />
        </div>
        <h5>Hi, {currentUser.username} !</h5>
      </div>
      <ul className="nav-links">
        <li className="list-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="list-item">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



