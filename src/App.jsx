import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Layout from './components/Layout';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div>
			<Header />
			<Navbar />

			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</div>
	);
};

export default App;
