import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
	componentDidUpdate() {}
	render() {
		return (
			<>
				<Form
					className='w-100 mb-5'
					onSubmit={this.props.onSubmitComment}>
					<Row>
						<Col md={12}>
							<Form.Group>
								<Form.Label htmlFor='comment'>
									Add a Comment
								</Form.Label>
								<Form.Control
									type='text'
									name='comment'
									id='comment'
									placeholder='Your comment'
									value={this.props.addComment.comment}
									onChange={this.props.onChangeElement}
									required
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<Form.Group>
								<Form.Label htmlFor='rate'>Rate</Form.Label>
								<Form.Control
									as='select'
									name='rate'
									id='rate'
									value={this.props.addComment.rate}
									onChange={this.props.onChangeElement}>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<Form.Group>
								<Form.Label htmlFor='elementId'>
									Element ID
								</Form.Label>
								<Form.Control
									type='text'
									name='elementId'
									id='elementId'
									placeholder='Element ID'
									value={this.props.movieId}
									readOnly
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row className='flex justify-content-center'>
						<Button variant='danger' type='submit'>
							Submit
						</Button>
					</Row>
				</Form>
			</>
		);
	}
}

export default AddComment;
