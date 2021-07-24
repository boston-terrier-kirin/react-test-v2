import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('ボタンの初期値が正しいか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('チェックボックスの初期値が正しいか？', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('ボタンをクリックしたら青に変わるか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(button);

	expect(button).toHaveStyle({ backgroundColor: 'blue' });
	expect(button.textContent).toBe('Change to red');
});

test('ボタンを2回クリックしたら赤に戻るか？', () => {
	render(<App />);
	const button = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(button);
	fireEvent.click(button);

	expect(button).toHaveStyle({ backgroundColor: 'red' });
	expect(button.textContent).toBe('Change to blue');
});

test('ボタン赤の状態でチェックボックスをクリックするとボタンがdisabledになるか？', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const button = screen.getByRole('button', { name: 'Change to blue' });

	// チェックボックスをクリックする。
	fireEvent.click(checkbox);
	expect(button).not.toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'grey' });

	// 再度チェックボックスをクリックする。
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('ボタン青の状態でチェックボックスをクリックするとボタンがdisabledになるか？', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const button = screen.getByRole('button', { name: 'Change to blue' });

	// ボタンをクリックして青にする。
	fireEvent.click(button);

	// チェックボックスをクリックする。
	fireEvent.click(checkbox);
	expect(button).not.toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'grey' });

	// 再度チェックボックスをクリックする。
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

test('disabledの状態でボタンクリックしても色が変わらないか？', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const button = screen.getByRole('button', { name: 'Change to blue' });

	// チェックボックスをクリックして、ボタンをグレーにする。
	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: 'grey' });

	// ボタンをクリックしても、色はグレーのまま。
	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: 'grey' });
});
