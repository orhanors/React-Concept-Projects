import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />

				<Route path='/' exact component={Home} />
				<Route path='/details/:id/:title' component={MovieDetail} />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
