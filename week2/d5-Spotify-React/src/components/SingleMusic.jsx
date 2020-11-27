import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class SingleMusic extends Component {
	state = { isClickedtoPlay: false };
	render() {
		const { musicData } = this.props;
		return (
			<Card className='music-card' style={{ width: "12rem" }}>
				<Card.Img
					// onClick={this.props.imgClicked(
					// 	musicData.album.cover_small,
					// 	musicData.album.title,
					// 	musicData.artist.name
					// )}
					className='card-img'
					style={{ padding: "1rem" }}
					variant='top'
					src={musicData.album.cover_medium}
				/>
				<div
					className='icon-box'
					onClick={() =>
						this.setState({
							isClickedtoPlay: !this.state.isClickedtoPlay,
						})
					}>
					<FontAwesomeIcon
						icon={this.state.isClickedtoPlay ? faPause : faPlay}
					/>
				</div>
				<Card.Body className='music-card-body'>
					<Card.Title>
						<Link
							style={{ color: "white" }}
							to={`/album/${musicData.album.id}`}>
							{musicData.album.title.length > 16
								? musicData.album.title.substring(0, 15) + "..."
								: musicData.album.title}
						</Link>
					</Card.Title>
					<Card.Title>
						<Link
							style={{ color: "gray" }}
							to={`/artist/${musicData.artist.id}/${musicData.artist.name}`}>
							{musicData.artist.name}
						</Link>
					</Card.Title>
					{/* <Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text> */}
				</Card.Body>
			</Card>
		);
	}
}

export default SingleMusic;
