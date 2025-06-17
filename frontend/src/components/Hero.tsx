import {
	FiCheckCircle,
	FiClock,
	FiShield,
	FiAward,
	FiUsers,
} from "react-icons/fi";
import { BiTestTube } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
// import { GiStethoscope } from "react-icons/gi";
// import { MdOutlinePersonalInjury } from "react-icons/md";
import BookNowButton from "./BookNowButton";
// import PastelCard from "./PastelCard";

const Hero = () => {
	return (
		<>
			<section className="relative max-w-7xl mx-auto bg-gradient-to-br from-[#e0f7fa] via-[#f0fffe] to-[#e0f7fa] rounded-3xl overflow-hidden px-4 py-8 md:px-12 md:py-12 flex flex-col md:flex-row items-center md:items-stretch min-h-[400px] md:min-h-[450px] lg:min-h-[500px] shadow-lg border border-[#b6f0ef]">
				{/* Decorative Background Elements */}
				<div className="absolute top-0 right-0 w-32 h-32 bg-[#006666] opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
				<div className="absolute bottom-0 left-0 w-24 h-24 bg-[#006666] opacity-5 rounded-full transform -translate-x-12 translate-y-12"></div>

				{/* Left: Text Content */}
				<div className="flex flex-col justify-center w-full md:w-[45%] z-10 md:pl-4 lg:pl-8 md:pb-8">
					{/* Trust Badges */}
					<div className="flex flex-wrap items-center gap-2 mb-4">
						<div className="bg-[#006666] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
							<FiShield size={12} />
							Trusted by 10,000+ families
						</div>
						<div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
							<MdVerified size={12} />
							NABL Certified
						</div>
						<div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
							<FiAward size={12} />
							ISO 9001:2015
						</div>
					</div>

					<h1 className="text-[#1a1a1a] font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.1] mb-4 md:mb-5">
						Complete Family
						<br className="hidden md:block" />
						<span className="text-[#006666]">Health Checkup</span>
						<br className="hidden md:block" />
						Starting at <span className="text-[#006666]">₹199</span>
					</h1>

					<p className="text-base text-gray-700 mb-5 md:mb-6 leading-relaxed max-w-md">
						Get comprehensive health screening with advanced diagnostics and
						free home sample collection.
					</p>

					{/* Feature List */}
					<div className="flex flex-col gap-2 mb-5 md:mb-6">
						<div className="flex items-center gap-2 text-sm md:text-base text-[#1a1a1a]">
							<div className="bg-[#006666] rounded-full p-1">
								<FiCheckCircle size={12} color="white" />
							</div>
							<span className="font-medium">
								Full body checkup with cancer screening
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm md:text-base text-[#1a1a1a]">
							<div className="bg-[#006666] rounded-full p-1">
								<FiClock size={12} color="white" />
							</div>
							<span className="font-medium">
								Free home sample pickup in 24 hours
							</span>
						</div>
						<div className="flex items-center gap-2 text-sm md:text-base text-[#1a1a1a]">
							<div className="bg-[#006666] rounded-full p-1">
								<BiTestTube size={12} color="white" />
							</div>
							<span className="font-medium">
								Digital reports within 6-8 hours
							</span>
						</div>
					</div>

					{/* Trust Indicators Row */}
					<div className="flex flex-wrap items-center gap-3 mb-5 md:mb-6">
						<div className="flex items-center gap-1 text-xs text-gray-600">
							<FiUsers color="#006666" size={14} />
							<span className="font-semibold text-[#006666]">10,000+</span>{" "}
							Happy Customers
						</div>
						<div className="flex items-center gap-1 text-xs text-gray-600">
							<FiAward color="#006666" size={14} />
							<span className="font-semibold text-[#006666]">24/7</span> Support
						</div>
						<div className="flex items-center gap-1 text-xs text-gray-600">
							<MdVerified color="#006666" size={14} />
							<span className="font-semibold text-[#006666]">100%</span>{" "}
							Accurate Results
						</div>
					</div>

					{/* CTA Section */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
						<BookNowButton />
						<div className="text-xs text-gray-600">
							<span className="font-semibold text-[#006666]">★★★★★</span> 4.8/5
							from 2,500+ reviews
						</div>
					</div>
				</div>

				{/* Right: Enhanced Image Section */}
				<div className="hidden md:flex absolute right-0 bottom-0 w-full md:w-[55%] justify-center md:justify-end items-end mt-6 md:mt-0">
					<div className="relative">
						<img
							src="/family.png"
							alt="Happy Family"
							className="object-cover w-full h-[60vh] lg:h-[100vh] select-none pointer-events-none drop-shadow-xl"
						/>

						{/* Shadow overlays behind people */}
						<div className="absolute bottom-0 left-1/4 w-32 h-24 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-sm transform rotate-12"></div>
						<div className="absolute bottom-0 right-1/3 w-28 h-20 bg-gradient-to-t from-black/15 to-transparent rounded-full blur-sm transform -rotate-6"></div>
						<div className="absolute bottom-0 left-1/3 w-24 h-16 bg-gradient-to-t from-black/25 to-transparent rounded-full blur-md transform rotate-3"></div>
						<div className="absolute bottom-0 right-1/4 w-20 h-14 bg-gradient-to-t from-black/18 to-transparent rounded-full blur-sm transform -rotate-12"></div>

						{/* Floating Stats Card */}
						<div className="absolute top-20 left-4 bg-white rounded-lg shadow-lg p-3 border border-[#e0f7fa]">
							<div className="text-xl font-bold text-[#006666]">10K+</div>
							<div className="text-xs text-gray-600">Happy Families</div>
						</div>
						{/* Floating Health Card */}
						<div className="absolute bottom-26 left-6 bg-white rounded-lg shadow-lg p-3 border border-[#e0f7fa]">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								<span className="text-xs font-medium text-gray-700">
									Health Status: Excellent
								</span>
							</div>
						</div>
						{/* Floating Certification Badge */}
						<div className="absolute top-28 right-4 bg-white rounded-lg shadow-lg p-3 border border-[#e0f7fa]">
							<div className="flex items-center gap-1">
								<MdVerified color="#006666" size={16} />
								<span className="text-xs font-medium text-gray-700">
									NABL Certified
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Service Cards Section */}
			{/* <div className="w-full mt-12">
				<div className="text-center mb-8">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
						Choose Your Health Service
					</h2>
					<p className="text-gray-600">Select from our comprehensive range of diagnostic services</p>
				</div>
				
				<div className="flex gap-6 overflow-x-auto pb-4 md:justify-center">
					<PastelCard
						title={"Book\nLab Tests"}
						color="#ffe066"
						icon={
							<BiTestTube className="text-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]" />
						}
					/>
					<PastelCard
						title={"Popular\nHealth Checks"}
						color="#ffcba4"
						icon={
							<GiStethoscope className="text-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]" />
						}
					/>
					<PastelCard
						title={"X-rays\nScans & MRI"}
						color="#ffd6ef"
						icon={
							<MdOutlinePersonalInjury className="text-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]" />
						}
					/>
				</div>
			</div> */}
		</>
	);
};

export default Hero;
