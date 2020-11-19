import React from "react";
import { Alert } from "react-bootstrap";

function WarningSign(props) {
	return (
		<div>
			<Alert variant={"danger"}>
				There is no matching book with the search {props.text}
			</Alert>
		</div>
	);
}

export default WarningSign;
