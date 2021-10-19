import './App.css';
import Landing from './component/Landing';
import React, { useState, useEffect } from 'react';

function App({ phoneState }) {
	const [inputText, setInputText] = useState('');
	// const [count, setCount] = useState(0);
	var textValue = '';
	useEffect(() => {
		console.log('use Effect ran');
	});
	return (
		<div className='App'>
			<input
				id='input_ajaya'
				type='text'
				value={textValue}
				onChange={(e) => setInputText(e.target.value)}
				placeholder=''
			></input>
			{/* {window.connectedState === 'Connecting' && <label>Connecting...</label>} */}
			<button onClick={() => setInputText('Connecting...')}>Click me</button>
			<Landing></Landing>
		</div>
	);
}
App.defaultProps = {
	phoneState: '',
};
export default App;
