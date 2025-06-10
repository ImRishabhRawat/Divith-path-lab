import React from "react";

const navSections = [
	{
		title: "APPLICATIONS",
		links: [
			{ label: "Inbox", icon: "📥" },
			{ label: "Doctor", icon: "🩺" },
			{ label: "Patient", icon: "🧑‍⚕️" },
			{ label: "Departments", icon: "🏢" },
			{ label: "Schedule", icon: "📅" },
			{ label: "Appointment", icon: "🗓️" },
			{ label: "Report", icon: "📄" },
			{ label: "Human Resources", icon: "👥" },
		],
	},
	{
		title: "OTHERS",
		links: [
			{ label: "Payment", icon: "💳" },
			{ label: "Widgets", icon: "🧩" },
		],
	},
	{
		title: "SUPPORT",
		links: [
			{ label: "Settings", icon: "⚙️" },
			{ label: "Security", icon: "🔒" },
			{ label: "Help", icon: "❓" },
		],
	},
];

const Sidebar: React.FC = () => (
	<aside className="h-screen w-64 bg-white border-r flex flex-col justify-between py-6 px-4 shadow-md min-w-[220px] hidden md:flex">
		<div>
			<div className="flex items-center gap-2 mb-8">
				<img src="/divith-logo.png" alt="Divith Logo" className="w-12 h-12" />
				<span className="font-bold text-lg text-[#2e7d5b] leading-tight">
					Divith <br />
					<span className="block text-xs font-normal text-gray-600">
						Path Labs & Diagnostics
					</span>
				</span>
			</div>
			{navSections.map((section) => (
				<div key={section.title} className="mb-4">
					<div className="text-xs font-semibold text-gray-400 mb-2 ml-2 tracking-widest">
						{section.title}
					</div>
					<nav className="flex flex-col gap-1">
						{section.links.map((link) => (
							<button
								key={link.label}
								className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-[#e0f7fa] transition font-medium text-sm">
								<span>{link.icon}</span>
								{link.label}
							</button>
						))}
					</nav>
				</div>
			))}
		</div>
		<div className="flex flex-col gap-2 mt-8">
			<button className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition font-medium text-sm">
				<span>🚪</span> Log Out
			</button>
		</div>
	</aside>
);

export default Sidebar;
