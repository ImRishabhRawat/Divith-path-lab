import { FaHandshake, FaHospital, FaChartLine, FaUsers } from "react-icons/fa";

const benefits = [
	{
		icon: <FaHospital className="text-4xl text-[#006666]" />,
		title: "Healthcare Network",
		description:
			"Access our extensive network of healthcare providers and diagnostic centers.",
	},
	{
		icon: <FaChartLine className="text-4xl text-[#006666]" />,
		title: "Growth Opportunities",
		description:
			"Expand your business with our proven healthcare solutions and market reach.",
	},
	{
		icon: <FaUsers className="text-4xl text-[#006666]" />,
		title: "Customer Base",
		description:
			"Tap into our large and growing customer base of health-conscious individuals.",
	},
];

const BusinessPartnershipPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Business Partnership
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Join hands with Medicare to revolutionize healthcare delivery.
					Together, we can create a healthier future for everyone.
				</p>
			</div>

			{/* Benefits Section */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				{benefits.map((benefit) => (
					<div
						key={benefit.title}
						className="bg-white rounded-3xl p-8 shadow-sm">
						<div className="mb-4">{benefit.icon}</div>
						<h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
							{benefit.title}
						</h3>
						<p className="text-[#2d3748]">{benefit.description}</p>
					</div>
				))}
			</div>

			{/* Partnership Form */}
			<div className="bg-white rounded-3xl p-8 shadow-sm">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
					Partner With Us
				</h2>
				<form className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Company Name
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your company name"
							/>
						</div>
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Business Type
							</label>
							<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
								<option>Select business type</option>
								<option>Hospital</option>
								<option>Clinic</option>
								<option>Diagnostic Center</option>
								<option>Pharmacy</option>
								<option>Other</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Contact Person
							</label>
							<input
								type="text"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter contact person name"
							/>
						</div>
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
					</div>
					<div>
						<label className="block text-[#2d3748] font-medium mb-2">
							Message
						</label>
						<textarea
							className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666] h-32"
							placeholder="Tell us about your business and partnership interests"></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-[#006666] text-white py-4 rounded-xl font-medium hover:bg-[#004d4d] transition-colors">
						Submit Partnership Request
					</button>
				</form>
			</div>
		</div>
	);
};

export default BusinessPartnershipPage;
