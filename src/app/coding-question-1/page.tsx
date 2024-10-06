// Challenge 1: Create a React page that works like a calculator that can add two numbers.
// Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output.

'use client';
import LinkButton from '@/components/LinkButton';
import { useState } from 'react';

type Calculator = {
	first: number;
	second: number;
	total: number;
};

export default () => {
	const [values, setValues] = useState<Calculator>({
		first: 0,
		second: 0,
		total: 0,
	});

	const onChangeValues = (value: number, target: keyof Calculator) => {
		setValues((state) => {
			return { ...state, [target]: value };
		});
	};

	const onSumValues = () => {
		const total = values.first + values.second;
		setValues((state) => ({ ...state, total }));
	};

	return (
		<>
			<LinkButton path="/">Back to home</LinkButton>
			<div style={{ padding: '1rem' }}>
				<h1>Adding Two Numbers</h1>
				<p style={{ margin: '0.5rem 0' }}>
					<input
						type={'number'}
						value={values.first}
						onChange={(e) => onChangeValues(parseInt(e.target.value), 'first')}
					/>
				</p>
				<p style={{ margin: '0.5rem 0' }}>
					<input
						type={'number'}
						value={values.second}
						onChange={(e) => onChangeValues(parseInt(e.target.value), 'second')}
					/>
				</p>
				<button style={{ margin: '0.5rem 0' }} onClick={onSumValues}>
					Add Two Numbers
				</button>
				<p>Total: {values.total}</p>
			</div>
		</>
	);
};
