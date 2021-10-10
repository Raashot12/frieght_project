import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NewBooking from './components/NewBooking/NewBooking';


export default function App() {
	return (
		<div>
			<Navbar></Navbar>
			<NewBooking />
		</div>
	)
}
