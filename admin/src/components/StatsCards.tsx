import React from "react";

const stats = [
	{
		label: "Total earned",
		value: "$2,356",
		change: "+7.5%",
		sub: "Last month's growth",
		color: "text-green-600",
	},
	{
		label: "Total cancellations",
		value: "546",
		change: "-7.5%",
		sub: "Last month",
		color: "text-red-600",
	},
	{
		label: "Total review score",
		value: "$2,356",
		change: "+7.5%",
		sub: "Last month's growth",
		color: "text-green-600",
	},
	{
		label: "Total member",
		value: "$2,356",
		change: "+7.5%",
		sub: "Last month",
		color: "text-green-600",
	},
];

const StatsCards: React.FC = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
		{stats.map((stat) => (
			<div
				key={stat.label}
				className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
				<div className="text-sm text-gray-500 font-medium">{stat.label}</div>
				<div className="flex items-end gap-2">
					<span className="text-2xl font-bold text-gray-800">{stat.value}</span>
					<span className={`text-xs font-semibold ${stat.color}`}>
						{stat.change}
					</span>
				</div>
				<div className="text-xs text-gray-400">{stat.sub}</div>
			</div>
		))}
	</div>
);

export default StatsCards;
