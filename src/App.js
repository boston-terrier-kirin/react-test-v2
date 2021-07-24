import { useState } from 'react';

function App() {
	const [color, setColor] = useState('red');
	const [text, setText] = useState('Change to blue');
	const [disabled, setDisabled] = useState(false);

	const handleButton = () => {
		if (color === 'red') {
			setColor('blue');
			setText('Change to red');
		} else {
			setColor('red');
			setText('Change to blue');
		}
	};

	const handleCheckbox = () => {
		if (disabled) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};

	return (
		<div>
			<button
				onClick={handleButton}
				style={{
					backgroundColor: disabled ? 'grey' : color,
					height: '35px',
				}}
				disabled={disabled}
			>
				{text}
			</button>
			<input
				id="disable-button-checkbox"
				type="checkbox"
				onClick={handleCheckbox}
			/>
			<label htmlFor="disable-button-checkbox">Disable button</label>
		</div>
	);
}

export default App;
