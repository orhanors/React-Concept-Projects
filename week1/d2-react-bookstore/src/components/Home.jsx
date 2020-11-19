import React, { Component } from "react";
import NavBar from "./common/NavBar";
import BookJumbotron from "./common/BookJumbotron";
import LatestRelease from "./LatestRelease";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import horror from "../data/horror.json";

let allBooks = {
	fantasy,
	history,
	romance,
	scifi,
	horror,
};
class Home extends Component {
	state = {
		selected: "Fantasy",
	};

	handleSelect = (category) => {
		this.setState({ selected: category });
	};
	render() {
		const { selected } = this.state;
		const books = allBooks[selected.toLowerCase()];
		return (
			<div>
				<NavBar selected={selected} onSelection={this.handleSelect} />
				<div className='container mt-5'>
					<BookJumbotron />
					<LatestRelease books={books} />
				</div>
			</div>
		);
	}
}

export default Home;
