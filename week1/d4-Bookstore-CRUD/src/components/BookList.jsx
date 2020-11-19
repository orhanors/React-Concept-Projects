import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";

const BookList = (props) => {
	return (
		<Row>
			{props.books.map((book) => (
				<SingleBook
					isSelected={false}
					key={book.asin}
					singleBook={book}
				/>
			))}
		</Row>
	);
};

export default BookList;
