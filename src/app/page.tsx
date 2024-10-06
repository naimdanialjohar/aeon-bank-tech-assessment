import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Image
					className={styles.logo}
					src="https://nextjs.org/icons/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
				<ol>
					<li>Developed in React, TypeScript and NextJS</li>
				</ol>

				<div className={styles.ctas}>
					<a className={styles.secondary} href="/mcq-answers">
						MCQ Answers
					</a>
					<a className={styles.primary} href="/coding-question-1">
						Coding Exercise 1
					</a>
					<a href="/coding-question-2" className={styles.secondary}>
						Coding Exercise 2
					</a>
					<a className={styles.primary} href="/coding-question-3">
						Coding Exercise 3
					</a>
				</div>
			</main>
		</div>
	);
}
