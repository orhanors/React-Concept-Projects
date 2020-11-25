import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
class CommentList extends React.Component {
	state = {
		comments: [],
		isLoading: true,
		update: true,
		deletedSize: 0,
	};

	getComments = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.movieId,
				{
					headers: new Headers({
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
					}),
				}
			);

			if (response.ok) {
				let comments = await response.json();

				this.setState({ comments, isLoading: false });
			}
		} catch (e) {
			this.setState({ isLoading: false });
		}
	};

	handleDelete = async (e) => {
		let id = e.currentTarget.id;
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${id}`,
				{
					method: "DELETE",
					headers: new Headers({
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU3ODc1MzAsImV4cCI6MTYwNjk5NzEzMH0.Zh2_B2q2kU9HXf8BCQynoJlDO9MzTuRcs1ThC87pBzs",
						"Content-Type": "application/json",
					}),
				}
			);

			if (response.ok) {
				let filteredComments = this.state.comments.filter(
					(comment) => comment._id !== id
				);
				this.setState({
					comments: filteredComments,
					isloading: false,
					deletedSize: this.state.deletedSize + 1,
				});
			} else {
				alert("something went wrong :(");
			}
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount = () => {
		this.getComments();
	};

	// componentWillUnmount() {
	// 	this.getComments();
	// }

	shouldComponentUpdate() {
		return this.state.update;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.submittedSize !== this.props.submittedSize) {
			this.getComments();
			// this.setState({ update: !this.state.update });
		}
	}
	render() {
		let body;

		if (!this.state.isLoading && this.state.comments.length !== 0) {
			body = (
				<div className='mb-5'>
					{this.state.comments.map((comment, index) => {
						let variant = "";

						switch (comment.rate) {
							case 1:
								variant = "danger";
								break;
							case 2:
								variant = "warning";
								break;
							case 3:
								variant = "secondary";
								break;
							default:
								variant = "success";
								break;
						}
						return (
							<ListGroup
								key={index}
								className='comment-item d-flex justify-content-between mt-2'>
								<ListGroup.Item className='text-dark'>
									Comment: {comment.comment}
								</ListGroup.Item>
								<ListGroup.Item className='text-dark'>
									<span>Rate </span>
									<Badge pill variant={variant}>
										{comment.rate}
									</Badge>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										id={comment._id}
										variant='danger'
										onClick={this.handleDelete}>
										Delete
									</Button>
								</ListGroup.Item>
							</ListGroup>
						);
					})}
				</div>
			);
		} else if (this.state.comments.length === 0 && !this.state.isLoading) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					<Alert variant='warning'>
						&#9780; There is no comment for this movie!{" "}
						<strong>Leave the first comment</strong>
					</Alert>
				</div>
			);
		} else {
			body = (
				<Spinner
					style={{ marginLeft: "50%" }}
					animation='grow'
					variant='danger'
				/>
			);
		}
		return body;
	}
}

export default CommentList;
