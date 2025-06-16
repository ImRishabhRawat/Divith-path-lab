import React, { useState } from "react";

interface FormData {
	// General Details
	date: string;
	regNo: string;
	name: string;
	prefix: string;
	careOf: string;
	address1: string;
	address2: string;
	city: string;
	aadhar: string;
	email: string;
	category: string;
	age: string;
	refBy: string;
	secondRef: string;
	remark: string;

	// Sample & Payment Info
	testName: string;
	sampleDate: string;
	sampleNo: string;
	colCenter: string;
	sampleBy: string;
	cashBy: string;
	paymentMode: string;
	paymentRefNo: string;
	totalAmount: string;
	discountPercent: string;
	discount: string;
	disType: string;
	received: string;
	due: string;
	image: File | null;
}

const PatientRegister: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		date: "",
		regNo: "",
		name: "",
		prefix: "",
		careOf: "",
		address1: "",
		address2: "",
		city: "",
		aadhar: "",
		email: "",
		category: "",
		age: "",
		refBy: "",
		secondRef: "",
		remark: "",
		testName: "",
		sampleDate: "",
		sampleNo: "",
		colCenter: "",
		sampleBy: "",
		cashBy: "",
		paymentMode: "",
		paymentRefNo: "",
		totalAmount: "",
		discountPercent: "",
		discount: "",
		disType: "",
		received: "",
		due: "",
		image: null,
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value, type } = e.target;

		if (type === "file") {
			const fileInput = e.target as HTMLInputElement;
			const file = fileInput.files?.[0] || null;
			setFormData((prev) => ({ ...prev, [name]: file }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateStep = (step: number): boolean => {
		const newErrors: Record<string, string> = {};

		if (step === 1) {
			if (!formData.name.trim()) newErrors.name = "Name is required";
			if (!formData.date) newErrors.date = "Date is required";
			if (!formData.email.trim()) newErrors.email = "Email is required";
			if (!formData.category) newErrors.category = "Category is required";
			if (!formData.age) newErrors.age = "Age is required";
		}

		if (step === 2) {
			if (!formData.testName.trim())
				newErrors.testName = "Test name is required";
			if (!formData.sampleDate)
				newErrors.sampleDate = "Sample date is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleNext = () => {
		if (validateStep(currentStep)) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const handlePrevious = () => {
		setCurrentStep((prev) => prev - 1);
		setErrors({});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateStep(2)) {
			console.log("Form submitted:", formData);
			alert("Registration submitted successfully!");
			// Here you would typically send the data to your backend
		}
	};

	const renderStepIndicator = () => {
		const steps = ["General Details", "Sample & Payment", "Review"];

		return (
			<div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 md:mb-8 space-y-4 sm:space-y-0">
				{steps.map((step, index) => (
					<div key={index} className="flex items-center">
						<div
							className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 font-semibold text-sm ${
								currentStep > index + 1
									? "bg-green-500 text-white border-green-500"
									: currentStep === index + 1
									? "bg-blue-500 text-white border-blue-500"
									: "bg-gray-200 text-gray-600 border-gray-300"
							}`}>
							{currentStep > index + 1 ? "✓" : index + 1}
						</div>
						<span
							className={`ml-2 text-xs sm:text-sm font-medium text-center sm:text-left ${
								currentStep === index + 1 ? "text-blue-600" : "text-gray-500"
							}`}>
							{step}
						</span>
						{index < steps.length - 1 && (
							<div
								className={`hidden sm:block w-8 md:w-16 h-1 mx-2 md:mx-4 ${
									currentStep > index + 1 ? "bg-green-500" : "bg-gray-300"
								}`}
							/>
						)}
					</div>
				))}
			</div>
		);
	};

	const renderStep1 = () => (
		<div className="space-y-4 sm:space-y-6">
			<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				General Details
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Date *
					</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.date ? "border-red-500" : "border-gray-300"
						}`}
					/>
					{errors.date && (
						<p className="text-red-500 text-sm mt-1">{errors.date}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Registration No.
					</label>
					<input
						type="text"
						name="regNo"
						value={formData.regNo}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter registration number"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Prefix
					</label>
					<select
						name="prefix"
						value={formData.prefix}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="">Select Prefix</option>
						<option value="Mr.">Mr.</option>
						<option value="Mrs.">Mrs.</option>
						<option value="Ms.">Ms.</option>
						<option value="Dr.">Dr.</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Name *
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.name ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter full name"
					/>
					{errors.name && (
						<p className="text-red-500 text-sm mt-1">{errors.name}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Care Of
					</label>
					<input
						type="text"
						name="careOf"
						value={formData.careOf}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Care of"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Address Line 1
					</label>
					<input
						type="text"
						name="address1"
						value={formData.address1}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter address line 1"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Address Line 2
					</label>
					<input
						type="text"
						name="address2"
						value={formData.address2}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter address line 2"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						City
					</label>
					<input
						type="text"
						name="city"
						value={formData.city}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter city"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Aadhar Number
					</label>
					<input
						type="text"
						name="aadhar"
						value={formData.aadhar}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter Aadhar number"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Email *
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.email ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter email address"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Category *
					</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.category ? "border-red-500" : "border-gray-300"
						}`}>
						<option value="">Select Category</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
					{errors.category && (
						<p className="text-red-500 text-sm mt-1">{errors.category}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Age *
					</label>
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.age ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter age"
					/>
					{errors.age && (
						<p className="text-red-500 text-sm mt-1">{errors.age}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Referred By
					</label>
					<input
						type="text"
						name="refBy"
						value={formData.refBy}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Referred by"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Second Reference
					</label>
					<input
						type="text"
						name="secondRef"
						value={formData.secondRef}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Second reference"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Remarks
				</label>
				<textarea
					name="remark"
					value={formData.remark}
					onChange={handleInputChange}
					rows={3}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Enter any remarks"
				/>
			</div>
		</div>
	);

	const renderStep2 = () => (
		<div className="space-y-4 sm:space-y-6">
			<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				Sample & Payment Information
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Test Name *
					</label>
					<input
						type="text"
						name="testName"
						value={formData.testName}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.testName ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter test name"
					/>
					{errors.testName && (
						<p className="text-red-500 text-sm mt-1">{errors.testName}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Sample Date *
					</label>
					<input
						type="datetime-local"
						name="sampleDate"
						value={formData.sampleDate}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.sampleDate ? "border-red-500" : "border-gray-300"
						}`}
					/>
					{errors.sampleDate && (
						<p className="text-red-500 text-sm mt-1">{errors.sampleDate}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Sample Number
					</label>
					<input
						type="text"
						name="sampleNo"
						value={formData.sampleNo}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter sample number"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Collection Center
					</label>
					<input
						type="text"
						name="colCenter"
						value={formData.colCenter}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter collection center"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Sample Collected By
					</label>
					<input
						type="text"
						name="sampleBy"
						value={formData.sampleBy}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Sample collected by"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Cash Received By
					</label>
					<input
						type="text"
						name="cashBy"
						value={formData.cashBy}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Cash received by"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Payment Mode
					</label>
					<select
						name="paymentMode"
						value={formData.paymentMode}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="">Select Payment Mode</option>
						<option value="Cash">Cash</option>
						<option value="Card">Card</option>
						<option value="UPI">UPI</option>
						<option value="Net Banking">Net Banking</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Payment Reference No.
					</label>
					<input
						type="text"
						name="paymentRefNo"
						value={formData.paymentRefNo}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter payment reference number"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Total Amount
					</label>
					<input
						type="number"
						name="totalAmount"
						value={formData.totalAmount}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter total amount"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Discount %
					</label>
					<input
						type="number"
						name="discountPercent"
						value={formData.discountPercent}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter discount percentage"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Discount Amount
					</label>
					<input
						type="number"
						name="discount"
						value={formData.discount}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter discount amount"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Discount Type
					</label>
					<select
						name="disType"
						value={formData.disType}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="">Select Discount Type</option>
						<option value="Percentage">Percentage</option>
						<option value="Fixed">Fixed Amount</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Amount Received
					</label>
					<input
						type="number"
						name="received"
						value={formData.received}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter received amount"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Due Amount
					</label>
					<input
						type="number"
						name="due"
						value={formData.due}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter due amount"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Patient Image
				</label>
				<input
					type="file"
					name="image"
					accept="image/*"
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				{formData.image && (
					<div className="mt-4">
						<img
							src={URL.createObjectURL(formData.image)}
							alt="Patient"
							className="w-32 h-32 object-cover rounded-lg border"
						/>
					</div>
				)}
			</div>
		</div>
	);

	const renderStep3 = () => (
		<div className="space-y-4 sm:space-y-6">
			<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				Review & Submit
			</h2>

			<div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
				<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
					General Details
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm">
					<div>
						<strong>Date:</strong> {formData.date}
					</div>
					<div>
						<strong>Name:</strong> {formData.prefix} {formData.name}
					</div>
					<div>
						<strong>Email:</strong> {formData.email}
					</div>
					<div>
						<strong>Category:</strong> {formData.category}
					</div>
					<div>
						<strong>Age:</strong> {formData.age}
					</div>
					<div>
						<strong>City:</strong> {formData.city}
					</div>
				</div>
			</div>

			<div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
				<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
					Sample & Payment Details
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm">
					<div>
						<strong>Test Name:</strong> {formData.testName}
					</div>
					<div>
						<strong>Sample Date:</strong> {formData.sampleDate}
					</div>
					<div>
						<strong>Total Amount:</strong> ₹{formData.totalAmount}
					</div>
					<div>
						<strong>Payment Mode:</strong> {formData.paymentMode}
					</div>
					<div>
						<strong>Amount Received:</strong> ₹{formData.received}
					</div>
					<div>
						<strong>Due Amount:</strong> ₹{formData.due}
					</div>
				</div>
			</div>

			{formData.image && (
				<div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
					<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
						Patient Image
					</h3>
					<img
						src={URL.createObjectURL(formData.image)}
						alt="Patient"
						className="w-32 h-32 object-cover rounded-lg border"
					/>
				</div>
			)}
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-100 py-4 px-2 sm:py-6 sm:px-4 md:py-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
					<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8">
						Patient Registration
					</h1>

					{renderStepIndicator()}

					<form onSubmit={handleSubmit}>
						{currentStep === 1 && renderStep1()}
						{currentStep === 2 && renderStep2()}
						{currentStep === 3 && renderStep3()}

						<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-6 sm:mt-8 pt-4 sm:pt-6 ">
							{currentStep > 1 && (
								<button
									type="button"
									onClick={handlePrevious}
									className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base">
									Previous
								</button>
							)}

							<div className="flex-1"></div>

							{currentStep < 3 ? (
								<button
									type="button"
									onClick={handleNext}
									className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
									Next
								</button>
							) : (
								<button
									type="submit"
									className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base">
									Submit Registration
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PatientRegister;
