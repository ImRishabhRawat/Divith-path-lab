import React, { useState } from "react";
import { Link } from "react-router-dom";

const LocationIcon = () => (
	<svg
		width="18"
		height="18"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="text-gray-500">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
		/>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M19.5 9.5c0 7-7.5 12-7.5 12s-7.5-5-7.5-12a7.5 7.5 0 1115 0z"
		/>
	</svg>
);
const SearchIcon = () => (
	<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white">
		<circle cx="11" cy="11" r="7" strokeWidth="2" />
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M21 21l-4.35-4.35"
		/>
	</svg>
);
const UserIcon = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="text-gray-500">
		<circle cx="12" cy="8" r="4" strokeWidth="2" />
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
		/>
	</svg>
);
const ChevronDownIcon = () => (
	<svg
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="text-gray-400">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M19 9l-7 7-7-7"
		/>
	</svg>
);
const TagIcon = () => (
	<svg
		width="18"
		height="18"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="text-orange-500">
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7 7h.01M3 11.5V7a2 2 0 012-2h4.5a2 2 0 011.414.586l7.5 7.5a2 2 0 010 2.828l-4.5 4.5a2 2 0 01-2.828 0l-7.5-7.5A2 2 0 013 11.5z"
		/>
	</svg>
);
const HamburgerIcon = () => (
	<svg
		width="32"
		height="32"
		fill="none"
		viewBox="0 0 24 24"
		stroke="#355C1E"
		strokeWidth="2">
		<line
			x1="5"
			y1="7"
			x2="19"
			y2="7"
			stroke="#355C1E"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<line
			x1="5"
			y1="12"
			x2="19"
			y2="12"
			stroke="#355C1E"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<line
			x1="5"
			y1="17"
			x2="19"
			y2="17"
			stroke="#355C1E"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);

const NAV_LINKS = [
	{ label: "BOOK A TEST", path: "/book-test" },
	{ label: "DOCTORS", path: "/doctors" },
	{ label: "BUSINESS PARTNERSHIP", path: "/business-partnership" },
	{ label: "ABOUT US", path: "/about-us" },
	{ label: "CAREER", path: "/career" },
	{ label: "INVESTORS", path: "/investors" },
	{ label: "BLOGS", path: "/blogs" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-30 font-sans mt-4 mb-4 px-4 sm:px-6 lg:px-8">
			<div className="bg-[#f3f4f6] rounded-3xl shadow-lg border border-[#e0f7fa]">
				{/* Top Row */}
				<div className="flex items-center justify-between max-w-7xl mx-auto px-2 md:px-8 py-4 w-full">
					<Link
						to="/"
						className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<img
							src="/divith-logo.png"
							alt="Divith Logo"
							className="w-32 h-16"
						/>
					</Link>
					<div className="hidden lg:flex flex-1 items-center gap-2 md:gap-6 justify-center">
						<button className="flex items-center gap-1 text-gray-600 text-sm px-2 py-1 rounded hover:bg-gray-100 flex-col">
							<div className="flex items-center gap-1">
								<LocationIcon />
								<span className="hidden md:block text-xs lg: font-medium">
									Select Location
								</span>
							</div>
							<div className="flex items-center gap-1">
								<span className="font-semibold text-black ml-1 text-base">
									New York
								</span>
								<span className="ml-1">
									<ChevronDownIcon />
								</span>
							</div>
						</button>
						<div className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm w-full max-w-md lg:max-w-1/2 h-12">
							<span className="flex items-center justify-center p-2  rounded-full bg-black mr-2">
								<SearchIcon />
							</span>
							<input
								className="bg-transparent border-none focus:outline-none outline-none w-full text-gray-700 placeholder-gray-400 text-sm ml-2 h-full"
								placeholder="Lab Tests, Scans & Health Checkup Packages"
								type="text"
							/>
						</div>
					</div>
					<nav className="hidden md:flex items-center gap-4 min-w-max">
						<div className="flex items-center gap-1 relative">
							<span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full mr-1">
								New
							</span>
							<span className="text-gray-700 font-medium">
								Healthcare Services
							</span>
							<span className="ml-1">
								<ChevronDownIcon />
							</span>
						</div>
						<span className="text-orange-500 font-medium flex items-center gap-1 cursor-pointer">
							<TagIcon /> Offers
						</span>
						<span className="flex items-center gap-1 text-gray-700 cursor-pointer">
							<UserIcon /> Login
						</span>
					</nav>
					{/* Hamburger only on mobile/medium screens */}
					<button
						className="lg:hidden p-2 rounded focus:outline-none ml-2"
						onClick={() => setMenuOpen((open) => !open)}
						aria-label="Open menu">
						<HamburgerIcon />
					</button>
				</div>
				{/* Nav-links row (desktop only) */}
				<div className="hidden lg:flex justify-center gap-8 border-t border-[#e9eeef] py-2 bg-[#f3f4f6] w-full rounded-b-3xl">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.label}
							to={link.path}
							className="text-gray-700 font-medium hover:text-black transition px-2">
							{link.label}
						</Link>
					))}
				</div>
				{/* Hamburger Drawer (mobile/medium only) */}
				{menuOpen && (
					<div className="fixed inset-0 z-40 bg-black bg-opacity-30 flex justify-end lg:hidden">
						<div className="w-72 bg-[#b6f0ef] h-full shadow-lg p-6 flex flex-col gap-6 rounded-l-3xl animate-slideIn border-l border-[#e0f7fa]">
							<button
								className="self-end mb-4 text-2xl text-gray-500 hover:text-black"
								onClick={() => setMenuOpen(false)}
								aria-label="Close menu">
								&times;
							</button>
							<div className="flex flex-col gap-4">
								<div className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-sm w-full h-12">
									<span className="flex items-center justify-center p-2 rounded-full bg-black mr-2">
										<SearchIcon />
									</span>
									<input
										className="bg-transparent border-none focus:outline-none outline-none w-full text-gray-700 placeholder-gray-400 text-sm ml-2 h-full"
										placeholder="Lab Tests, Scans & Health Checkup Packages"
										type="text"
									/>
								</div>
								<button className="flex items-center gap-2 text-gray-700 text-base py-2">
									<LocationIcon />
									<span className="text-xs font-medium">Select Location</span>
									<span className="font-semibold text-black ml-1 text-base">
										New York
									</span>
									<ChevronDownIcon />
								</button>
								<button className="flex items-center gap-2 text-gray-700 text-base py-2">
									<span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full mr-1">
										New
									</span>
									<span>Healthcare Services</span>
									<ChevronDownIcon />
								</button>
								<button className="flex items-center gap-2 text-orange-500 text-base py-2">
									<TagIcon /> Offers
								</button>
								<button className="flex items-center gap-2 text-gray-700 text-base py-2">
									<UserIcon /> Login
								</button>
								{/* Nav links in drawer */}
								{NAV_LINKS.map((link) => (
									<Link
										key={link.label}
										to={link.path}
										className="text-gray-700 text-base py-2"
										onClick={() => setMenuOpen(false)}>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
