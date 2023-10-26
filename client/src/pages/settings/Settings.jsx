import React, { useState } from 'react';
import './settings.scss';
import { useDispatch, useSelector } from 'react-redux'; 
import { updateUser } from '../../redux/authSlice';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));
    const { currentUser } = auth;
  const [state, setState] = useState({
    username: currentUser.username,
  });

  const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state.username, currentUser.id));
    setState({
        username: '',
    });
};

  return (
    <div>
      <div className='dashboard__left'>
					<Sidebar />
				</div>
      
    <div className="settings-page">
      <h1>Account Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleChange}
            required
            />
        </div>
        {/* <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div> */}
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default Settings;