import { FaChartLine, FaUsers, FaGlobe, FaBuilding } from "react-icons/fa";

const financialHighlights = [
	{
		title: "Revenue Growth",
		value: "45%",
		change: "+12%",
		icon: <FaChartLine className="text-4xl text-[#006666]" />,
	},
	{
		title: "Active Users",
		value: "2.5M+",
		change: "+25%",
		icon: <FaUsers className="text-4xl text-[#006666]" />,
	},
	{
		title: "Market Presence",
		value: "25+",
		change: "Cities",
		icon: <FaGlobe className="text-4xl text-[#006666]" />,
	},
	{
		title: "Healthcare Partners",
		value: "500+",
		change: "+50",
		icon: <FaBuilding className="text-4xl text-[#006666]" />,
	},
];

const investorUpdates = [
	{
		date: "March 15, 2024",
		title: "Q4 2023 Financial Results",
		description:
			"Strong revenue growth and expanding market presence in healthcare technology sector.",
	},
	{
		date: "February 28, 2024",
		title: "Strategic Partnership Announcement",
		description:
			"New partnership with leading healthcare providers to expand service offerings.",
	},
	{
		date: "January 15, 2024",
		title: "Market Expansion",
		description:
			"Successful launch in 5 new cities, strengthening our national presence.",
	},
];

const InvestorsPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Investor Relations
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Join us in our mission to transform healthcare through technology and
					innovation. We're committed to creating long-term value for our
					shareholders while making healthcare more accessible to everyone.
				</p>
			</div>

			{/* Financial Highlights */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
				{financialHighlights.map((highlight) => (
					<div
						key={highlight.title}
						className="bg-white rounded-3xl p-6 shadow-sm">
						<div className="flex items-start justify-between mb-4">
							<div className="p-3 bg-[#f8fafc] rounded-xl">
								{highlight.icon}
							</div>
							<span className="text-green-600 font-medium">
								{highlight.change}
							</span>
						</div>
						<div className="text-3xl font-bold text-[#1a1a1a] mb-2">
							{highlight.value}
						</div>
						<div className="text-[#2d3748]">{highlight.title}</div>
					</div>
				))}
			</div>

			{/* Latest Updates */}
			<div className="bg-white rounded-3xl p-8 shadow-sm mb-12">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
					Latest Updates
				</h2>
				<div className="space-y-6">
					{investorUpdates.map((update) => (
						<div
							key={update.title}
							className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
							<div className="text-sm text-[#006666] font-medium mb-2">
								{update.date}
							</div>
							<h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
								{update.title}
							</h3>
							<p className="text-[#2d3748]">{update.description}</p>
						</div>
					))}
				</div>
			</div>

			{/* Contact Form */}
			<div className="bg-white rounded-3xl p-8 shadow-sm">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
					Investor Inquiries
				</h2>
				<form className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Full Name
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your full name"
							/>
						</div>
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Company
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your company name"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Email
							</label>
							<input
								type="email"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your email"
							/>
						</div>
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Phone
							</label>
							<input
								type="tel"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your phone number"
							/>
						</div>
					</div>
					<div>
						<label className="block text-[#2d3748] font-medium mb-2">
							Message
						</label>
						<textarea
							className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666] h-32"
							placeholder="Tell us about your investment interests"></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-[#006666] text-white py-4 rounded-xl font-medium hover:bg-[#004d4d] transition-colors">
						Submit Inquiry
					</button>
				</form>
			</div>
		</div>
	);
};

export default InvestorsPage;
