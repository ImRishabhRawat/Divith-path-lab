import { FaHeartbeat, FaUsers, FaAward, FaGlobe } from "react-icons/fa";

const stats = [
	{
		number: "1M+",
		label: "Happy Patients",
		icon: <FaHeartbeat className="text-4xl text-[#006666]" />,
	},
	{
		number: "500+",
		label: "Expert Doctors",
		icon: <FaUsers className="text-4xl text-[#006666]" />,
	},
	{
		number: "50+",
		label: "Awards Won",
		icon: <FaAward className="text-4xl text-[#006666]" />,
	},
	{
		number: "25+",
		label: "Cities",
		icon: <FaGlobe className="text-4xl text-[#006666]" />,
	},
];

const AboutUsPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					About Divith Path Labs & Diagnostics
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					We are committed to making healthcare accessible, affordable, and
					convenient for everyone. Our mission is to transform healthcare
					delivery through technology and innovation.
				</p>
			</div>

			{/* Stats Section */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
				{stats.map((stat) => (
					<div
						key={stat.label}
						className="bg-white rounded-3xl p-6 shadow-sm text-center">
						<div className="flex justify-center mb-4">{stat.icon}</div>
						<div className="text-3xl font-bold text-[#1a1a1a] mb-2">
							{stat.number}
						</div>
						<div className="text-[#2d3748]">{stat.label}</div>
					</div>
				))}
			</div>

			{/* Mission & Vision */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white rounded-3xl p-8 shadow-sm">
					<h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">
						Our Mission
					</h2>
					<p className="text-[#2d3748]">
						To provide accessible, high-quality healthcare services to everyone,
						everywhere. We strive to make healthcare more affordable and
						convenient through innovative technology and patient-centric care.
					</p>
				</div>
				<div className="bg-white rounded-3xl p-8 shadow-sm">
					<h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Our Vision</h2>
					<p className="text-[#2d3748]">
						To be the leading healthcare platform that transforms how people
						access and experience healthcare services. We envision a future
						where quality healthcare is within everyone's reach.
					</p>
				</div>
			</div>

			{/* Values */}
			<div className="bg-white rounded-3xl p-8 shadow-sm">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Our Values</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 bg-[#f8fafc] rounded-2xl">
						<h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
							Patient First
						</h3>
						<p className="text-[#2d3748]">
							Every decision we make is guided by what's best for our patients.
							Their health and well-being are our top priorities.
						</p>
					</div>
					<div className="p-6 bg-[#f8fafc] rounded-2xl">
						<h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
							Innovation
						</h3>
						<p className="text-[#2d3748]">
							We continuously innovate to improve healthcare delivery and make
							it more accessible to everyone.
						</p>
					</div>
					<div className="p-6 bg-[#f8fafc] rounded-2xl">
						<h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
							Excellence
						</h3>
						<p className="text-[#2d3748]">
							We maintain the highest standards of quality in everything we do,
							from patient care to technology solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
