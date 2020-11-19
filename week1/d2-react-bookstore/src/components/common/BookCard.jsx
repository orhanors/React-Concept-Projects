import React from "react";
import { Card } from "react-bootstrap";

const BookCard = (props) => {
	const { title, image, price, category } = props;
	return (
		<Card
			style={{ width: "18rem", backgroundColor: "gray" }}
			className='mt-2'>
			<Card.Img style={{ height: "400px" }} variant='top' src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<span className='badge badge-warning'>
					<Card.Text>{category}</Card.Text>
				</span>
			</Card.Body>
		</Card>
	);
};

export default BookCard;
