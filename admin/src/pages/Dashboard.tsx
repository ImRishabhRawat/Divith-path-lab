import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Topbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => (
	<header
		className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20"
		style={{ minHeight: 72 }}>
		<div className="flex items-center gap-3 flex-1">
			<button
				className="md:hidden mr-2 p-2 rounded hover:bg-gray-100"
				onClick={onMenuClick}
				aria-label="Open sidebar">
				<svg
					width="24"
					height="24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24">
					<path d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
			<span className="hidden md:inline text-xl font-semibold text-gray-800">
				Lab Management Dashboard
			</span>
		</div>
		<div className="flex items-center gap-4 flex-1 justify-end">
			<input
				type="text"
				placeholder="Search..."
				className="hidden md:block px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7d5b] w-32 sm:w-48"
			/>
			<button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 text-xl">
				🔔
			</button>
			<div className="flex items-center gap-2">
				<img
					src="https://randomuser.me/api/portraits/women/44.jpg"
					alt="User"
					className="w-9 h-9 rounded-full object-cover border-2 border-[#2e7d5b]"
				/>
				<div className="hidden sm:flex flex-col">
					<span className="text-sm font-semibold text-gray-800">
						Dr. Priya Sharma
					</span>
					<span className="text-xs text-green-600">● Online</span>
				</div>
			</div>
		</div>
	</header>
);

const summaryCards = [
	{
		label: "Total Tests",
		value: 1240,
		sub: "Completed",
		extra: "PCR, Blood, Urine, X-Ray",
	},
	{ label: "Lab Technicians", value: 18, sub: "On Duty", extra: "3 On Leave" },
	{
		label: "Equipments",
		value: 42,
		sub: "Active",
		extra: "5 Under Maintenance",
	},
	{ label: "Samples Processed", value: 3200, sub: "+8%", extra: "" },
];

const samples = [
	{
		name: "John Doe",
		type: "Blood",
		id: "SMP-00123",
		date: "6 Jan 2024",
		test: "CBC",
		status: "Completed",
		equipment: "Hematology Analyzer",
	},
	{
		name: "Jane Smith",
		type: "Urine",
		id: "SMP-00124",
		date: "6 Jan 2024",
		test: "Urinalysis",
		status: "Processing",
		equipment: "Urine Analyzer",
	},
	{
		name: "Alex Lee",
		type: "Swab",
		id: "SMP-00125",
		date: "6 Jan 2024",
		test: "PCR",
		status: "Pending",
		equipment: "PCR Machine",
	},
];

const Dashboard: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sampleFilter, setSampleFilter] = useState<"week" | "month" | "year">(
		"month"
	);

	// Function to get date labels based on filter
	const getDateLabels = () => {
		const today = new Date();
		const labels: string[] = [];

		switch (sampleFilter) {
			case "week":
				// Get last 7 days
				for (let i = 6; i >= 0; i--) {
					const date = new Date(today);
					date.setDate(date.getDate() - i);
					labels.push(date.toLocaleDateString("en-US", { weekday: "short" }));
				}
				break;
			case "month":
				// Get current month days up to today
				const daysInMonth = new Date(
					today.getFullYear(),
					today.getMonth() + 1,
					0
				).getDate();
				for (let i = 1; i <= Math.min(daysInMonth, today.getDate()); i++) {
					labels.push(i.toString());
				}
				break;
			case "year":
				// Get last 12 months
				for (let i = 11; i >= 0; i--) {
					const date = new Date(today);
					date.setMonth(date.getMonth() - i);
					labels.push(date.toLocaleDateString("en-US", { month: "short" }));
				}
				break;
		}
		return labels;
	};

	// Function to get filter title
	const getFilterTitle = () => {
		const today = new Date();
		switch (sampleFilter) {
			case "week":
				return "Last 7 Days";
			case "month":
				return today.toLocaleDateString("en-US", {
					month: "long",
					year: "numeric",
				});
			case "year":
				return "Last 12 Months";
		}
	};

	return (
		<div
			className="min-h-screen w-full bg-[#f7fafc] flex"
			style={{ fontFamily: "Poppins, sans-serif" }}>
			{/* Sidebar for desktop */}
			<div className="hidden md:flex">
				<Sidebar />
			</div>
			{/* Sidebar for mobile */}
			{sidebarOpen && (
				<div className="fixed inset-0 z-30 flex">
					<div className="w-64 bg-white shadow-lg h-full">
						<Sidebar />
					</div>
					<div
						className="flex-1 bg-black bg-opacity-30"
						onClick={() => setSidebarOpen(false)}
					/>
				</div>
			)}
			<div className="flex-1 flex flex-col min-w-0 bg-[#f7fafc]">
				<div className="flex flex-col items-center w-full">
					<div className="w-full max-w-[1400px] flex flex-col min-h-screen">
						<Topbar onMenuClick={() => setSidebarOpen(true)} />
						<main
							className="flex-1 px-2 sm:px-4 md:px-8 py-6 md:py-8 bg-[#f7fafc]"
							style={{ minHeight: "calc(100vh - 72px)" }}>
							{/* Summary Cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
								{summaryCards.map((card) => (
									<div
										key={card.label}
										className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col gap-2 min-w-[160px] h-[110px] justify-center">
										<div className="flex items-center gap-2">
											<span className="text-2xl font-bold text-gray-800">
												{card.value}
											</span>
											{card.sub && (
												<span className="ml-2 text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 font-semibold">
													{card.sub}
												</span>
											)}
										</div>
										<div className="text-sm text-gray-500 font-medium">
											{card.label}
										</div>
										{card.extra && (
											<div className="text-xs text-gray-400 mt-1">
												{card.extra}
											</div>
										)}
									</div>
								))}
							</div>

							{/* Report & Chart Row */}
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
								{/* Report Card */}
								<div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col gap-4 h-[260px] relative">
									<div className="flex items-center justify-between mb-2">
										<span className="font-semibold text-lg text-gray-800">
											Test Completion
										</span>
										<button className="px-3 py-1 bg-[#2e7d5b] text-white rounded-lg text-xs font-semibold">
											Add Test
										</button>
									</div>
									{/* Circular Progress (placeholder) */}
									<div className="flex flex-col items-center justify-center relative h-[120px]">
										<svg width="100" height="100" viewBox="0 0 100 100">
											<circle
												cx="50"
												cy="50"
												r="40"
												fill="none"
												stroke="#e5e7eb"
												strokeWidth="10"
											/>
											<circle
												cx="50"
												cy="50"
												r="40"
												fill="none"
												stroke="#2e7d5b"
												strokeWidth="10"
												strokeDasharray="251.2"
												strokeDashoffset="63"
												strokeLinecap="round"
											/>
										</svg>
										<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800">
											75%
										</div>
									</div>
									<div className="flex justify-center gap-4 mt-2 text-xs flex-wrap">
										<span className="text-green-600 font-semibold">
											Completed 75%
										</span>
										<span className="text-yellow-500 font-semibold">
											Processing 15%
										</span>
										<span className="text-red-500 font-semibold">
											Pending 10%
										</span>
									</div>
								</div>
								{/* Samples Overview Chart */}
								<div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col gap-4 col-span-2 h-[260px]">
									<div className="flex items-center justify-between mb-2">
										<span className="font-semibold text-lg text-gray-800">
											Samples Overview
										</span>
										<div className="flex items-center gap-2">
											<span className="text-xs text-gray-400">
												{getFilterTitle()}
											</span>
											<div className="flex gap-1">
												<button
													onClick={() => setSampleFilter("week")}
													className={`px-2 py-1 text-xs rounded ${
														sampleFilter === "week"
															? "bg-[#2e7d5b] text-white"
															: "bg-gray-100 text-gray-700 hover:bg-gray-200"
													}`}>
													Week
												</button>
												<button
													onClick={() => setSampleFilter("month")}
													className={`px-2 py-1 text-xs rounded ${
														sampleFilter === "month"
															? "bg-[#2e7d5b] text-white"
															: "bg-gray-100 text-gray-700 hover:bg-gray-200"
													}`}>
													Month
												</button>
												<button
													onClick={() => setSampleFilter("year")}
													className={`px-2 py-1 text-xs rounded ${
														sampleFilter === "year"
															? "bg-[#2e7d5b] text-white"
															: "bg-gray-100 text-gray-700 hover:bg-gray-200"
													}`}>
													Year
												</button>
											</div>
										</div>
									</div>
									{/* Chart container */}
									<div className="h-32 w-full flex items-end relative">
										<div className="w-full h-full bg-gradient-to-t from-[#e0f2fe] to-transparent rounded-xl flex items-end absolute left-0 top-0 right-0 bottom-0" />
										{/* Simulated line chart with SVG */}
										<svg
											width="100%"
											height="100%"
											viewBox="0 0 300 80"
											preserveAspectRatio="none"
											className="absolute left-0 top-0">
											<polyline
												fill="none"
												stroke="#2e7d5b"
												strokeWidth="3"
												points="0,60 40,50 80,65 120,40 160,55 200,30 240,60 280,40 300,70"
											/>
										</svg>
									</div>
									{/* Date labels */}
									<div className="flex justify-between text-xs text-gray-500 mt-2">
										{getDateLabels().map((label, index) => (
											<span key={index} className="flex-1 text-center">
												{label}
											</span>
										))}
									</div>
									<div className="flex gap-4 text-xs mt-2 flex-wrap">
										<span className="text-green-700 font-semibold">
											Completed
										</span>
										<span className="text-gray-400">|</span>
										<span className="text-blue-700 font-semibold">
											Processing
										</span>
									</div>
								</div>
							</div>

							{/* Samples Detail Table */}
							<div className="bg-white rounded-2xl shadow p-2 sm:p-4 md:p-6 overflow-x-auto">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
									<div className="text-lg font-semibold text-gray-800">
										Samples Detail Information
									</div>
									<div className="flex gap-2 text-xs flex-wrap">
										<button className="px-3 py-1 rounded bg-gray-100 text-gray-700 font-semibold">
											Today
										</button>
										<button className="px-3 py-1 rounded bg-gray-100 text-gray-700 font-semibold">
											Last Week
										</button>
										<button className="px-3 py-1 rounded bg-gray-100 text-gray-700 font-semibold">
											Last Month
										</button>
										<button className="px-3 py-1 rounded bg-gray-100 text-gray-700 font-semibold">
											Last Year
										</button>
									</div>
								</div>
								<div className="w-full overflow-x-auto">
									<table className="w-full text-left min-w-[700px]">
										<thead>
											<tr className="text-xs text-gray-500 border-b">
												<th className="py-2">Patient Name</th>
												<th>Sample ID</th>
												<th>Collection Date</th>
												<th>Test</th>
												<th>Status</th>
												<th>Equipment</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											{samples.map((s, idx) => (
												<tr key={idx} className="border-b hover:bg-gray-50">
													<td className="py-2 font-medium text-gray-800">
														{s.name}
														<span className="block text-xs text-gray-400 font-normal">
															{s.type}
														</span>
													</td>
													<td>{s.id}</td>
													<td>{s.date}</td>
													<td>{s.test}</td>
													<td>
														<span
															className={`px-3 py-1 rounded-full text-xs font-semibold ${
																s.status === "Completed"
																	? "bg-green-100 text-green-700"
																	: s.status === "Processing"
																	? "bg-yellow-100 text-yellow-700"
																	: "bg-red-100 text-red-700"
															}`}>
															{s.status}
														</span>
													</td>
													<td>{s.equipment}</td>
													<td>
														<button className="px-2 py-1 text-gray-400 hover:text-gray-700">
															✏️
														</button>
														<button className="px-2 py-1 text-gray-400 hover:text-gray-700">
															🗑️
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
