// Challenge 3: Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

'use client';

import LinkButton from '@/components/LinkButton';

const twoSum = (numbers: number[], target: number): number[] => {
	let leftPointer = 0;
	let rightPointer = numbers.length - 1;

	while (leftPointer < rightPointer) {
		const total = numbers[leftPointer] + numbers[rightPointer];

		if (total === target) {
			return [leftPointer + 1, rightPointer + 1];
		} else if (total < target) {
			leftPointer++;
		} else {
			rightPointer--;
		}
	}

	return [];
};

export default () => (
	<>
		<LinkButton path="/">Back to home</LinkButton>
		<div style={{ padding: '0.5rem' }}>
			<h2>Challenge 3: Two Sum II - Input Array Is Sorted</h2>
			<p style={{ marginBottom: '0.5rem' }}>{`Test A: [${twoSum(
				[2, 7, 11, 15],
				9,
			)}]`}</p>
			<p style={{ marginBottom: '0.5rem' }}>{`Test B: [${twoSum(
				[2, 3, 4],
				6,
			)}]`}</p>
			<p style={{ marginBottom: '0.5rem' }}>{`Test C: [${twoSum(
				[-1, 0],
				-1,
			)}]`}</p>
		</div>
	</>
);
