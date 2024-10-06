import LinkButton from '@/components/LinkButton';
import style from './style.module.css';

export default () => {
	return (
		<>
			<LinkButton path="/">Back to home</LinkButton>
			<div className={style.mcq}>
				<ol>
					{/* 1 */}
					<li>A</li>

					{/* 2 */}
					<li>C</li>
					<LinkButton path="/mcq-question-2">Go to code</LinkButton>

					{/* 3 */}
					<li>C</li>
					<LinkButton path="/mcq-question-3">Go to code</LinkButton>

					{/* 4 */}
					<li>C</li>
					<LinkButton path="/mcq-question-4">Go to code</LinkButton>

					{/* 5 */}
					<li>C</li>
					<LinkButton path="/mcq-question-5">Go to code</LinkButton>

					{/* 6 */}
					<li>D</li>
					<LinkButton path="/mcq-question-6">Go to code</LinkButton>

					{/* 7 */}
					<li>B</li>

					{/* 8 */}
					<li>C</li>

					{/* 9 */}
					<li>A</li>

					{/* 10 */}
					<li>A</li>

					{/* 11 */}
					<li>D</li>

					{/* 12 */}
					<li>B</li>
				</ol>
			</div>
		</>
	);
};
