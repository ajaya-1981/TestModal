import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalDialer from './ModalDialer';
import TestPopUp from './TestPopUp';

function Landing() {
	const [modalShow, setModalShow] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	return (
		<div>
			<h1> Test Page</h1>
			<Button variant='primary' onClick={() => setModalShow(true)}>
				click me
			</Button>
			<Button variant='primary' onClick={() => setShowPopup(true)}>
				test me
			</Button>

			<ModalDialer show={modalShow} onHide={() => setModalShow(false)} />

			{showPopup ? (
				<TestPopUp text='Close Me' closePopup={() => setShowPopup(false)} />
			) : null}
		</div>
	);
}

export default Landing;
