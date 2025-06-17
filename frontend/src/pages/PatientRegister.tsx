import React, { useState, useEffect } from "react";

interface FormData {
	// General Details
	mobileNumber: string;
	date: string;
	regNo: string;
	prefix: string;
	firstName: string;
	lastName: string;
	relationshipType: string;
	relationshipName: string;
	address1: string;
	address2: string;
	city: string;
	state: string;
	aadhar: string;
	aadharFile: File | null;
	email: string;
	gender: string;
	dateOfBirth: string;
	refByDoctor: string;
	refByHospital: string;
	remark: string;
	remarkFile: File | null;

	// Sample & Payment Info
	testParticulars: string;
	sampleDate: string;
	sampleNo: string;
	colCenter: string;
	sampleBy: string;
	cashBy: string;
	paymentMode: string;
	// Commented out fields as requested
	// paymentRefNo: string;
	// totalAmount: string;
	// discountPercent: string;
	// discount: string;
	// disType: string;
	// received: string;
	// due: string;
	image: File | null;
}

const PatientRegister: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		mobileNumber: "",
		date: "",
		regNo: "",
		prefix: "",
		firstName: "",
		lastName: "",
		relationshipType: "",
		relationshipName: "",
		address1: "",
		address2: "",
		city: "",
		state: "",
		aadhar: "",
		aadharFile: null,
		email: "",
		gender: "",
		dateOfBirth: "",
		refByDoctor: "",
		refByHospital: "",
		remark: "",
		remarkFile: null,
		testParticulars: "",
		sampleDate: "",
		sampleNo: "",
		colCenter: "",
		sampleBy: "",
		cashBy: "",
		paymentMode: "",
		image: null,
	});

	const [errors, setErrors] = useState<Record<string, string>>({});

	// Auto-fill date and generate registration number on component mount
	useEffect(() => {
		const today = new Date().toISOString().split("T")[0];
		const regNumber = `REG${Date.now().toString().slice(-6)}`;
		setFormData((prev) => ({
			...prev,
			date: today,
			regNo: regNumber,
		}));
	}, []);

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
			if (!formData.mobileNumber.trim())
				newErrors.mobileNumber = "Mobile number is required";
			if (!formData.firstName.trim())
				newErrors.firstName = "First name is required";
			if (!formData.lastName.trim())
				newErrors.lastName = "Last name is required";
			if (!formData.email.trim()) newErrors.email = "Email is required";
			if (!formData.gender) newErrors.gender = "Gender is required";
			if (!formData.dateOfBirth)
				newErrors.dateOfBirth = "Date of birth is required";
		}

		if (step === 2) {
			if (!formData.testParticulars.trim())
				newErrors.testParticulars = "Test particulars are required";
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
						Mobile Number *
					</label>
					<input
						type="tel"
						name="mobileNumber"
						value={formData.mobileNumber}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.mobileNumber ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter mobile number"
					/>
					{errors.mobileNumber && (
						<p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Date (Auto-filled)
					</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
						readOnly
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Registration No. (Auto-generated)
					</label>
					<input
						type="text"
						name="regNo"
						value={formData.regNo}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
						readOnly
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
						<option value="Prof.">Prof.</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						First Name *
					</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.firstName ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter first name"
					/>
					{errors.firstName && (
						<p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Last Name *
					</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.lastName ? "border-red-500" : "border-gray-300"
						}`}
						placeholder="Enter last name"
					/>
					{errors.lastName && (
						<p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Relationship Type
					</label>
					<select
						name="relationshipType"
						value={formData.relationshipType}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="">Select Relationship</option>
						<option value="C/O">C/O (Care Of)</option>
						<option value="S/O">S/O (Son Of)</option>
						<option value="D/O">D/O (Daughter Of)</option>
						<option value="W/O">W/O (Wife Of)</option>
						<option value="H/O">H/O (Husband Of)</option>
					</select>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Relationship Name
					</label>
					<input
						type="text"
						name="relationshipName"
						value={formData.relationshipName}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter relationship name"
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
						State
					</label>
					<input
						type="text"
						name="state"
						value={formData.state}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter state"
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
						Upload Aadhar Document
					</label>
					<input
						type="file"
						name="aadharFile"
						accept=".pdf,.jpg,.jpeg,.png"
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					{formData.aadharFile && (
						<p className="text-sm text-green-600 mt-1">
							File selected: {formData.aadharFile.name}
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Email Address *
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
						Gender *
					</label>
					<select
						name="gender"
						value={formData.gender}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.gender ? "border-red-500" : "border-gray-300"
						}`}>
						<option value="">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>
					</select>
					{errors.gender && (
						<p className="text-red-500 text-sm mt-1">{errors.gender}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Date of Birth *
					</label>
					<input
						type="date"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						onChange={handleInputChange}
						className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
							errors.dateOfBirth ? "border-red-500" : "border-gray-300"
						}`}
					/>
					{errors.dateOfBirth && (
						<p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Referred By (Doctor Name)
					</label>
					<input
						type="text"
						name="refByDoctor"
						value={formData.refByDoctor}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter doctor's name"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Referred By (Hospital/Clinic Name)
					</label>
					<input
						type="text"
						name="refByHospital"
						value={formData.refByHospital}
						onChange={handleInputChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter hospital/clinic name"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Remarks/Notes
				</label>
				<textarea
					name="remark"
					value={formData.remark}
					onChange={handleInputChange}
					rows={3}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholder="Enter any remarks or notes"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Upload Remark/Note Files
				</label>
				<input
					type="file"
					name="remarkFile"
					accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				{formData.remarkFile && (
					<p className="text-sm text-green-600 mt-1">
						File selected: {formData.remarkFile.name}
					</p>
				)}
			</div>
		</div>
	);

	const renderStep2 = () => (
		<div className="space-y-4 sm:space-y-6">
			<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
				Sample & Payment Information
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
				<div className="md:col-span-2">
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Particulars of Test *
					</label>
					<div className="space-y-2">
						<input
							type="text"
							name="testParticulars"
							value={formData.testParticulars}
							onChange={handleInputChange}
							className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								errors.testParticulars ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="Search and select test"
						/>
						<select
							name="testParticularsDropdown"
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									testParticulars: e.target.value,
								}))
							}
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
							<option value="">Select from test categories</option>
							<option value="Blood Test - Complete Blood Count (CBC)">
								Blood Test - Complete Blood Count (CBC)
							</option>
							<option value="Blood Test - Lipid Profile">
								Blood Test - Lipid Profile
							</option>
							<option value="Blood Test - Thyroid Function Test">
								Blood Test - Thyroid Function Test
							</option>
							<option value="Urine Test - Routine Examination">
								Urine Test - Routine Examination
							</option>
							<option value="X-Ray - Chest">X-Ray - Chest</option>
							<option value="Ultrasound - Abdomen">Ultrasound - Abdomen</option>
							<option value="ECG">ECG</option>
							<option value="Blood Sugar - Fasting">
								Blood Sugar - Fasting
							</option>
							<option value="Blood Sugar - Random">Blood Sugar - Random</option>
							<option value="Liver Function Test">Liver Function Test</option>
						</select>
					</div>
					{errors.testParticulars && (
						<p className="text-red-500 text-sm mt-1">
							{errors.testParticulars}
						</p>
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
						<option value="SBI Account">SBI Account</option>
						<option value="HDFC Account">HDFC Account</option>
						<option value="ICICI Account">ICICI Account</option>
						<option value="Axis Bank Account">Axis Bank Account</option>
						<option value="PNB Account">PNB Account</option>
						<option value="UPI">UPI</option>
						<option value="Credit Card">Credit Card</option>
						<option value="Debit Card">Debit Card</option>
					</select>
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

			{/* Commented out payment calculation fields as requested */}
			{/*
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 opacity-50">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Payment Reference No. (UTR)
					</label>
					<input
						type="text"
						name="paymentRefNo"
						disabled
						className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
						placeholder="For online payments only"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Total Amount (Auto-generated)
					</label>
					<input
						type="number"
						name="totalAmount"
						disabled
						className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
						placeholder="Auto-calculated"
					/>
				</div>
			</div>
			*/}
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
						<strong>Mobile:</strong> {formData.mobileNumber}
					</div>
					<div>
						<strong>Date:</strong> {formData.date}
					</div>
					<div>
						<strong>Registration No:</strong> {formData.regNo}
					</div>
					<div>
						<strong>Name:</strong> {formData.prefix} {formData.firstName}{" "}
						{formData.lastName}
					</div>
					<div>
						<strong>Relationship:</strong> {formData.relationshipType}{" "}
						{formData.relationshipName}
					</div>
					<div>
						<strong>Email:</strong> {formData.email}
					</div>
					<div>
						<strong>Gender:</strong> {formData.gender}
					</div>
					<div>
						<strong>Date of Birth:</strong> {formData.dateOfBirth}
					</div>
					<div>
						<strong>City:</strong> {formData.city}
					</div>
					<div>
						<strong>State:</strong> {formData.state}
					</div>
					<div>
						<strong>Referred by Doctor:</strong> {formData.refByDoctor}
					</div>
					<div>
						<strong>Referred by Hospital:</strong> {formData.refByHospital}
					</div>
				</div>
			</div>

			<div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
				<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
					Sample & Payment Details
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-sm">
					<div>
						<strong>Test Particulars:</strong> {formData.testParticulars}
					</div>
					<div>
						<strong>Sample Date:</strong> {formData.sampleDate}
					</div>
					<div>
						<strong>Payment Mode:</strong> {formData.paymentMode}
					</div>
					<div>
						<strong>Collection Center:</strong> {formData.colCenter}
					</div>
				</div>
			</div>

			{(formData.image || formData.aadharFile || formData.remarkFile) && (
				<div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
					<h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
						Uploaded Files
					</h3>
					{formData.image && (
						<div className="mb-4">
							<p className="text-sm font-medium">Patient Image:</p>
							<img
								src={URL.createObjectURL(formData.image)}
								alt="Patient"
								className="w-32 h-32 object-cover rounded-lg border mt-2"
							/>
						</div>
					)}
					{formData.aadharFile && (
						<div className="mb-4">
							<p className="text-sm font-medium">
								Aadhar Document: {formData.aadharFile.name}
							</p>
						</div>
					)}
					{formData.remarkFile && (
						<div className="mb-4">
							<p className="text-sm font-medium">
								Remark File: {formData.remarkFile.name}
							</p>
						</div>
					)}
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
