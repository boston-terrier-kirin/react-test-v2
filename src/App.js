import { useState } from 'react';

function App() {
	const [color, setColor] = useState('red');
	const [text, setText] = useState('Change to blue');

	const handleClick = () => {
		if (color === 'red') {
			setColor('blue');
			setText('Change to red');
		} else {
			setColor('red');
			setText('Change to blue');
		}
	};

	return (
		<div>
			<button
				onClick={handleClick}
				style={{ backgroundColor: color, height: '35px' }}
			>
				{text}
			</button>
		</div>
	);
}

export default App;
