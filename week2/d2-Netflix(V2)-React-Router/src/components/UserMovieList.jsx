import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserMovieList = (props) => {
	let userMoviesFromLocalStorage =
		JSON.parse(window.localStorage.getItem("userMovieList")) || [];

	const [movies, setMovies] = useState(userMoviesFromLocalStorage);

	useEffect(() => {
		setMovies(userMoviesFromLocalStorage);
	}, [userMoviesFromLocalStorage]);

	return (
		<div>
			{movies.length > 0 ? (
				<Container className='user-list-page'>
					<h1 className='text-center'>Your List</h1>
					<hr />
					<Row className='justify-content-center'>
						{movies.map((userMovie, index) => {
							return (
								<Col md={3} className='mx-3 my-3'>
									{/* <h1>{userMovie.title}</h1> */}
									<Link to={`/details/${userMovie.id}`}>
										<img
											key={index}
											src={userMovie.Poster}
											alt={userMovie.Title}
										/>
									</Link>
								</Col>
							);
						})}
					</Row>
				</Container>
			) : (
				<div>
					<h3
						style={{ color: "gray", marginTop: "10%" }}
						className='text-center mx-5 '>
						There is no movie in your list &#9785;
					</h3>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((br) => (
						<br />
					))}
				</div>
			)}
		</div>
	);
};

export default UserMovieList;
