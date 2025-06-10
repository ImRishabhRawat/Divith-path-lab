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
		oldPrice: 80,
		icon: <GiKidneys size={40} color="#ec4899" />,
		tags: ["All tests", "Full body Check up", "Kidney"],
	},
	{
		id: 2,
		title: "Comprehensive full body checkup with Vitamin D & B12",
		subtitle: "Includes 11 Tests",
		price: 240,
		oldPrice: 80,
		icon: <FaCapsules size={40} color="#fde047" />,
		tagLabel: "20% Off",
		tags: ["All tests", "Vitamin", "Full body Check up"],
	},
	{
		id: 3,
		title: "Women's Staying Strong Health Checkup",
		subtitle: "Includes 32 Tests",
		price: 300,
		oldPrice: 220,
		icon: <FaVenus size={40} color="#f9a8d4" />,
		tags: ["All tests", "Women Health"],
	},
	{
		id: 4,
		title: "Medi care Diabetes Screening",
		subtitle: "Includes 07 Tests",
		price: 364,
		oldPrice: 80,
		icon: <FaSyringe size={40} color="#fca5a5" />,
		tags: ["All tests", "Diabetes"],
	},
	{
		id: 5,
		title: "Heart Health Checkup",
		subtitle: "Includes 15 Tests",
		price: 410,
		oldPrice: 120,
		icon: <FaHeartbeat size={40} color="#f87171" />,
		tags: ["All tests", "Heart"],
	},
	{
		id: 6,
		title: "Cancer Screening Package",
		subtitle: "Includes 10 Tests",
		price: 500,
		oldPrice: 150,
		icon: <GiBrain size={40} color="#a78bfa" />,
		tags: ["All tests", "Cancer"],
	},
	{
		id: 7,
		title: "Skin Care Health Checkup",
		subtitle: "Includes 8 Tests",
		price: 220,
		oldPrice: 60,
		icon: <FaUserMd size={40} color="#fdba74" />,
		tags: ["All tests", "Skin care"],
	},
	{
		id: 8,
		title: "Liver Function Test",
		subtitle: "Includes 9 Tests",
		price: 330,
		oldPrice: 90,
		icon: <FaUserMd size={40} color="#facc15" />,
		tags: ["All tests", "Liver"],
	},
	{
		id: 9,
		title: "Kidney Function Test",
		subtitle: "Includes 7 Tests",
		price: 210,
		oldPrice: 70,
		icon: <GiKidneys size={40} color="#38bdf8" />,
		tags: ["All tests", "Kidney"],
	},
	{
		id: 10,
		title: "Basic Health Checkup",
		subtitle: "Includes 5 Tests",
		price: 150,
		oldPrice: 50,
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
		<section className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-12">
			<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">
				Featured Health
				<br />
				Check-up Packages
			</h2>
			{/* Tabs */}
			<div className="flex gap-3 overflow-x-auto pb-2 mb-8 mb-12">
				{TABS.map((tab) => (
					<button
						key={tab}
						className={`px-5 py-2 rounded-full border transition-all whitespace-nowrap font-semibold text-base ${
							selectedTab === tab
								? "bg-black text-white border-black"
								: "bg-white text-black border-gray-200 hover:bg-gray-100"
						}`}
						onClick={() => setSelectedTab(tab)}>
						{tab}
					</button>
				))}
			</div>
			{/* Cards */}
			<div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 md:overflow-x-visible mb-12">
				{filtered.length === 0 ? (
					<div className="text-gray-400 col-span-4 text-center py-12">
						No packages available for this category.
					</div>
				) : (
					filtered.map((pkg) => (
						<div
							key={pkg.id}
							className="bg-[#f6fbfc] rounded-2xl p-6 flex flex-col min-w-[270px] max-w-[320px] w-full shadow-sm relative transition-all duration-200 hover:bg-[#e0f7fa] hover:shadow-md cursor-pointer">
							{/* Icon */}
							<div className="mb-4 h-12 w-12 flex items-center justify-center">
								{pkg.icon}
							</div>
							{/* Tag label */}
							{pkg.tagLabel && (
								<span className="absolute top-6 right-6 bg-[#ffe066] text-black text-xs font-bold px-3 py-1 rounded-full">
									{pkg.tagLabel}
								</span>
							)}
							{/* Title & subtitle */}
							<div className="mb-2">
								<div className="font-bold text-lg text-black mb-1 leading-tight">
									{pkg.title}
								</div>
								<div className="text-gray-500 text-sm">{pkg.subtitle}</div>
							</div>
							{/* Price */}
							<div className="flex items-end gap-2 mb-4">
								<span className="text-2xl font-bold text-black">
									${pkg.price.toFixed(2)}
								</span>
								<span className="text-gray-400 line-through text-base">
									${pkg.oldPrice.toFixed(2)}
								</span>
							</div>
							{/* Add button */}
							<button className="ml-auto px-6 py-2 rounded-full bg-[#b6f0ef] text-black font-semibold shadow hover:bg-[#a0e6e3] transition-all">
								Add
							</button>
						</div>
					))
				)}
			</div>
		</section>
	);
};

export default FeatureSection;
