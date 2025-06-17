import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserIcon = ({ className = "text-gray-600" }: { className?: string }) => (
	<svg
		width="20"
		height="20"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className={className}>
		<circle cx="12" cy="8" r="4" strokeWidth="2" />
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
		/>
	</svg>
);

const HamburgerIcon = () => (
	<svg
		width="28"
		height="28"
		fill="none"
		viewBox="0 0 24 24"
		stroke="#006666"
		strokeWidth="2">
		<line
			x1="5"
			y1="7"
			x2="19"
			y2="7"
			stroke="#006666"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<line
			x1="5"
			y1="12"
			x2="19"
			y2="12"
			stroke="#006666"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<line
			x1="5"
			y1="17"
			x2="19"
			y2="17"
			stroke="#006666"
			strokeWidth="2"
			strokeLinecap="round"
		/>
	</svg>
);

const NAV_LINKS = [
	// { label: "BOOK A TEST", path: "/book-test" },
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
		<header className="w-full max-w-[1680px] mx-auto sticky top-0 z-30 font-sans mb-4">
			<div className="bg-white shadow-lg border border-[#e0f7fa] backdrop-blur-sm">
				{/* Main Header Row */}
				<div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4 w-full">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<img
							src="/divith-logo.png"
							alt="Divith Logo"
							className="w-32 h-16"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-8">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.label}
								to={link.path}
								className="text-gray-700 font-medium hover:text-[#006666] transition-colors duration-200 px-2 py-1 rounded-md hover:bg-[#f0fffe]">
								{link.label}
							</Link>
						))}
					</nav>

					{/* Login Button & Mobile Menu */}
					<div className="flex items-center gap-4">
						<Link
							to="/login"
							className="hidden md:flex items-center gap-2 bg-[#006666] text-white px-4 py-2 rounded-lg hover:bg-[#005555] transition-colors duration-200 font-medium">
							<UserIcon className="text-white" />
							Login
						</Link>
						
						{/* Mobile Menu Button */}
						<button
							className="lg:hidden p-2 rounded-lg hover:bg-[#f0fffe] transition-colors"
							onClick={() => setMenuOpen((open) => !open)}
							aria-label="Open menu">
							<HamburgerIcon />
						</button>
					</div>
				</div>

				{/* Mobile Menu Drawer */}
				{menuOpen && (
					<div className="fixed inset-0 z-40 bg-black bg-opacity-30 flex justify-end lg:hidden">
						<div className="w-80 bg-white h-full shadow-xl p-6 flex flex-col gap-6 animate-slideIn border-l border-[#e0f7fa]">
							<div className="flex items-center justify-between mb-4">
								<img
									src="/divith-logo.png"
									alt="Divith Logo"
									className="w-24 h-12"
								/>
								<button
									className="text-2xl text-gray-500 hover:text-[#006666] transition-colors"
									onClick={() => setMenuOpen(false)}
									aria-label="Close menu">
									&times;
								</button>
							</div>
							
							<div className="flex flex-col gap-2">
								{/* Mobile Login Button */}
								<Link
									to="/login"
									className="flex items-center gap-3 bg-[#006666] text-white px-4 py-3 rounded-lg hover:bg-[#005555] transition-colors duration-200 font-medium mb-4"
									onClick={() => setMenuOpen(false)}>
									<UserIcon className="text-white" />
									Login
								</Link>
								
								{/* Navigation Links */}
								{NAV_LINKS.map((link) => (
									<Link
										key={link.label}
										to={link.path}
										className="text-gray-700 font-medium py-3 px-2 hover:text-[#006666] hover:bg-[#f0fffe] rounded-md transition-colors duration-200"
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
