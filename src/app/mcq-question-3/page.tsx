import LinkButton from '@/components/LinkButton';

// answer is C
export default () => (
	<>
		<LinkButton path="/mcq-answers">Back</LinkButton>
		<style>{`
		#mainDiv {
			display: flex; 
		}
		#mainDiv div {
			width: 70px; height: 70px;
			background-color: white;
			border: 1px solid black;
		} 
		div#div1 {
			order: 2; 
		}
		div#div2 {
			order: 4;
		} 
		div#div3 {
			order: 3; 
		}
		div#div4 { 
			order: 1;
		}
		`}</style>
		<p>*open console and hover on the divs</p>
		<div id="mainDiv">
			<div id="div1"></div>
			<div id="div2"></div>
			<div id="div3"></div>
			<div id="div4" style={{ order: 6 }}></div>
		</div>
	</>
);
