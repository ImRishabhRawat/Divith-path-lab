import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
	{
		name: "Esther Howard",
		role: "Patient",
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		text: "I had a great experience at this healthcare clinic. I was seen quickly, and the doctor was able to diagnose and treat my condition.",
	},
	{
		name: "John Doe",
		role: "Patient",
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		text: "The staff was friendly and professional. I highly recommend this clinic to anyone in need of medical care.",
	},
	{
		name: "Jane Smith",
		role: "Patient",
		avatar: "https://randomuser.me/api/portraits/women/65.jpg",
		text: "Excellent service and care. The doctors are knowledgeable and compassionate.",
	},
];

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const t = testimonials[index];

	return (
		<section className="w-full py-12  text-center mt-12">
			<h2 className="text-3xl md:text-4xl font-extrabold text-[#23235b] mb-6">
				Our doctors and clinics have earned
				<br />
				over 5,000+ reviews on Google!
			</h2>
			<div className="flex flex-col items-center mb-8">
				<div className="flex items-center justify-center text-green-500 text-2xl mb-1">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStarHalfAlt />
				</div>
				<div className="text-sm text-[#23235b] font-semibold">
					Average Google Rating is 4.6
				</div>
			</div>
			<div className="bg-white rounded-2xl shadow-sm px-6 py-8 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-6 border border-gray-100">
				<div className="flex flex-col items-center md:items-start min-w-[120px]">
					<img
						src={t.avatar}
						alt={t.name}
						className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-white shadow"
					/>
					<div className="font-semibold text-[#23235b] text-base">{t.name}</div>
					<div className="text-xs text-gray-400">{t.role}</div>
				</div>
				<div className="text-lg text-[#23235b] text-left md:text-left font-medium">
					{t.text}
				</div>
			</div>
			{/* Carousel Dots */}
			<div className="flex items-center justify-center gap-2">
				{testimonials.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${
							i === index
								? "bg-[#23235b] opacity-60"
								: "bg-[#23235b] opacity-20"
						}`}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
