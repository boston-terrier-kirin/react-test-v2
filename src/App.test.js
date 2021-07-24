import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('ボタンの色が正しいか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('クリックしたら青に変わるか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(button);

	expect(button).toHaveStyle({ backgroundColor: 'blue' });
	expect(button.textContent).toBe('Change to red');
});

test('2回クリックしたら赤に戻るか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(button);
	fireEvent.click(button);

	expect(button).toHaveStyle({ backgroundColor: 'red' });
	expect(button.textContent).toBe('Change to blue');
});
