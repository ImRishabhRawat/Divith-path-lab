import { useState } from "react";
import {
	FaHeartbeat,
	FaSyringe,
	FaUserMd,
	FaCapsules,
	FaVenus,
} from "react-icons/fa";
import { GiKidneys, GiBrain } from "react-icons/gi";

const TABS = [
	"All tests",
	"Full body Check up",
	"Diabetes",
	"Heart",
	"Cancer",
	"Vitamin",
	"Women Health",
	"Skin care",
	"Liver",
	"Kidney",
];

const PACKAGES = [
	{
		id: 1,
		title: "Medicare Full body Health Checkup",
		subtitle: "Includes 12 Tests",
		price: 430,
		oldPrice: 800,
		icon: <GiKidneys size={40} color="#ec4899" />,
		tags: ["All tests", "Full body Check up", "Kidney"],
	},
	{
		id: 2,
		title: "Comprehensive full body checkup with Vitamin D & B12",
		subtitle: "Includes 11 Tests",
		price: 240,
		oldPrice: 480,
		icon: <FaCapsules size={40} color="#fde047" />,
		tagLabel: "20% Off",
		tags: ["All tests", "Vitamin", "Full body Check up"],
	},
	{
		id: 3,
		title: "Women's Staying Strong Health Checkup",
		subtitle: "Includes 32 Tests",
		price: 300,
		oldPrice: 600,
		icon: <FaVenus size={40} color="#f9a8d4" />,
		tags: ["All tests", "Women Health"],
	},
	{
		id: 4,
		title: "Medi care Diabetes Screening",
		subtitle: "Includes 07 Tests",
		price: 364,
		oldPrice: 728,
		icon: <FaSyringe size={40} color="#fca5a5" />,
		tags: ["All tests", "Diabetes"],
	},
	{
		id: 5,
		title: "Heart Health Checkup",
		subtitle: "Includes 15 Tests",
		price: 410,
		oldPrice: 820,
		icon: <FaHeartbeat size={40} color="#f87171" />,
		tags: ["All tests", "Heart"],
	},
	{
		id: 6,
		title: "Cancer Screening Package",
		subtitle: "Includes 10 Tests",
		price: 500,
		oldPrice: 1000,
		icon: <GiBrain size={40} color="#a78bfa" />,
		tags: ["All tests", "Cancer"],
	},
	{
		id: 7,
		title: "Skin Care Health Checkup",
		subtitle: "Includes 8 Tests",
		price: 220,
		oldPrice: 440,
		icon: <FaUserMd size={40} color="#fdba74" />,
		tags: ["All tests", "Skin care"],
	},
	{
		id: 8,
		title: "Liver Function Test",
		subtitle: "Includes 9 Tests",
		price: 330,
		oldPrice: 660,
		icon: <FaUserMd size={40} color="#facc15" />,
		tags: ["All tests", "Liver"],
	},
	{
		id: 9,
		title: "Kidney Function Test",
		subtitle: "Includes 7 Tests",
		price: 210,
		oldPrice: 420,
		icon: <GiKidneys size={40} color="#38bdf8" />,
		tags: ["All tests", "Kidney"],
	},
	{
		id: 10,
		title: "Basic Health Checkup",
		subtitle: "Includes 5 Tests",
		price: 150,
		oldPrice: 300,
		icon: <FaUserMd size={40} color="#4ade80" />,
		tags: ["All tests", "Full body Check up"],
	},
];

const FeatureSection = () => {
	const [selectedTab, setSelectedTab] = useState(TABS[0]);
	const filtered =
		selectedTab === "All tests"
			? PACKAGES
			: PACKAGES.filter((pkg) => pkg.tags.includes(selectedTab));

	return (
		<section className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-16 mb-12">
			{/* Header Section */}
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
					Featured Health
					<br />
					<span className="text-[#006666]">Check-up Packages</span>
				</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
					Choose from our comprehensive range of health screening packages designed by medical experts
				</p>
			</div>

			{/* Enhanced Tabs */}
			<div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-hide">
				{TABS.map((tab) => (
					<button
						key={tab}
						className={`px-6 py-3 rounded-full border-2 transition-all duration-300 whitespace-nowrap font-semibold text-sm md:text-base transform hover:scale-105 ${
							selectedTab === tab
								? "bg-[#006666] text-white border-[#006666] shadow-lg"
								: "bg-white text-gray-700 border-gray-200 hover:bg-[#f0fffe] hover:border-[#006666] hover:text-[#006666]"
						}`}
						onClick={() => setSelectedTab(tab)}>
						{tab}
					</button>
				))}
			</div>

			{/* Enhanced Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
				{filtered.length === 0 ? (
					<div className="text-gray-400 col-span-4 text-center py-12">
						<div className="text-6xl mb-4">🔍</div>
						<div className="text-xl font-medium">No packages available for this category.</div>
						<div className="text-sm mt-2">Try selecting a different category</div>
					</div>
				) : (
					filtered.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-white rounded-2xl p-6 flex flex-col shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#006666] hover:-translate-y-1 group">
							{/* Header with Icon and Tag */}
							<div className="flex items-start justify-between mb-4">
								<div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#f0fffe] transition-colors duration-300">
									{pkg.icon}
								</div>
								{pkg.tagLabel && (
									<span className="bg-gradient-to-r from-[#ffe066] to-[#ffd700] text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
										{pkg.tagLabel}
									</span>
								)}
							</div>
							
							{/* Content */}
							<div className="flex-1">
								<h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight group-hover:text-[#006666] transition-colors duration-300">
									{pkg.title}
								</h3>
								<p className="text-gray-500 text-sm mb-4">{pkg.subtitle}</p>
								
								{/* Price Section */}
								<div className="flex items-end gap-3 mb-6">
									<span className="text-2xl font-bold text-[#006666]">
										₹{pkg.price}
									</span>
									<span className="text-gray-400 line-through text-base">
										₹{pkg.oldPrice}
									</span>
									<span className="text-green-600 text-sm font-semibold">
										{Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100)}% OFF
									</span>
								</div>
							</div>
							
							{/* Action Button */}
							<button className="w-full py-3 px-4 bg-[#006666] text-white font-semibold rounded-xl hover:bg-[#005555] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
								Book Now
							</button>
						</div>
					))
				)}
			</div>

			{/* Call to Action */}
			{/* <div className="text-center bg-gradient-to-r from-[#e0f7fa] to-[#f0fffe] rounded-2xl p-8 border border-[#b6f0ef]">
				<h3 className="text-2xl font-bold text-gray-900 mb-2">
					Need Help Choosing the Right Package?
				</h3>
				<p className="text-gray-600 mb-6">
					Our health experts are here to guide you to the perfect health checkup package
				</p>
				<button className="bg-[#006666] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#005555] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
					Talk to Our Experts
				</button>
			</div> */}
		</section>
	);
};

export default FeatureSection;
