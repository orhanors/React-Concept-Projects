import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reservations from "./components/Reservations";
import DishDetails from "./components/DishDetails";
import Menu from "./components/Menu";
/**In App.js give a "header" prop to the Reservations component. If present, this component should display it
        instead of the generic 'RESERVATIONS' in the h2. */
class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<NavBar title='Strivestaurant' />
					<Route
						path='/'
						exact
						// render={(props) => (
						//   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
						// )}
						render={(
							props // props are history, location, match
						) => <Home title='Stefano' {...props} />} // in this way you can pass your own props along with the router ones
					/>
					<Route path='/menu' exact component={Menu} />
					<Route
						path='/reservation'
						exact
						render={(props) => (
							<Reservations
								{...props}
								header={"Reservations with Prop"}
							/>
						)}
					/>
					<Route path='/details/:stefano' component={DishDetails} />
				</Router>
			</>
		);
	}
}

export default App;
