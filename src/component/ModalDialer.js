import React from 'react';

// var userid = '8002';
const frame =
	'<iframe src="http://localhost:3000" id="dialler-window" width="540" height="630" scrolling="no"></iframe>';
function iframe() {
	return {
		__html: frame,
	};
}
function ModalDialer(props) {
	return (
		<div>
			{/* <Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			
			<Modal.Body>
				<div dangerouslySetInnerHTML={iframe()}></div>
			</Modal.Body>
			
		</Modal> */}

			<div className='modal-container' {...props}>
				<div dangerouslySetInnerHTML={iframe()}></div>
			</div>
		</div>
	);
}

export default ModalDialer;
