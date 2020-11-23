import React from "react";
import { Modal } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class ModalForm extends React.Component {
	state = {
		addComment: {
			comment: "",
			rate: 1,
			elementId: this.props.movie.imdbID,
		},
		errMessage: "",
		show: false,
		submittedSize: 0,
	};

	updateCommentField = (e) => {
		let addComment = { ...this.state.addComment };
		let currentId = e.currentTarget.id;

		addComment[currentId] = e.currentTarget.value;

		this.setState({ addComment });
	};

	// onChangeHandler = (e) => {
	//   this.setState({
	//     credentials: {
	//       ...this.state.credentials,
	//       [e.target.id]: e.target.value,
	//     },
	//   });
	// };

	submitComment = async (e) => {
		e.preventDefault();
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.addComment),
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NmVlNDk4MzViMDAwMTc1ODRlZWYiLCJpYXQiOjE2MDU3OTE0NjEsImV4cCI6MTYwNzAwMTA2MX0.YTGWs-WE6fSktqoFHduczyCMUNBgU_oun60C8b9uJnk",
					}),
				}
			);

			if (response.ok) {
				alert("Comment saved!");
				this.setState({
					addComment: {
						comment: "",
						rate: 1,
						elementId: this.props.movie.imdbID,
					},
					errMessage: "",
					submittedSize: this.state.submittedSize + 1,
				});
			} else {
				console.log("an error occurred");
				let error = await response.json();
				this.setState({
					errMessage: error.message,
				});
			}
		} catch (e) {
			console.log(e); // Error
			this.setState({
				errMessage: e.message,
			});
		}
	};
	render() {
		return (
			<>
				<Modal show={this.props.show} onHide={this.props.onHide}>
					<Modal.Header
						closeButton
						className='flex justify-content-center'>
						<Modal.Title className='text-center text-dark'>
							{this.props.movie.Title}
						</Modal.Title>
					</Modal.Header>
					<img
						src={this.props.movie.Poster}
						alt='movie'
						style={{ objectFit: "cover", height: "200px" }}
					/>
					<Modal.Body style={{ backgroundColor: "black" }}>
						<CommentList
							submittedSize={this.state.submittedSize}
							movieId={this.props.movie.imdbID}
						/>
						<AddComment
							addComment={this.state.addComment}
							onChangeElement={this.updateCommentField}
							onSubmitComment={this.submitComment}
							movieId={this.props.movie.imdbID}
						/>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default ModalForm;
