import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthModal: React.FC = () => {
	const { login, signup } = useAuth();
	const [tab, setTab] = useState<"login" | "signup">("login");
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		role: "staff",
	});
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const ok = await login(form.email, form.password);
		if (!ok) setError("Invalid credentials");
	};

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		const ok = await signup(
			form.name,
			form.email,
			form.password,
			form.role as "admin" | "staff"
		);
		if (!ok) setError("Signup failed");
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
			<div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
				<div className="flex justify-center mb-6">
					<button
						className={`px-4 py-2 font-semibold ${
							tab === "login" ? "border-b-2 border-[#006666]" : "text-gray-400"
						}`}
						onClick={() => setTab("login")}>
						Login
					</button>
					<button
						className={`px-4 py-2 font-semibold ${
							tab === "signup" ? "border-b-2 border-[#006666]" : "text-gray-400"
						}`}
						onClick={() => setTab("signup")}>
						Sign Up
					</button>
				</div>
				{tab === "login" ? (
					<form onSubmit={handleLogin} className="space-y-4">
						<input
							name="email"
							type="email"
							placeholder="Email"
							className="w-full border rounded-lg px-3 py-2"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<input
							name="password"
							type="password"
							placeholder="Password"
							className="w-full border rounded-lg px-3 py-2"
							value={form.password}
							onChange={handleChange}
							required
						/>
						{error && <div className="text-red-500">{error}</div>}
						<button
							type="submit"
							className="w-full bg-[#006666] text-white py-2 rounded-lg font-semibold">
							Login
						</button>
					</form>
				) : (
					<form onSubmit={handleSignup} className="space-y-4">
						<input
							name="name"
							type="text"
							placeholder="Name"
							className="w-full border rounded-lg px-3 py-2"
							value={form.name}
							onChange={handleChange}
							required
						/>
						<input
							name="email"
							type="email"
							placeholder="Email"
							className="w-full border rounded-lg px-3 py-2"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<input
							name="password"
							type="password"
							placeholder="Password"
							className="w-full border rounded-lg px-3 py-2"
							value={form.password}
							onChange={handleChange}
							required
						/>
						<select
							name="role"
							className="w-full border rounded-lg px-3 py-2"
							value={form.role}
							onChange={handleChange}>
							<option value="staff">Staff</option>
							<option value="admin">Admin</option>
						</select>
						{error && <div className="text-red-500">{error}</div>}
						<button
							type="submit"
							className="w-full bg-[#006666] text-white py-2 rounded-lg font-semibold">
							Sign Up
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default AuthModal;
