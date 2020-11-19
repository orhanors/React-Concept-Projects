import React from "react";

import { Card, Button, Col } from "react-bootstrap";

import MyBadge from "./common/MyBadge";

import CommentForm from "./CommentForm";

import CommentArea from "./CommentArea";
class SingleBook extends React.Component {
	state = {
		clicked: false,
		backgroundColor: "white",
		commentForBook: false,
		showComments: false,
	};

	handleCardClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	handleHover = (e) => {
		e.currentTarget.style.cursor = "pointer";
	};

	handleComment = () => {
		this.setState({ commentForBook: !this.state.commentForBook });
	};

	handleCommentTable = () => {
		this.setState({ showComments: !this.state.showComments });
	};
	render() {
		return (
			<Col className='mb-2 col-6 col-md-4'>
				<Card
					onMouseOver={this.handleHover}
					style={{
						width: "18rem",
						objectFit: "cover",
						backgroundColor:
							this.state.clicked == true
								? "green"
								: "rgb(187, 187, 187)",
					}}>
					{this.state.commentForBook === true ? (
						<CommentForm bookId={this.props.singleBook.asin} />
					) : this.state.showComments == false ? (
						<Card.Img
							onClick={this.handleCardClick}
							variant='top'
							src={this.props.singleBook.img}
						/>
					) : (
						<CommentArea commentId={this.props.singleBook.asin} />
					)}

					<Card.Body>
						<Card.Title>{this.props.singleBook.title}</Card.Title>
						<Card.Text>
							<MyBadge
								color={
									this.props.singleBook.price > 10
										? "danger"
										: "success"
								}
								text={this.props.singleBook.price}
							/>
						</Card.Text>
					</Card.Body>
					<div className='d-flex justify-content-between'>
						<Button
							style={{
								textAlign: "center",
							}}
							onClick={this.handleComment}
							variant={
								this.state.commentForBook == false
									? "success"
									: "warning"
							}>
							{this.state.commentForBook == false
								? "Add Comment"
								: "Back to Book"}
						</Button>
						<Button
							onClick={this.handleCommentTable}
							variant={
								this.state.showComments == false
									? "secondary"
									: "warning"
							}>
							{this.state.showComments == false
								? "Show Comments"
								: "Back to Book"}
						</Button>
						{/* <CommentArea commentId={this.props.singleBook.asin} /> */}
					</div>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
