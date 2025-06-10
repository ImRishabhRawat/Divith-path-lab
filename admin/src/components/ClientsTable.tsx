import React, { useState } from "react";

const tabs = ["Clients", "Providers", "Request Time", "Fake Account"];

const clients = [
	{
		name: "Robert Fox",
		email: "robertfox@com",
		history: 25,
		status: "Active",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		name: "Kristin Watson",
		email: "kristinwatson24@com",
		history: 25,
		status: "Active",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
	},
	{
		name: "Cody Fisher",
		email: "codyfisher356@com",
		history: 25,
		status: "Active",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
	},
	{
		name: "Annette Black",
		email: "annetteblack87@com",
		history: 25,
		status: "Active",
		avatar: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		name: "Devon Lane",
		email: "devonlane348@com",
		history: 25,
		status: "Active",
		avatar: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		name: "Jerome Bell",
		email: "jeromebell@com",
		history: 25,
		status: "In Active",
		avatar: "https://randomuser.me/api/portraits/men/6.jpg",
	},
];

const ClientsTable: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [search, setSearch] = useState("");

	const filteredClients = clients.filter(
		(c) =>
			c.name.toLowerCase().includes(search.toLowerCase()) ||
			c.email.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="bg-white rounded-2xl shadow p-6 mt-6">
			<div className="flex items-center gap-4 mb-4">
				{tabs.map((tab, idx) => (
					<button
						key={tab}
						className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
							activeTab === idx
								? "bg-[#e0f7fa] text-[#006666]"
								: "text-gray-500 hover:bg-gray-100"
						}`}
						onClick={() => setActiveTab(idx)}>
						{tab}
					</button>
				))}
				<div className="ml-auto flex items-center gap-2">
					<input
						type="text"
						placeholder="Search"
						className="border rounded-lg px-3 py-2 text-sm"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="bg-[#00b894] text-white px-4 py-2 rounded-lg font-semibold text-sm">
						Download
					</button>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full text-left">
					<thead>
						<tr className="text-xs text-gray-500 border-b">
							<th className="py-2">Name</th>
							<th>Email Address</th>
							<th>Booking History</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{filteredClients.map((client) => (
							<tr key={client.email} className="border-b hover:bg-gray-50">
								<td className="py-2 flex items-center gap-2">
									<img
										src={client.avatar}
										alt={client.name}
										className="w-8 h-8 rounded-full"
									/>
									{client.name}
								</td>
								<td>{client.email}</td>
								<td>{client.history}</td>
								<td>
									<span
										className={`px-3 py-1 rounded-full text-xs font-semibold ${
											client.status === "Active"
												? "bg-green-100 text-green-700"
												: "bg-red-100 text-red-700"
										}`}>
										{client.status}
									</span>
								</td>
								<td>
									<button className="px-2 py-1 text-gray-400 hover:text-gray-700">
										⋮
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-between items-center mt-4 text-xs text-gray-500">
				<span>
					Show <b>all</b> of <b>{filteredClients.length}</b>
				</span>
				<span>1 Page</span>
			</div>
		</div>
	);
};

export default ClientsTable;
