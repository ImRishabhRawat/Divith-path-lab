import {
	FaBriefcase,
	FaGraduationCap,
	FaUsers,
	FaRocket,
} from "react-icons/fa";

const jobOpenings = [
	{
		title: "Senior Software Engineer",
		department: "Engineering",
		location: "New York",
		type: "Full-time",
		icon: <FaBriefcase className="text-4xl text-[#006666]" />,
	},
	{
		title: "Product Manager",
		department: "Product",
		location: "Remote",
		type: "Full-time",
		icon: <FaRocket className="text-4xl text-[#006666]" />,
	},
	{
		title: "Medical Content Writer",
		department: "Content",
		location: "Remote",
		type: "Contract",
		icon: <FaGraduationCap className="text-4xl text-[#006666]" />,
	},
	{
		title: "Customer Success Manager",
		department: "Operations",
		location: "Chicago",
		type: "Full-time",
		icon: <FaUsers className="text-4xl text-[#006666]" />,
	},
];

const benefits = [
	"Competitive salary and benefits",
	"Flexible work arrangements",
	"Health insurance coverage",
	"Professional development opportunities",
	"Work-life balance",
	"Modern office spaces",
	"Team building activities",
	"Employee wellness programs",
];

const CareerPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Join Our Team
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Be part of our mission to transform healthcare. We're looking for
					passionate individuals who want to make a difference in people's
					lives.
				</p>
			</div>

			{/* Benefits Section */}
			<div className="bg-white rounded-3xl p-8 shadow-sm mb-12">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Why Join Us?</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{benefits.map((benefit) => (
						<div
							key={benefit}
							className="flex items-center gap-2 text-[#2d3748]">
							<span className="text-[#006666]">•</span>
							<span>{benefit}</span>
						</div>
					))}
				</div>
			</div>

			{/* Job Openings */}
			<div className="mb-12">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold text-[#1a1a1a]">Open Positions</h2>
					<div className="flex gap-4">
						<select className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
							<option>All Departments</option>
							<option>Engineering</option>
							<option>Product</option>
							<option>Content</option>
							<option>Operations</option>
						</select>
						<select className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
							<option>All Locations</option>
							<option>New York</option>
							<option>Remote</option>
							<option>Chicago</option>
						</select>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{jobOpenings.map((job) => (
						<div
							key={job.title}
							className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-start gap-4">
								<div className="p-3 bg-[#f8fafc] rounded-xl">{job.icon}</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
										{job.title}
									</h3>
									<div className="flex flex-wrap gap-4 text-sm text-[#2d3748] mb-4">
										<span>{job.department}</span>
										<span>•</span>
										<span>{job.location}</span>
										<span>•</span>
										<span>{job.type}</span>
									</div>
									<button className="text-[#006666] font-medium hover:text-[#004d4d] transition-colors">
										View Details →
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Application Form */}
			<div className="bg-white rounded-3xl p-8 shadow-sm">
				<h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Apply Now</h2>
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
								Email
							</label>
							<input
								type="email"
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
								placeholder="Enter your email"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Position
							</label>
							<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
								<option>Select position</option>
								{jobOpenings.map((job) => (
									<option key={job.title}>{job.title}</option>
								))}
							</select>
						</div>
						<div>
							<label className="block text-[#2d3748] font-medium mb-2">
								Experience
							</label>
							<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
								<option>Select experience</option>
								<option>0-2 years</option>
								<option>2-5 years</option>
								<option>5-10 years</option>
								<option>10+ years</option>
							</select>
						</div>
					</div>
					<div>
						<label className="block text-[#2d3748] font-medium mb-2">
							Cover Letter
						</label>
						<textarea
							className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666] h-32"
							placeholder="Tell us why you'd be a great fit for this role"></textarea>
					</div>
					<div>
						<label className="block text-[#2d3748] font-medium mb-2">
							Resume
						</label>
						<input
							type="file"
							className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
							accept=".pdf,.doc,.docx"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-[#006666] text-white py-4 rounded-xl font-medium hover:bg-[#004d4d] transition-colors">
						Submit Application
					</button>
				</form>
			</div>
		</div>
	);
};

export default CareerPage;
