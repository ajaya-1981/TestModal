import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.addEventListener('message', (event) => {
	// IMPORTANT: check the origin of the data!
	if (event.origin.startsWith('http://localhost:3000')) {
		// The data was sent from your site.
		// Data sent with postMessage is stored in event.data:
		console.log('Data received from Dialler window: ' + event.data);
		debugger;
		if (event.data.connectedState) {
			window.connectedState = event.data.connectedState;
		}
	} else {
		// The data was NOT sent from your site!
		// Be careful! Do not use it. This else branch is
		// here just for clarity, you usually shouldn't need it.
		return;
	}
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
