import React, { Component } from "react";
import { Button, Table, Spinner, Alert } from "react-bootstrap";
import "../commentArea.css";
const headers = new Headers({
	Authorization:
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU3ODc1MzAsImV4cCI6MTYwNjk5NzEzMH0.Zh2_B2q2kU9HXf8BCQynoJlDO9MzTuRcs1ThC87pBzs",
	"Content-Type": "application/json",
});
class CommentArea extends Component {
	state = { bookComments: [], loading: true };

	componentDidMount = async () => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
				{ headers }
			);

			const comments = await response.json();

			if (response.ok) {
				this.setState({ loading: false });
				this.setState({ bookComments: comments });
			} else {
				alert("something wrong");
			}
		} catch (err) {
			console.log(err);
		}
	};

	handleDelete = async (e) => {
		let id = e.currentTarget.id;
		console.log(id);

		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${id}`,
				{
					method: "DELETE",
					headers,
				}
			);

			if (response.ok) {
				alert("deleted");
				this.setState({ loading: false });
				let filteredComments = this.state.bookComments.filter(
					(comment) => comment._id !== id
				);
				this.setState({ bookComments: filteredComments });
			}
		} catch (err) {
			console.log(err);
		}
	};

	searchFilter = (e) => {
		let keyword = e.currentTarget.value;
		if (keyword) {
			let filteredArray = this.state.bookComments.filter((comment) =>
				comment.comment.toLowerCase().includes(keyword.toLowerCase())
			);

			this.setState({ bookComments: filteredArray });
		}
	};
	render() {
		return (
			<div className='d-flex flex-column justify-content-center'>
				{this.state.loading && (
					<div className='font-bold d-flex justify-content-center'>
						<Spinner animation='border' variant='success' />
					</div>
				)}

				{this.state.bookComments.length === 0 ? (
					<Alert className='text-center' variant='danger'>
						No comments found :(
					</Alert>
				) : (
					<div>
						<div class='form__group field container d-flex justify-content-center'>
							<input
								onChange={(e) => this.searchFilter(e)}
								id='searchBar'
								type='input'
								class='form__field'
								placeholder='Name'
								name='name'
								id='name'
								required
							/>
							<label for='name' class='form__label'>
								Search
							</label>
						</div>
						<Table striped bordered hover variant='dark'>
							<thead>
								<tr>
									<th>Comment</th>
									<th>Rating</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.state.bookComments.map(
									(comment, index) => {
										return (
											<tr key={index}>
												<td>{comment.comment}</td>
												<td>{comment.rate}</td>
												<td>
													<Button
														onClick={
															this.handleDelete
														}
														id={comment._id}
														variant='danger'>
														Delete
													</Button>
												</td>
											</tr>
										);
									}
								)}
							</tbody>
						</Table>
					</div>
				)}
			</div>
		);
	}
}

export default CommentArea;
