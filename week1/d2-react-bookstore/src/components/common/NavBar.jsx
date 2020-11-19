import React, { useState } from "react";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";

const NavBar = (props) => {
	const categories = ["Fantasy", "History", "Horror", "Romance", "SciFi"];

	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='#home'>
				<img
					alt=''
					src='/logo.svg'
					width='30'
					height='30'
					className='d-inline-block align-top'
				/>{" "}
				Homeros Book Store
			</Navbar.Brand>

			<DropdownButton
				id='dropdown-variants-secondary'
				title={props.selected}>
				{categories.map((category) => (
					<Dropdown.Item onClick={() => props.onSelection(category)}>
						{category}
					</Dropdown.Item>
				))}
			</DropdownButton>
		</Navbar>
	);
};

export default NavBar;
