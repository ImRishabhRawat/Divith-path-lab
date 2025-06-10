import { FaUserMd, FaStethoscope, FaHospital } from "react-icons/fa";

const doctors = [
	{
		name: "Dr. Sarah Johnson",
		specialization: "Cardiologist",
		experience: "15 years",
		rating: 4.8,
		image: "/family.png",
		availability: "Mon-Fri, 9AM-5PM",
	},
	{
		name: "Dr. Michael Chen",
		specialization: "Neurologist",
		experience: "12 years",
		rating: 4.9,
		image: "/family.png",
		availability: "Mon-Sat, 10AM-6PM",
	},
	{
		name: "Dr. Emily Brown",
		specialization: "Pediatrician",
		experience: "8 years",
		rating: 4.7,
		image: "/family.png",
		availability: "Mon-Fri, 8AM-4PM",
	},
	{
		name: "Dr. James Wilson",
		specialization: "Orthopedic Surgeon",
		experience: "20 years",
		rating: 4.9,
		image: "/family.png",
		availability: "Tue-Sat, 9AM-5PM",
	},
];

const DoctorsPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Our Expert Doctors
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Connect with our experienced healthcare professionals for expert
					medical advice and personalized care. Book online consultations or
					in-person visits.
				</p>
			</div>

			{/* Search and Filter Section */}
			<div className="bg-white rounded-3xl p-6 mb-12 shadow-sm">
				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex-1">
						<input
							type="text"
							placeholder="Search doctors by name, specialization..."
							className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]"
						/>
					</div>
					<div className="flex gap-4">
						<select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
							<option>All Specializations</option>
							<option>Cardiology</option>
							<option>Neurology</option>
							<option>Pediatrics</option>
							<option>Orthopedics</option>
						</select>
						<select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#006666]">
							<option>All Locations</option>
							<option>New York</option>
							<option>Los Angeles</option>
							<option>Chicago</option>
						</select>
					</div>
				</div>
			</div>

			{/* Doctors Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{doctors.map((doctor) => (
					<div
						key={doctor.name}
						className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
						<div className="flex items-start gap-4">
							<img
								src={doctor.image}
								alt={doctor.name}
								className="w-24 h-24 rounded-2xl object-cover"
							/>
							<div className="flex-1">
								<h3 className="text-xl font-bold text-[#1a1a1a]">
									{doctor.name}
								</h3>
								<p className="text-[#006666] font-medium">
									{doctor.specialization}
								</p>
								<div className="flex items-center gap-2 mt-2">
									<span className="text-yellow-500">★</span>
									<span className="text-[#2d3748]">{doctor.rating}</span>
									<span className="text-gray-400">•</span>
									<span className="text-[#2d3748]">
										{doctor.experience} experience
									</span>
								</div>
							</div>
						</div>
						<div className="mt-4 pt-4 border-t border-gray-100">
							<div className="flex items-center gap-2 text-[#2d3748]">
								<FaHospital className="text-[#006666]" />
								<span>{doctor.availability}</span>
							</div>
							<button className="w-full mt-4 bg-[#006666] text-white py-3 rounded-xl font-medium hover:bg-[#004d4d] transition-colors">
								Book Appointment
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DoctorsPage;
