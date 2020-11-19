import React, { Component } from "react";
import { Col, Form, Row, Container, Button } from "react-bootstrap";

class CommentForm extends Component {
	state = {
		comment: {
			comment: "",
			rate: 1,
			elementId: this.props.bookId,
		},
		display: true,
	};

	updateComment = (e) => {
		let comment = { ...this.state.comment };

		let currentId = e.currentTarget.id;

		comment[currentId] = e.currentTarget.value;

		this.setState({ comment });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const headers = new Headers({
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU3ODc1MzAsImV4cCI6MTYwNjk5NzEzMH0.Zh2_B2q2kU9HXf8BCQynoJlDO9MzTuRcs1ThC87pBzs",
			"Content-Type": "application/json",
		});
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.comment),
					headers,
				}
			);

			if (response.ok) {
				alert("commented successfuly");
				this.setState({
					comment: {
						comment: "",
						rate: 1,
						elementId: this.props.bookId,
					},
				});
			} else {
				alert("something went wrong");
			}
		} catch (error) {
			console.log(error);
		}
	};
	formObject() {
		return (
			<Container className='mt-2'>
				<Form onSubmit={this.handleSubmit}>
					<Row>
						<Col md={12}>
							<Form.Group>
								<Form.Label htmlFor='comment'>
									Comment
								</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									name='comment'
									id='comment'
									placeholder='Comment...'
									value={this.state.comment.comment}
									onChange={this.updateComment}
									required
								/>
							</Form.Group>
						</Col>
						<Col md={12}>
							<Form.Group>
								<Form.Label htmlFor='rate'>Rate</Form.Label>
								<Form.Control
									as='select'
									name='rate'
									id='rate'
									value={this.state.comment.rate}
									onChange={this.updateComment}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col md={12}>
							<Form.Group>
								<Form.Label htmlFor='comment'>
									Book ID
								</Form.Label>
								<Form.Control
									type='text'
									name='elementId'
									id='elementId'
									placeholder='BookId'
									value={this.state.comment.elementId}
									disabled
								/>
							</Form.Group>
						</Col>
					</Row>
					<Button type='submit'>Submit</Button>
				</Form>
			</Container>
		);
	}

	render() {
		return <div>{this.state.display && this.formObject()}</div>;
	}
}

export default CommentForm;
