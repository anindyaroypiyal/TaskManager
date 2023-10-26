import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '../history';
import { toast } from 'react-toastify';

const initialUser = localStorage.getItem('auth')
	? JSON.parse(localStorage.getItem('auth'))
	: null;

const initialState = {
	isLoading: false,
	currentUser: initialUser,
	error: null,
};
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.isLoading = false;
		},
		loginFailure: (state, action) => {
			state.error = action.payload;
		},
		registerSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.isLoading = false;
		},
		registerFailure: (state, action) => {
			state.error = action.payload;
		},
		logoutSuccess: (state) => {
			state.currentUser = null;
		},
		updateSuccess: (state, action) => {
			state.currentUser = action.payload;
			state.isLoading = false;
		},
	},
});

export const {
	loginFailure,
	loginSuccess,
	registerFailure,
	registerSuccess,
	logoutSuccess,
	updateSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'content-type': 'application/json',
			},
		};

		const response = await axios.post(
			'http://localhost:4000/auth/register',
			user,
			config
		);

		if (response) {
			dispatch(registerSuccess(response.data));
			toast.success('register successfull');
			history.push('/signin');
			window.location.reload();
		} else {
			dispatch(registerFailure());
			toast.error('registration failed');
		}
	} catch (error) {
		console.log(error);
		dispatch(registerFailure());
	}
};

export const signin = (user) => async (dispatch) => {
	console.log(user);
	try {
		const userData = {
			email: user.email,
			password: user.password,
		};
		const response = await axios.post(
			'http://localhost:4000/auth/signin',
			userData
		);
		if (response) {
			localStorage.setItem('auth', JSON.stringify(response.data));
			dispatch(loginSuccess(response.data));

			history.push('/dashboard');
			toast.success('login successfull');

			window.location.reload();
		} else {
			dispatch(loginFailure());
			toast.error('login failed');
		}
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const updateUser = (uname, uId) => async (dispatch) => {
	try {
	  const userUpdate = {
		username: uname,
		id: uId,
	  };
  
	  console.log(uname, uId, 'userUpdate');
	  
	  const response = await axios.put(
		'http://localhost:4000/auth/update',
		userUpdate
	  );
		
	  console.log('niiii');
	  if (response.status === 200) {
		// Assuming a 200 status code indicates a successful update
		dispatch(updateSuccess(response.data));
		toast.success('Update successful');
		history.push('/update');
		// window.location.replace('/dashboard');
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		history.push('/signin');
		window.location.reload();
	  } else {
		console.log('Server returned an unexpected status code:', response.status);
	  }
	} catch (error) {
	  console.error('Error:', error);
	}
  }  
