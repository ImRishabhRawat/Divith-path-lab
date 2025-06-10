import { FaSearch, FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const categories = [
	"Healthcare Technology",
	"Medical Research",
	"Wellness Tips",
	"Industry News",
	"Patient Stories",
	"Medical Innovation",
];

const featuredPosts = [
	{
		title: "The Future of Telemedicine: Transforming Healthcare Delivery",
		excerpt:
			"Explore how telemedicine is revolutionizing patient care and making healthcare more accessible than ever before.",
		author: "Dr. Sarah Johnson",
		date: "March 15, 2024",
		category: "Healthcare Technology",
		image: "/family.png",
		readTime: "5 min read",
	},
	{
		title: "Understanding Preventive Healthcare: A Complete Guide",
		excerpt:
			"Learn about the importance of preventive healthcare and how regular check-ups can help maintain your well-being.",
		author: "Dr. Michael Chen",
		date: "March 12, 2024",
		category: "Wellness Tips",
		image: "/family.png",
		readTime: "7 min read",
	},
];

const recentPosts = [
	{
		title: "Breakthrough in Medical AI: Improving Diagnosis Accuracy",
		excerpt:
			"How artificial intelligence is helping doctors make more accurate diagnoses and improve patient outcomes.",
		author: "Dr. Emily Brown",
		date: "March 10, 2024",
		category: "Medical Innovation",
		image: "/family.png",
		readTime: "6 min read",
	},
	{
		title: "The Impact of Digital Health Records on Patient Care",
		excerpt:
			"Discover how digital health records are streamlining healthcare processes and improving patient care coordination.",
		author: "Dr. James Wilson",
		date: "March 8, 2024",
		category: "Healthcare Technology",
		image: "/family.png",
		readTime: "4 min read",
	},
	{
		title: "Nutrition and Mental Health: The Connection",
		excerpt:
			"Exploring the relationship between diet and mental well-being, and how proper nutrition can support mental health.",
		author: "Dr. Lisa Anderson",
		date: "March 5, 2024",
		category: "Wellness Tips",
		image: "/family.png",
		readTime: "8 min read",
	},
	{
		title: "Patient Success Story: Overcoming Health Challenges",
		excerpt:
			"An inspiring journey of a patient who transformed their health through dedication and proper medical care.",
		author: "Dr. Robert Taylor",
		date: "March 3, 2024",
		category: "Patient Stories",
		image: "/family.png",
		readTime: "5 min read",
	},
];

const BlogsPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Healthcare Blog
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Stay informed with the latest insights, research, and stories from the
					world of healthcare. Our expert contributors share valuable knowledge
					to help you make informed health decisions.
				</p>
			</div>

			{/* Search and Categories */}
			<div className="bg-white rounded-3xl p-8 shadow-sm mb-12">
				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex-1">
						<div className="relative">
							<input
								type="text"
								placeholder="Search articles..."
								className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
							/>
							<FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						</div>
					</div>
					<div className="flex gap-2 overflow-x-auto pb-2">
						{categories.map((category) => (
							<button
								key={category}
								className="px-4 py-2 rounded-full bg-[#f8fafc] text-[#2d3748] font-medium hover:bg-[#e0f7fa] transition-colors whitespace-nowrap">
								{category}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Featured Posts */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{featuredPosts.map((post) => (
					<div
						key={post.title}
						className="bg-white rounded-3xl shadow-sm overflow-hidden">
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6">
							<div className="flex items-center gap-4 text-sm text-[#2d3748] mb-3">
								<span className="flex items-center gap-1">
									<FaCalendarAlt className="text-[#006666]" />
									{post.date}
								</span>
								<span className="flex items-center gap-1">
									<FaUser className="text-[#006666]" />
									{post.author}
								</span>
							</div>
							<h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
								{post.title}
							</h2>
							<p className="text-[#2d3748] mb-4">{post.excerpt}</p>
							<div className="flex items-center justify-between">
								<span className="text-[#006666] font-medium">
									{post.readTime}
								</span>
								<button className="text-[#006666] font-medium hover:text-[#004d4d] transition-colors">
									Read More →
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Recent Posts */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{recentPosts.map((post) => (
					<div
						key={post.title}
						className="bg-white rounded-3xl shadow-sm overflow-hidden">
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-40 object-cover"
						/>
						<div className="p-6">
							<div className="flex items-center gap-2 text-sm text-[#2d3748] mb-3">
								<span className="flex items-center gap-1">
									<FaTag className="text-[#006666]" />
									{post.category}
								</span>
								<span>•</span>
								<span>{post.readTime}</span>
							</div>
							<h2 className="text-lg font-bold text-[#1a1a1a] mb-2">
								{post.title}
							</h2>
							<p className="text-[#2d3748] text-sm mb-4">{post.excerpt}</p>
							<div className="flex items-center justify-between">
								<span className="text-sm text-[#2d3748]">{post.date}</span>
								<button className="text-[#006666] font-medium hover:text-[#004d4d] transition-colors">
									Read More →
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogsPage;
