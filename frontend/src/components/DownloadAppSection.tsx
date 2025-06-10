const DownloadAppSection = () => (
	<section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
		{/* Left Card */}
		<div className="flex-1 bg-[#f4fafd] rounded-3xl shadow p-8 flex flex-col justify-between items-start">
			{/* Feature cards/images row */}
			<div className="flex gap-2 mb-6">
				<div className="bg-[#f6e7fa] rounded-xl px-3 py-2 text-xs font-bold text-[#23235b]">
					$40
				</div>
				<div className="bg-[#e6f6fa] rounded-xl px-3 py-2 text-xs font-bold text-[#23235b]">
					4.9K+ Users
				</div>
				<div className="bg-[#e6f6e6] rounded-xl px-3 py-2 text-xs font-bold text-[#23235b]">
					60+ Doctors
				</div>
				<div className="bg-[#f6f6e6] rounded-xl px-3 py-2 text-xs font-bold text-[#23235b]">
					6K+ Downloads
				</div>
				<div className="bg-[#23235b] rounded-xl px-3 py-2 text-xs font-bold text-white">
					4,500 Reviews
				</div>
			</div>
			<div className="mb-8">
				<h2 className="text-2xl md:text-3xl font-extrabold text-[#23235b] mb-2">
					Download Our <span className="text-[#6d7cff]">Healthcare</span> App
					for Easy Access
				</h2>
			</div>
			<div className="flex gap-4 mt-auto">
				<a href="#" target="_blank" rel="noopener noreferrer">
					<img
						src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
						alt="Download on the App Store"
						className="h-12"
					/>
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
						alt="Get it on Google Play"
						className="h-12"
					/>
				</a>
			</div>
		</div>
		{/* Right Card */}
		<div className="flex-1 bg-[#ffe066] rounded-3xl relative flex items-center justify-center min-h-[340px]">
			{/* Logo */}
			<div className="absolute top-6 right-8 flex items-center gap-2 z-10">
				<span className="w-6 h-6 bg-[#23235b] rounded-full inline-block" />
				<span className="text-lg font-bold text-[#23235b]">MediCare</span>
			</div>
			{/* Phone mockup and floating cards */}
			<div className="relative flex items-center justify-center w-full h-full">
				{/* Phone mockup (placeholder) */}
				<div className="w-48 h-96 bg-white rounded-3xl shadow-lg border-4 border-[#f6f6f6] flex flex-col items-center justify-center relative z-10">
					<span className="text-xs text-gray-400 mt-4">California, USA</span>
					<div className="w-32 h-32 bg-[#e6f6fa] rounded-xl mt-8 flex items-center justify-center text-[#23235b] font-bold text-lg">
						App UI
					</div>
				</div>
				{/* Floating cards */}
				<div className="absolute left-0 bottom-8 bg-[#caffb9] rounded-xl px-4 py-3 shadow-lg text-[#23235b] font-semibold text-sm rotate-[-8deg] z-20">
					Dental Treatments
				</div>
				<div className="absolute right-0 top-16 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2 z-20">
					<img
						src="/family.png"
						alt="Doctor"
						className="w-8 h-8 rounded-full"
					/>
					<div>
						<div className="font-bold text-[#23235b] text-xs">
							Dr. Wesley Cain
						</div>
						<div className="text-[10px] text-gray-400">Surgeon, 5 yr</div>
						<div className="flex items-center gap-1 text-xs text-[#23235b]">
							<span>4.5</span>
							<span>★</span>
						</div>
						<button className="mt-1 px-2 py-1 bg-[#23235b] text-white rounded text-xs">
							Book Consult
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default DownloadAppSection;
