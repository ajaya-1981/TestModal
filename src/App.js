import './App.css';
import Landing from './component/Landing';
import React, { useState } from 'react';

function App() {
	const [text, setText] = useState('');
	return (
		<div className='App'>
			<input
				id='input_ajaya'
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder=''
			></input>
			{window.connectedState == 'Connecting' && <label>Connecting...</label>}
			
			<Landing></Landing>
		</div>
	);
}

export default App;
