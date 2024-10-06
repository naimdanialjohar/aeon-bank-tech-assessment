import LinkButton from '@/components/LinkButton';

// answer is C
// 2(0) + 2 = 2 <-- starts at 2
// 2(1) + 2 = 4
// 2(2) + 2 = 6
export default () => (
	<>
		<LinkButton path="/mcq-answers">Back</LinkButton>
		<style>{`
			div p:nth-child(2n+2) {
			color: red; }
	`}</style>
		<div>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
			<p>1</p>
		</div>
	</>
);
