import { FiCheckCircle } from "react-icons/fi";
import { BiTestTube } from "react-icons/bi";
import { GiStethoscope } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import BookNowButton from "./BookNowButton";
import PastelCard from "./PastelCard";

const Hero = () => {
	return (
		<>
			<section className="relative w-full bg-[#e0f7fa] rounded-3xl overflow-hidden px-4 py-8 md:px-12 md:py-0 flex flex-col md:flex-row items-center md:items-stretch min-h-[420px] md:min-h-[420px] lg:min-h-[500px]">
				{/* Left: Text Content */}
				<div className="flex flex-col justify-center w-full md:w-1/2 z-10 md:pl-4 lg:pl-12 md:pb-12">
					<h1 className="text-[#1a1a1a] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[65px] mb-8 md:mb-10">
						Family body checkup package <br className="hidden md:block" />
						Now at <span className="text-[#1a1a1a]">$199</span>
					</h1>
					{/* Checklist Row */}
					<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8 md:mb-10">
						<div className="flex items-center gap-2 text-base md:text-md text-[#1a1a1a] md:leading-5">
							<FiCheckCircle className="text-xl md:text-2xl text-[#006666]" />
							<span>Full body checkup with cancer</span>
						</div>
						<div className="flex items-center gap-2 text-base md:text-md text-[#1a1a1a] md:leading-5">
							<BiTestTube className="text-xl md:text-2xl text-[#006666]" />
							<span>Free home sample pickup</span>
						</div>
					</div>
					{/* Button */}
					<BookNowButton />
				</div>
				{/* Right: Image */}
				<div className="hidden absolute right-0 bottom-0 w-full md:w-1/2 md:flex justify-center md:justify-end items-end mt-8 md:mt-0 ">
					<img
						src="/family.png"
						alt="Family"
						className="object-cover  w-full h-[70vh] select-none pointer-events-none"
					/>
				</div>
			</section>
			{/* Pastel Card Section */}
			<div className="w-full flex gap-6 mt-8 overflow-x-auto pb-4">
				<PastelCard
					title={"Book\nLab Tests"}
					color="#ffe066"
					icon={
						<BiTestTube className="text-black text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px]" />
					}
				/>
				<PastelCard
					title={"Popular\nHealth Checks"}
					color="#ffcba4"
					icon={
						<GiStethoscope className="text-black text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px]" />
					}
				/>
				<PastelCard
					title={"X-rays\nScans & MRI"}
					color="#ffd6ef"
					icon={
						<MdOutlinePersonalInjury className="text-black text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px]" />
					}
				/>
			</div>
		</>
	);
};

export default Hero;
