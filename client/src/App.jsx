import './App.css';
import Header from './components/header/Header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import TmEdit from './pages/taskmanagement/TmEdit';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/Settings';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';


function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={!auth.currentUser ? <Signin /> : <Dashboard />}
					/>
					<Route
						path='/signup'
						element={!auth.currentUser ? <Signup /> : <Dashboard />}
					/>
					<Route
						path='/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='/tmedit'
						element={
							<RequireAuth>
								<TmEdit />
							</RequireAuth>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<RequireAuth>
								<Dashboard />
							</RequireAuth>
						}
					/>
					<Route
						path='/settings'
						element={
							<RequireAuth>
								<Settings />
							</RequireAuth>
						}
					/>
					
				</Routes>
			</Router>
		</div>
	);
}

export default App;