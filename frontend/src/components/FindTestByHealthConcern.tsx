import { Link } from "react-router-dom";
import {
	FiHeart,
	FiDroplet,
	FiActivity,
	FiFilter,
	FiAnchor,
	FiUser,
} from "react-icons/fi";

// Use react-icons for categories (replace images with icons)
const categories = [
	{ name: "Liver", icon: FiHeart },
	{ name: "Blood", icon: FiDroplet },
	{ name: "Backpain", icon: FiActivity },
	{ name: "Kidneys", icon: FiFilter },
	{ name: "Orthopaedics", icon: FiAnchor },
	{ name: "Senior Citizen", icon: FiUser },
];

// Transparent PNGs for cards (replace with your own assets if available)
const cards = [
	{
		title: "Senior citizen health checkup",
		bookNow: "BOOK NOW →",
		priceLabel: "Start from",
		priceValue: "$299.00",
		color: "#ffe066",
		img: "/family.png",
	},
	{
		title: "Diabetes Screening",
		bookNow: "BOOK NOW →",
		priceLabel: "Flat",
		priceValue: "$99.00",
		color: "#b6f0ef",
		img: "/family.png",
	},
	{
		title: "Women's Staying Strong Health Checkup",
		bookNow: "BOOK NOW →",
		priceLabel: "",
		priceValue: "10% Discount",
		color: "#ffcba4",
		img: "/family.png",
	},
];

const FindTestByHealthConcern = () => (
	<section className="w-full bg-[#f6fbfc] py-16">
		<div className="flex flex-col md:flex-row items-center justify-between mb-10 w-full max-w-none">
			<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 md:mb-0">
				Find Tests <br /> by Health concern
			</h2>
			<Link to="/find-test" className="text-sm font-semibold text-black flex items-center gap-1 hover:underline whitespace-nowrap">
				SEE ALL <span className="text-lg">→</span>
			</Link>
		</div>
		{/* Categories Row */}
		<div className="flex gap-8 overflow-x-auto pb-8 mb-12 w-full justify-center">
			{categories.map((cat) => (
				<div
					key={cat.name}
					className="flex flex-col items-center min-w-[140px]">
					<div className="w-28 h-28 rounded-full bg-[#faf0e6] flex items-center justify-center mb-3 shadow-lg overflow-hidden">
						<div className="w-16 h-16 flex items-center justify-center">
							<cat.icon size={64} />
						</div>
					</div>
					<span className="text-lg font-semibold text-gray-700 text-center">
						{cat.name}
					</span>
				</div>
			))}
		</div>
		{/* Cards Row */}
		<div className="flex gap-8 overflow-x-auto px-6 md:px-16 w-full md:flex md:flex-nowrap md:gap-12 md:overflow-x-visible mb-12 ">
			{cards.map((card) => (
				<div
					key={card.title}
					className="flex flex-col justify-between rounded-3xl shadow-md relative min-w-[340px] max-w-[600px] w-full h-[220px] md:h-[260px] lg:h-[250px] p-8 mb-4"
					style={{ backgroundColor: card.color }}>
					<div>
						<h2 className="text-black font-bold text-2xl leading-tight mb-2 whitespace-pre-line">
							{card.title}
						</h2>
						{card.bookNow && (
							<div className="text-xs font-medium text-gray-500 mb-2 tracking-wide">
								{card.bookNow}
							</div>
						)}
					</div>
					<div className="absolute right-8 bottom-8 opacity-90 select-none pointer-events-none flex items-center justify-center h-28 w-28 lg:h-32 lg:w-32">
						<img
							src={card.img}
							alt={card.title}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="flex flex-col items-start mt-auto pt-8">
						{card.priceLabel && (
							<span className="text-sm text-gray-500 font-light mb-1">
								{card.priceLabel}
							</span>
						)}
						<span className="text-3xl font-extrabold text-black leading-tight">
							{card.priceValue.match(/\d+%|\$\d+\.\d+/)?.[0] || ""}
						</span>
						{card.priceValue.replace(/\d+%|\$\d+\.\d+/, "").trim() && (
							<span className="text-sm text-gray-500 font-light">
								{card.priceValue.replace(/\d+%|\$\d+\.\d+/, "").trim()}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default FindTestByHealthConcern;
