import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientLogin: React.FC = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Dummy login logic here
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-2">
			<form
				className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8"
				onSubmit={handleSubmit}>
				<h2 className="text-2xl font-bold mb-4 text-center">Patient Login</h2>
				<div>
					<label className="block text-sm font-medium mb-1">Email</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						className="input"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-1">Password</label>
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						className="input"
						required
					/>
				</div>
				<div className="flex justify-between items-center text-xs">
					<button type="button" className="text-green-700 hover:underline">
						Forgot password?
					</button>
					<button
						type="button"
						className="text-green-700 hover:underline"
						onClick={() => navigate("/register")}>
						Register
					</button>
				</div>
				<button
					type="submit"
					className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow mt-4 transition">
					Login
				</button>
			</form>
			<style>{`
        .input {
          @apply w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-400 text-gray-700 text-sm shadow-sm transition;
        }
      `}</style>
		</div>
	);
};

export default PatientLogin;
