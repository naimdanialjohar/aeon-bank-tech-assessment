import LinkButton from '@/components/LinkButton';

// answer is C
// because float does not affect anything to achieve the objective of this question
export default () => (
	<>
		<LinkButton path="/mcq-answers">Back</LinkButton>
		<style>
			{`
		.tabs {
			background-color: lightgreen; 
			color: white;
			border: none;
			padding: 20px;
			text-align: center;
			font-size: 16px;
		} 
		.tabs:hover {
			background-color: green; }
		`}
		</style>
		<div>
			<button className="tabs">LALA</button>
			<button className="tabs">LALA</button>
			<button className="tabs">LALA</button>
			<button className="tabs">LALA</button>
			<button className="tabs">LALA</button>
		</div>
	</>
);
