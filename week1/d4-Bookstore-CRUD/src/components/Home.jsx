import React, { Component } from "react";
import paginate from "../utils/pagination";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import BookList from "./BookList";

import history from "../data/fantasy.json";

import WarningSing from "./common/WarningSign";

import MyPagination from "./common/MyPagination";

let userQuery = null;
class Home extends Component {
	state = {
		books: history,
		moviesPerPage: 12,
		currentPage: 1,
	};

	handleSearch(query) {
		if (query) {
			let filteredArray = this.state.books.filter((book) =>
				book.title.toLowerCase().includes(query.toLowerCase())
			);
			this.setState({ books: filteredArray });
			userQuery = query;
		} else {
			this.setState({ books: history });
		}
	}

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};
	render() {
		const pageBooks = paginate(
			this.state.currentPage,
			this.state.moviesPerPage,
			this.state.books
		);
		return (
			<Container className='mt-5 mb-5'>
				<h1 className='text-center'>Book Store</h1>
				<InputGroup className='mb-4 mt-4'>
					<FormControl
						placeholder='Search book'
						onKeyUp={(e) => this.handleSearch(e.target.value)}
						aria-describedby='basic-addon1'
					/>
				</InputGroup>

				<MyPagination
					itemsPerPage={this.state.moviesPerPage}
					totalItems={this.state.books.length}
					onPageChange={this.handlePageChange}
				/>
				{this.state.books.length === 0 && (
					<WarningSing text={userQuery} />
				)}
				<BookList books={pageBooks} />
			</Container>
		);
	}
}

export default Home;
