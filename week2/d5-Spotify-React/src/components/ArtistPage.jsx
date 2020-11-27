import React, { Component } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";

import "../Artist.css";
class ArtistPage extends Component {
	state = { artistInfo: {}, isLoading: true, trackList: [], isError: false };

	getArtistInfo = async () => {
		const artistId = this.props.match.params.id;

		try {
			const response = await fetch(
				" https://deezerdevs-deezer.p.rapidapi.com/artist/" + artistId,

				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			);
			const artistInfo = await response.json();
			if (response.ok) {
				console.log(artistInfo);
				this.setState({ artistInfo, isLoading: false });
			} else {
				this.setState({ isLoading: false, isError: true });
			}
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, isError: true });
		}
	};

	componentDidMount() {
		this.getArtistInfo();
	}
	render() {
		const { artistInfo } = this.state;
		return (
			<Container className='main-page artist-page-wrapper'>
				{this.state.artistInfo &&
				!this.state.isLoading &&
				!this.state.isError ? (
					<div id='artistpage' className=' col-10'>
						<section className='artist-page-header'>
							<div className='artist-top-header'>
								<div className='artist-top-image d-flex flex-column'>
									<img
										src={artistInfo.picture_big}
										alt='artist'
									/>
									<div className='artist-top-components d-flex justify-content-center'>
										<div>
											<p>
												{artistInfo.nb_fan} MONTHLY
												LISTENERS
											</p>
										</div>
										<h5>{artistInfo.name}</h5>
										<div className='artist-top-image-buttons'>
											<button
												type='button'
												className='btn btn-success px-5'>
												Play
											</button>
											<button
												type='button'
												className='btn btn-outline-dark px-5'>
												Follow
											</button>
											<button
												type='button'
												className='btn btn-success'>
												...
											</button>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				) : (
					!this.state.isError && (
						<Spinner
							style={{ marginLeft: "50%", marginTop: "20%" }}
							animation='grow'
							variant='success'
						/>
					)
				)}

				{this.state.isError && (
					<div
						style={{ marginTop: "20%" }}
						className='d-flex justify-content-center align-items-center'>
						<Alert variant='danger'>
							&#9762; Something went wrong!
							<strong> Refresh the page </strong>
						</Alert>
					</div>
				)}
			</Container>
		);
	}
}

export default ArtistPage;
