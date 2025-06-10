import {
	FaVial,
	FaFlask,
	FaCheckCircle,
	FaUserMd,
	FaGlobe,
	FaUsers,
	FaMicroscope,
	FaMapMarkerAlt,
	FaCertificate,
} from "react-icons/fa";

const stats = [
	{
		icon: <FaVial size={32} color="#0ea5e9" />,
		value: "50M+",
		label: "Samples Collected",
		img: "https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?auto=format&fit=crop&w=400&q=80",
	},
	{
		icon: <FaFlask size={32} color="#f59e42" />,
		value: "280+",
		label: "Satellite Labs",
		img: "https://images.unsplash.com/photo-1588776814546-ec7e5b1c8b1b?auto=format&fit=crop&w=400&q=80",
	},
	{
		icon: <FaCheckCircle size={32} color="#22c55e" />,
		value: "50+",
		label: "Quality Checks",
		img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80",
	},
	{
		icon: <FaUsers size={32} color="#f43f5e" />,
		value: "800M+",
		label: "Visitors",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
	},
	{
		icon: <FaUserMd size={32} color="#a21caf" />,
		value: "250+",
		label: "Doctors",
		img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80",
	},
	{
		icon: <FaGlobe size={32} color="#facc15" />,
		value: "23+",
		label: "Countries We Operate",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
];

const quality = [
	{
		icon: <FaMicroscope size={28} color="#0ea5e9" />,
		value: "600+",
		label: "Instruments used for real time QC monitoring",
	},
	{
		icon: <FaCheckCircle size={28} color="#22c55e" />,
		value: "50+",
		label: "Quality Checks & Processes on Every Sample",
	},
	{
		icon: <FaMapMarkerAlt size={28} color="#f59e42" />,
		value: "15+",
		label: "Quality indicator monitored on daily basis",
	},
];

const WhyDivitlPathLabs = () => (
	<section className="w-full max-w-6xl mx-auto px-4 py-12 mt-12 bg-gradient-to-br from-[#e0f7fa] via-[#f6fbfc] to-[#b6f0ef] rounded-3xl shadow-md">
		<h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2 text-center">
			Why Divitl PathLabs
		</h2>
		<div className="text-gray-700 text-lg mb-8 text-center max-w-2xl mx-auto">
			At Divith PathLabs, we enable healthy lives through unmatched diagnostic
			expertise and new-age technology.
		</div>
		{/* Stats Grid */}
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
			{stats.map((stat) => (
				<div
					key={stat.label}
					className="relative flex flex-col items-center justify-center bg-white rounded-2xl p-0 shadow-md overflow-hidden group h-40">
					<img
						src={stat.img}
						alt={stat.label}
						className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
					<div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-4">
						<div className="mb-2 bg-white/80 rounded-full p-2 shadow-md flex items-center justify-center">
							{stat.icon}
						</div>
						<div className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg">
							{stat.value}
						</div>
						<div className="text-white text-sm text-center font-medium drop-shadow-lg">
							{stat.label}
						</div>
					</div>
				</div>
			))}
		</div>
		{/* Quality, Accreditation & Certifications */}
		<div className="bg-[#b6f0ef] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-6">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
				{quality.map((q) => (
					<div
						key={q.label}
						className="flex flex-col items-center md:items-start text-center md:text-left">
						<div className="mb-2">{q.icon}</div>
						<div className="text-xl font-bold text-black mb-1">{q.value}</div>
						<div className="text-gray-700 text-sm font-medium">{q.label}</div>
					</div>
				))}
			</div>
			<div className="flex-1 flex flex-col items-center md:items-start justify-center">
				<div className="flex items-center gap-2 mb-2">
					<FaCertificate size={24} color="#f59e42" />
					<span className="font-semibold text-black">
						Quality, Accreditation & Certifications
					</span>
				</div>
				<a
					href="#"
					className="mt-2 text-blue-600 font-semibold hover:underline">
					To learn more about our rigorous quality standards and what sets us
					apart, click here.
				</a>
			</div>
		</div>
	</section>
);

export default WhyDivitlPathLabs;
