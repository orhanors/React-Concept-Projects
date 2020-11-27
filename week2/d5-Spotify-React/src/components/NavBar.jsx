import React, { Component } from "react";
import {
	Navbar,
	Nav,
	Form,
	Button,
	FormControl,
	InputGroup,
} from "react-bootstrap";

import { withRouter } from "react-router-dom";
class NavBar extends Component {
	state = { searchString: "" };

	searchStringHandler = (e) => {
		if (e.keyCode === 13 || e.key === "Enter") {
			// WHEN ENTER KEY IS PRESSED
			e.preventDefault();
			this.props.searchedKeyword(this.state.searchString);
		} else {
			this.setState({ searchString: e.currentTarget.value });
		}
	};
	render() {
		const { pathname } = this.props.location;
		return (
			<>
				{!pathname.includes("album") && !pathname.includes("artist") && (
					<Navbar
						className='navbar mt-2 nav-page d-flex justify-content-between'
						variant='light'>
						<Form inline>
							<InputGroup className='icons'>
								<FormControl
									className='mr-sm-2 searchBar'
									placeholder='Search and press enter'
									aria-label='search'
									aria-describedby='basic-addon1'
									onKeyDown={this.searchStringHandler}
									onChange={this.searchStringHandler}
									value={this.state.searchStringg}
								/>
							</InputGroup>
							{/* <FormControl
								type='text'
								placeholder='Search'
								aria-label='search'
								aria-describedby='basic-addon1'
								className='mr-sm-2 searchBar'
								value={this.state.searchString}
								onChange={this.searchStringHandler}
							/> */}
							{/* <Button variant='outline-primary'>Search</Button> */}
						</Form>
						{/* <Nav className='mr-auto text-white'>
							<Nav.Link href='#'>Home</Nav.Link>
							<Nav.Link href='#'>Features</Nav.Link>
							<Nav.Link href='#'>Pricing</Nav.Link>
						</Nav> */}
					</Navbar>
				)}
			</>
		);
	}
}

export default withRouter(NavBar);
