import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const categories = [
	"All tests",
	"Affordable Packages",
	"Diabetes",
	"Heart",
	"Cancer",
	"Vitamin",
	"Women Health",
	"Skin care",
	"Liver",
	"Kidney",
	"Stress",
];

const tests = [
	{
		name: "Complete Blood Count (CBC)",
		oldPrice: 260,
		price: 199,
		category: ["All tests"],
	},
	{
		name: "Blood Chemistry Panel",
		oldPrice: 120,
		price: 99,
		category: ["All tests"],
	},
	{
		name: "Urinalysis",
		oldPrice: 260,
		price: 199,
		category: ["All tests"],
	},
	{
		name: "Electrocardiogram (ECG)",
		oldPrice: 410,
		price: 399,
		category: ["All tests", "Heart"],
	},
	{
		name: "Chest X-Ray",
		oldPrice: 260,
		price: 199,
		category: ["All tests"],
	},
	{
		name: "Magnetic Resonance Imaging (MRI)",
		oldPrice: 260,
		price: 169,
		category: ["All tests"],
	},
];

const BookLabTests = () => {
	const [activeTab, setActiveTab] = useState("All tests");

	const filteredTests =
		activeTab === "All tests"
			? tests
			: tests.filter((t) => t.category.includes(activeTab));

	return (
		<section className="bg-white py-12 w-full ">
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-3xl md:text-4xl font-extrabold text-black">
					Book Lab Tests
				</h2>
				<Link to="/book-lab-tests" className="text-sm font-semibold text-black flex items-center gap-1 hover:underline whitespace-nowrap">
					SEE ALL <span className="text-lg">→</span>
				</Link>
			</div>
			{/* Tabs */}
			<div className="flex flex-nowrap gap-3 mb-6 overflow-x-auto scrollbar-hide -mx-4 px-4">
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setActiveTab(cat)}
						className={`min-w-max px-5 py-2 rounded-full border text-sm font-semibold transition-colors duration-150 mb-6 ${
							activeTab === cat
								? "bg-black text-white border-black"
								: "bg-white text-black border-gray-200 hover:bg-gray-100"
						}`}>
						{cat}
					</button>
				))}
			</div>
			{/* Test List */}
			<div className="divide-y divide-gray-200 px-2 md:px-12">
				{filteredTests.map((test) => (
					<div
						key={test.name}
						className="flex flex-col sm:flex-row sm:items-center py-5 gap-2 sm:gap-0">
						<div className="flex-1 text-base font-medium text-black">
							{test.name}
						</div>
						<div className="flex flex-row sm:flex-row items-center gap-2 min-w-[180px] justify-end">
							<span className="text-gray-400 line-through text-base font-medium mr-2">
								${test.oldPrice.toFixed(2)}
							</span>
							<span className="text-xl font-bold text-black">
								${test.price.toFixed(2)}
							</span>
							{/* Desktop: Add button */}
							<button className="ml-2 px-5 py-1.5 rounded-full border border-black text-black font-semibold text-base hover:bg-black hover:text-white transition-colors hidden sm:block">
								Add
							</button>
							{/* Mobile: dark circle with plus icon */}
							<button className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-black text-white sm:hidden">
								<FiPlus size={22} />
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BookLabTests;
