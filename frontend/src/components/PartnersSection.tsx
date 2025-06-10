import { Link } from "react-router-dom";

const dummyLogo =
	"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const partners = [
	{
		name: "GSK",
		logo: dummyLogo,
	},
	{
		name: "Astrazeneca",
		logo: dummyLogo,
	},
	{
		name: "Novartis",
		logo: dummyLogo,
	},
	{
		name: "Johnson & Johnson",
		logo: dummyLogo,
	},
	{
		name: "Merck",
		logo: dummyLogo,
	},
	{
		name: "Pfizer",
		logo: dummyLogo,
	},
	{
		name: "Sanofi",
		logo: dummyLogo,
	},
];

const cards = [
	{
		label: "Sample Collection",
		title: "Health Test at your home",
		button: "Book Now",
		img: "/family.png",
		bg: "bg-[#b6f0ef]",
	},
	{
		label: "Lab Test",
		title: "Visit a lab near you",
		button: "Appointment now",
		img: "/family.png",
		bg: "bg-[#ffe066]",
	},
];

const PartnersSection = () => (
	<section className="w-full  py-12">
		<div className="flex items-center justify-between mb-8 ">
			<h2 className="text-3xl md:text-3xl font-extrabold text-[#23235b]">
				Partners
			</h2>
			<Link
				to="/partners"
				className="text-sm font-semibold text-[#23235b] flex items-center gap-1 hover:underline whitespace-nowrap">
				SEE ALL <span className="text-lg">→</span>
			</Link>
		</div>
		{/* Partner Logos */}
		<div className="flex flex-row gap-6 overflow-x-auto w-full  md:grid md:grid-cols-7 md:gap-6 md:overflow-x-visible mb-12">
			{partners.map((p) => (
				<div
					key={p.name}
					className="flex flex-col items-center group transition-all min-w-[96px] md:min-w-0 mb-6">
					<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md mb-2 overflow-hidden transition-colors group-hover:bg-[#caffb9]">
						<img
							src={p.logo}
							alt={p.name}
							className="w-20 h-20 object-contain"
						/>
					</div>
					<span className="text-sm font-semibold text-[#23235b] text-center whitespace-nowrap">
						{p.name}
					</span>
				</div>
			))}
		</div>
		{/* Cards */}
		<div className="flex flex-col md:flex-row gap-8 px-1 md:px-0">
			{cards.map((card) => (
				<div
					key={card.title}
					className={`relative flex flex-col justify-between rounded-3xl ${card.bg} flex-1 aspect-square min-h-[220px] max-h-[320px] p-4 md:p-8 overflow-hidden`}>
					<div className="flex flex-col items-start justify-start h-full z-10">
						<span className="bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded mb-2">
							{card.label}
						</span>
						<div className="text-2xl md:text-4xl font-extrabold text-black mb-4">
							{card.title}
						</div>
						<button className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition-all mt-auto">
							{card.button} <span className="text-sm">→</span>
						</button>
					</div>
					<img
						src={card.img}
						alt={card.title}
						className="absolute bottom-0 right-0 w-60 h-60 md:w-72 md:h-72 object-contain z-0"
					/>
				</div>
			))}
		</div>
	</section>
);

export default PartnersSection;
