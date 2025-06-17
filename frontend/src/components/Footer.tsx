import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const columns = [
	{
		title: "Company",
		links: [
			"What's New",
			"About",
			"Press",
			"Careers",
			"Social Good",
			"Contact",
		],
	},
	{
		title: "Community",
		links: [
			"Medicare for Business",
			"2022 Creator Report",
			"Charities",
			"Creator Profile Directory",
			"Explore Templates",
		],
	},
	{
		title: "Support",
		links: [
			"Help Topics",
			"Getting Started",
			"Linktree Pro",
			"Features & How-Tos",
			"FAQs",
			"Report a Violation",
		],
	},
	{
		title: "Trust & Legal",
		links: [
			"Terms & Conditions",
			"Privacy Notice",
			"Cookie Notice",
			"Trust Center",
			"Cookie Preferences",
		],
	},
];

const Footer = () => (
	<footer className="w-full bg-[#1a1a1a] py-8 px-4 sm:px-6 lg:px-8 ">
		<div className="max-w-7xl mx-auto">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{columns.map((column) => (
					<div key={column.title}>
						<h3 className="text-white font-semibold mb-4">{column.title}</h3>
						<ul className="space-y-2">
							{column.links.map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
				<div className="flex items-center gap-2 mb-4 md:mb-0">
					{/* <img src="/divith-logo.png" alt="Divith Logo" className="w-32 h-12" /> */}
					<span className="text-white font-bold text-base leading-tight">
						Divith <br />
						<span className="block text-xs font-normal text-gray-300">
							Path Labs & Diagnostics
						</span>
					</span>
				</div>
				<div className="flex gap-4">
					<a
						href="#"
						className="text-gray-300 hover:text-white transition-colors">
						<FaInstagram size={20} />
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white transition-colors">
						<FaTwitter size={20} />
					</a>
					<a
						href="#"
						className="text-gray-300 hover:text-white transition-colors">
						<FaFacebookF size={20} />
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
