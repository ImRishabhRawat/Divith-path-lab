import { FiPhone } from "react-icons/fi";

const BookingHelpCTA = () => (
	<section className="w-full mt-12">
		<div className="bg-[#2d1836] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-10 gap-6">
			<div>
				<div className="text-lg md:text-2xl font-bold text-[#ffe1b3] mb-1">
					Need help with booking your test?
				</div>
				<div className="text-sm text-[#e6d6c2] font-normal">
					Full body checkup with cancer
				</div>
			</div>
			<div className="flex items-center gap-2 md:ml-8">
				<span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffe1b3] text-[#2d1836]">
					<FiPhone size={22} />
				</span>
				<span className="px-5 py-2 rounded-full bg-[#ffcba4] text-[#2d1836] font-semibold text-base tracking-wide">
					(012)8273957
				</span>
			</div>
		</div>
	</section>
);

export default BookingHelpCTA;
