import {
	FaSearch,
	FaArrowRight,
	FaDownload,
	FaUpload,
	FaMapMarkerAlt,
} from "react-icons/fa";

const actions = [
	{
		title: "Choose Popular Tests / Packages",
		subtitle: "",
		icon: <FaArrowRight size={28} color="#3b82f6" />,
		href: "#popular-tests",
	},
	{
		title: "Download Report",
		subtitle: "Download\nReport",
		icon: <FaDownload size={28} color="#22c55e" />,
		href: "#download-report",
	},
	{
		title: "Upload Prescription",
		subtitle: "Upload\nPrescription",
		icon: <FaUpload size={28} color="#a21caf" />,
		href: "#upload-prescription",
	},
	{
		title: "Find Nearest Centre",
		subtitle: "Find Nearest\nCentre",
		icon: <FaMapMarkerAlt size={28} color="#ef4444" />,
		href: "#find-nearest",
	},
];

const BookTestSection = () => {
	return (
		<div className="flex flex-col-reverse lg:flex-row items-center md:items-stretch gap-0 md:gap-6 w-full max-w-6xl mx-auto mt-10">
			<section className="flex-1 px-8 py-10 bg-gradient-to-br from-[#b6f0ef] via-[#e0f7fa] to-[#f0faff] rounded-3xl shadow-md flex flex-col justify-center">
				<h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
					BOOK A TEST ONLINE
				</h2>
				<div className="text-gray-700 text-lg mb-6">
					Search Test and Packages
				</div>
				{/* Search bar */}
				<div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xl mb-4 shadow-sm gap-4">
					<span className="flex items-center justify-center p-2 rounded-full bg-black mr-2">
						<FaSearch size={16} color="#fff" />
					</span>
					<input
						type="text"
						placeholder="Search for tests or packages..."
						className="bg-transparent border-none outline-none w-full text-base text-gray-700"
					/>
				</div>
				<div className="flex items-center my-6">
					<div className="flex-1 h-px bg-gray-200" />
					<span className="mx-4 text-gray-400 font-semibold">OR</span>
					<div className="flex-1 h-px bg-gray-200" />
				</div>
				{/* Action cards */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{actions.map((action) => (
						<a
							key={action.title}
							href={action.href}
							className="flex flex-col items-center justify-center bg-white rounded-2xl p-5 shadow hover:bg-blue-50 transition group text-center min-h-[120px]">
							<div className="mb-2">{action.icon}</div>
							<div className="font-bold text-gray-800 text-base mb-1 whitespace-pre-line">
								{action.subtitle ? action.subtitle : action.title}
							</div>
						</a>
					))}
				</div>
			</section>
			<div className="w-full lg:w-1/3 flex justify-center items-center mb-8 md:mb-0 px-4">
				<img
					src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
					alt="Family Health Care"
					className="rounded-3xl shadow-lg w-full  lg:h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default BookTestSection;
