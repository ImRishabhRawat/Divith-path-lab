import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface PastelCardProps {
	title: string;
	color: string; // background color
	icon: ReactNode;
	children?: ReactNode;
	cardClassName?: string;
}

const PastelCard = ({
	title,
	color,
	icon,
	children,
	cardClassName,
}: PastelCardProps) => {
	return (
		<div
			className={`flex flex-col justify-between rounded-3xl shadow-md relative min-w-[220px] w-1/3 h-[160px] sm:h-[190px] md:h-[200px] lg:h-[240px] overflow-y-hidden p-6 ${
				cardClassName || ""
			}`}
			style={{ backgroundColor: color }}>
			<div>
				<h2 className="text-black font-bold text-2xl leading-tight mb-2 whitespace-pre-line">
					{title}
				</h2>
				{children && <div>{children}</div>}
			</div>
			<div className="absolute right-6 top-6 opacity-80 select-none pointer-events-none flex items-center justify-center h-full">
				{icon}
			</div>
			<button className="mt-auto w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-900 transition-colors">
				<FiArrowRight size={20} />
			</button>
		</div>
	);
};

export default PastelCard;
