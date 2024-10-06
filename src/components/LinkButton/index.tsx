import { PropsWithChildren } from 'react';

export default ({ children, path }: PropsWithChildren<{ path: string }>) => (
	<a
		href={path}
		style={{
			margin: '1rem',
			display: 'inline-block',
			background: 'grey',
			padding: '0.5rem',
			borderRadius: '10px',
		}}
	>
		{children}
	</a>
);
