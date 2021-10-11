import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalDialer from './ModalDialer';
import TestPopUp from './TestPopUp';

var md5 = require('md5');
var adminToken;

function Landing() {
	const [modalShow, setModalShow] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	const showModalWindow = () => {
		setModalShow(!modalShow);
		//it will be replaced later with actual code
		setTimeout(() => {
			const diallerWindow = document.getElementById('dialler-window');
			diallerWindow && diallerWindow.contentWindow.postMessage(
				{ agentId: '1' },
				'http://localhost:3000'
			);
			console.log('dialler window' + diallerWindow);
		}, 3000);
	};

	return (
		<div>
			<h1> Test Page</h1>
			<div className='btn-group mr-2' role='group' aria-label='First group'>
				<Button
					className='space'
					variant='primary'
					onClick={() => getUserAuthenticate()}
				>
					Authenticate
				</Button>
			</div>
			<div className='btn-group mr-2' role='group' aria-label='Second group'>
				<Button
					className='space'
					variant='primary'
					onClick={() => showModalWindow()}
				>
					click me
				</Button>
				{modalShow && <ModalDialer show={modalShow} onHide={() => setModalShow(false)} />}
			</div>
			<div className='btn-group' role='group' aria-label='Third group'>
				<Button
					className='space'
					variant='primary'
					onClick={() => setShowPopup(true)}
				>
					test me
				</Button>
			</div>

			{showPopup ? (
				<TestPopUp text='Close Me' closePopup={() => setShowPopup(false)} />
			) : null}
		</div>
	);
}

export default Landing;
const getUserAuthenticate = () => {
	var myHeaders = new Headers();
	// myHeaders.append('Cookie', 'PHPSESSID=0sk8l906n8sv8kamdgkujilb63');
	var password = 'Ez4xm5uf';
	var suffixServer = '@deltapath';
	var encryptedPwd = md5(md5(password) + suffixServer);

	var formdata = new FormData();
	formdata.append('username', 'admin1');
	formdata.append('data', encryptedPwd);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow',
	};

	fetch(
		'https://junction.deltapath.com/RESTful/index.php/v1/post/api/token/request',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => {
			adminToken = result.token;
			console.log(result);
		})
		.catch((error) => console.log('error', error));
};

const getAllUserList = () => {
	var myHeaders = new Headers();
	myHeaders.append(
		'x-frsip-api-token',
		'b54df27044eb0d7e086a2311e3eddb4c5da81fd3d2545b2f2f4e44e87a561b7f'
	);
	myHeaders.append(
		'Cookie',
		'PHPSESSID=b54df27044eb0d7e086a2311e3eddb4c5da81fd3d2545b2f2f4e44e87a561b7f'
	);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch(
		'https://junction.deltapath.com/RESTful/index.php/v1/get/api/token/view/list?start=0&limit=100',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
};
