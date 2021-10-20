import './App.css';
import Landing from './component/Landing';
import React, { useState, useEffect } from 'react';

function App({ phoneState }) {
	// const [inputText, setInputText] = useState('');
	const [inputText, setInputText] = useState('');
	// const [count, setCount] = useState(0);
	var textValue = '';
	useEffect(() => {
		console.log('use Effect ran');
		// if (window.connectedState === 'Connecting') {
		// 	setInputText(window.connectedState);
		// }
	}, [inputText]);
	useEffect(() => {
		console.log('use Effect ran 2');
		window.addEventListener('message', (event) => {
			// IMPORTANT: check the origin of the data!
			if (event.origin.startsWith('http://localhost:3000')) {
				// The data was sent from your site.
				// Data sent with postMessage is stored in event.data:
				console.log(
					'Data received from Dialler window: ' + JSON.stringify(event.data)
				);
				if (event.data.connectedState) {
					window.connectedState = event.data.connectedState;
					setInputText(window.connectedState);
				}
			} else {
				// The data was NOT sent from your site!
				// Be careful! Do not use it. This else branch is
				// here just for clarity, you usually shouldn't need it.
				return;
			}
		});
	}, []);
	return (
		<div className='App'>
			<input
				id='input_ajaya'
				type='text'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder=''
			></input>
			{/* {window.connectedState === 'Connecting' && <label>Connecting...</label>} */}
			<button onClick={() => setInputText(window.connectedState)}>
				Click me
			</button>
			<Landing></Landing>
		</div>
	);
}
App.defaultProps = {
	phoneState: '',
};
export default App;
