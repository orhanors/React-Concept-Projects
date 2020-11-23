import React from "react";
import { Button } from "react-bootstrap";

class SingleMovie extends React.Component {
	state = {
		clicked: false,
	};

	render() {
		return (
			<div className='col mb-5 mb-lg-0 pr-1 no-gutters mx-0'>
				<span className='overlay-icons'>
					<img
						src={this.props.Movie.Poster}
						className='img-fluid thumbnails'
					/>
					<Button
						variant='info'
						style={{ display: "none" }}
						onClick={this.props.onClicked}>
						Details
					</Button>
					{/* <h4
						className='text-light movieCard'
						style={{ display: "none" }}>
						{this.props.Movie.Title}
					</h4> */}
				</span>
			</div>
		);
	}
}

export default SingleMovie;
