import { FiShield, FiTruck, FiFileText } from "react-icons/fi";

const features = [
	{
		icon: <FiShield size={40} className="text-[#1a3c1a]" />,
		title: "100% Safe & Hygienic",
		desc: "Experience hassle-free healthcare with online doctor consultations",
		bg: "bg-[#e8f5e9]",
	},
	{
		icon: <FiTruck size={40} className="text-[#4a1a1a]" />,
		title: "Home Sample Pick up",
		desc: "Experience hassle-free healthcare with online doctor consultations",
		bg: "bg-[#fce4ec]",
	},
	{
		icon: <FiFileText size={40} className="text-[#3c321a]" />,
		title: "View Reports Online",
		desc: "Experience hassle-free healthcare with online doctor consultations",
		bg: "bg-[#fff8e1]",
	},
];

const WhyChooseUs = () => (
	<section className="w-full py-12">
		<div className="bg-[#f8fafc] rounded-2xl py-6">
			<h2 className="text-3xl md:text-3xl font-extrabold text-[#1a1a1a] text-center mb-10">
				Why Choose us
			</h2>
			<div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
				{features.map((f) => (
					<div
						key={f.title}
						className={`flex flex-col items-center text-center rounded-2xl ${f.bg} flex-1 min-w-[220px] p-8`}>
						<div className="mb-4">{f.icon}</div>
						<div className="text-lg font-bold text-[#1a1a1a] mb-2">
							{f.title}
						</div>
						<div className="text-sm text-[#2d3748]">{f.desc}</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default WhyChooseUs;
