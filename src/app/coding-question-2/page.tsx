// Challenge 2: Create a blank page using React that contains the navbar as below.
// a. Navbar title can be any name. You can follow the sample image below
// b. Navbar should use <a> tag with href=”/”
// c. Please only create a search input without any functions.
// d. Mobile view is optional.

'use client';

import { SVGAttributes, useState } from 'react';
import style from './style.module.css';
import LinkButton from '@/components/LinkButton';

export default () => {
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showNavbarItems, setShowNavbarItems] = useState(false);

	return (
		<>
			<nav className={style.navbar}>
				<div
					className={`${style.navbarItems} ${showNavbarItems && style.show}`}
				>
					{/* <ul
					className={`${style.navbarItems} ${showNavbarItems && style.show}`}
					id="navbarMenu"
				> */}
					{navBarItems.map(({ title, href }) => (
						// <li key={title}>
						<a href={href} key={title}>
							{title}
						</a>
						// </li>
					))}
					{/* </ul> */}
				</div>
				<div className={style.navbarIcons}>
					<input
						type="text"
						placeholder="Search documentation..."
						className={`${style.searchBar} ${showSearchBar && style.show}`}
					/>
					<div className={style.icons}>
						<SearchIcon onClick={() => setShowSearchBar(!showSearchBar)} />
						<HamburgerIcon
							className={`${showNavbarItems && style.hide}`}
							onClick={() => setShowNavbarItems(true)}
						/>
						<CrossIcon
							className={`${showNavbarItems && style.show}`}
							onClick={() => setShowNavbarItems(false)}
						/>
					</div>
				</div>
			</nav>
			<LinkButton path="/">Back to home</LinkButton>
		</>
	);
};

type NavBarItems = {
	title: string;
	href: string;
};

const navBarItems: NavBarItems[] = [
	{ title: 'AEON', href: '/' },
	{
		title: 'Showcase',
		href: '/',
	},
	{
		title: 'Docs',
		href: '/',
	},
	{
		title: 'Blog',
		href: '/',
	},
	{
		title: 'Analytics',
		href: '/',
	},
	{
		title: 'Commerce',
		href: '/',
	},
	{
		title: 'Templates',
		href: '/',
	},
	{
		title: 'Enterprise',
		href: '/',
	},
];

const HamburgerIcon = ({
	onClick,
	className,
}: SVGAttributes<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="14"
		width="12.25"
		viewBox="0 0 448 512"
		className={`${className} ${style.hamburgerIcon}`}
		onClick={onClick}
	>
		<path
			fill="#ffffff"
			d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
		/>
	</svg>
);

const CrossIcon = ({ onClick, className }: SVGAttributes<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="14"
		width="10.5"
		viewBox="0 0 384 512"
		onClick={onClick}
		className={`${className} ${style.crossIcon}`}
	>
		<path
			fill="#ffffff"
			d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
		/>
	</svg>
);

const SearchIcon = ({ onClick }: SVGAttributes<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="14"
		width="14"
		viewBox="0 0 512 512"
		id={'searchIcon'}
		className={style.searchIcon}
		onClick={onClick}
	>
		<path
			fill="#ffffff"
			d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
		/>
	</svg>
);
