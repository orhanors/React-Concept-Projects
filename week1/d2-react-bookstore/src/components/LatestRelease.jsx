import React, { useState, useEffect } from "react";
import BookCard from "./common/BookCard";

import { Row, Col } from "react-bootstrap";
const LatestRelease = (props) => {
	return (
		<div>
			<Row>
				{props.books.map((book) => {
					return (
						<Col xs={6} md={4}>
							<BookCard
								key={book.asin}
								title={book.title}
								image={book.img}
								price={book.price}
								category={book.category}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default LatestRelease;
