import React from 'react';
import { Modal, Button } from 'react-bootstrap';

var userid = '8002';
const frame =
	'<iframe src="http://localhost:3000" id="dialler-window" width="540" height="750"></iframe>';
function iframe() {
	return {
		__html: frame,
	};
}
function ModalDialer(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			{/* <Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Modal heading
				</Modal.Title>
			</Modal.Header> */}
			<Modal.Body>
				<div dangerouslySetInnerHTML={iframe()}></div>
			</Modal.Body>
			{/* <Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer> */}
		</Modal>
	);
}

export default ModalDialer;
