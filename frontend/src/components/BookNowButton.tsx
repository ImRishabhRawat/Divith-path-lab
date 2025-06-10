import { FiArrowRight } from "react-icons/fi";

const BookNowButton = () => {
	return (
		<button className="group flex items-center bg-transparent p-0 border-none focus:outline-none relative">
			{/* Left pill, expands and changes color on hover */}
			<span
				className="bg-black text-[#b6f0ef] px-8 pr-10 py-3 rounded-full font-semibold text-lg flex items-center h-12 transition-all duration-300 ease-in-out
				group-hover:bg-[#ffe066] group-hover:text-black group-hover:pr-12 relative z-0"
				style={{ minWidth: 120 }}>
				Book now
				{/* Arrow appears inside pill on hover */}
				<span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:relative group-hover:static ml-2">
					<FiArrowRight size={24} />
				</span>
			</span>
			{/* Right circle, overlaps pill and fades out on hover */}
			<span className="bg-black text-[#b6f0ef] w-12 h-12 flex items-center justify-center rounded-full -ml-8 border-4 border-[#b6f0ef] transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-75 z-10 shadow-lg">
				<FiArrowRight size={24} />
			</span>
		</button>
	);
};

export default BookNowButton;
