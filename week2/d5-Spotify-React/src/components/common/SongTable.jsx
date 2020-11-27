import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const SongTable = (props) => {
	const { trackList } = props;

	return (
		<Container className='my-5 mr-5'>
			<ListGroup>
				{trackList.map((track) => {
					return (
						<ListGroup.Item className='track-list d-flex justify-content-between'>
							{" "}
							<span>{track.title}</span>{" "}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</Container>
	);
};

export default SongTable;
