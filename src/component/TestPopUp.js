import React from 'react';

const frame =
	'<iframe src="http://localhost:3000" width="540" height="750"></iframe>';
function iframe() {
	return {
		__html: frame,
	};
}
function TestPopUp(props) {
	return (
		<div className='popup'>
			<div className='popup_inner'>
				{/* <h1>{props.text}</h1> */}
				<button onClick={props.closePopup}>close me</button>
				<div dangerouslySetInnerHTML={iframe()}></div>
			</div>
		</div>
	);
}

export default TestPopUp;
