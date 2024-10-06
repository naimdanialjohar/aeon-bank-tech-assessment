import LinkButton from '@/components/LinkButton';

// answer is C
// question specifically mentioned width and height are 100px
export default () => (
	<>
		<LinkButton path="/mcq-answers">Back</LinkButton>
		<fieldset style={{ height: '100px', width: '100px' }}>
			<legend>Coding is Fun</legend>
		</fieldset>
	</>
);
