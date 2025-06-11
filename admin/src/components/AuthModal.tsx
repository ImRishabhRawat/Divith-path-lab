import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FiChevronDown, FiEye, FiEyeOff } from "react-icons/fi";

const PurpleLogo = () => (
	<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-violet-700 flex items-center justify-center">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
			<circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.15" />
			<circle cx="12" cy="12" r="6" fill="white" fillOpacity="0.3" />
			<circle cx="12" cy="12" r="3" fill="white" />
		</svg>
	</div>
);

const AuthModal: React.FC = () => {
	const { login, signup } = useAuth();
	const [tab, setTab] = useState<"login" | "signup">("login");
	const [form, setForm] = useState({
		labName: "",
		name: "",
		email: "",
		password: "",
		role: "staff",
	});
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

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
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#18181b] to-[#23232a]">
			<div className="rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl min-h-[420px] md:min-h-[480px] overflow-hidden border border-[#23232a] bg-[#18181b]/90 mx-2">
				{/* Left: Form */}
				<div className="flex flex-col justify-center px-5 py-8 md:px-10 md:py-12 text-white w-full md:max-w-md min-w-0 overflow-y-auto max-h-[90vh]">
					<div className="flex justify-between items-center mb-8 md:mb-10">
						<div className="flex items-center gap-3">
							<PurpleLogo />
							<span className="font-bold text-xl md:text-2xl tracking-tight">
								Divith Labs
							</span>
						</div>
						<button className="flex items-center gap-1 bg-[#23232a] px-2 md:px-3 py-1 rounded text-xs text-gray-300 border border-[#23232a]">
							English <FiChevronDown className="ml-1" />
						</button>
					</div>
					<h2 className="text-xl md:text-2xl font-bold mb-2">Welcome!</h2>
					<p className="text-gray-400 mb-5 md:mb-7 text-sm">
						{tab === "login"
							? "Log in to Divith Labs to continue."
							: "Sign up to join Divith Labs and connect your lab with our trusted network."}
					</p>
					<div className="flex flex-col gap-3 mb-4 md:mb-5">
						<button className="flex items-center justify-center gap-2 bg-[#23232a] hover:bg-[#23232a]/80 text-white font-semibold py-2 rounded-lg border border-[#23232a]">
							<span className="bg-white rounded-full p-1">
								<FaGoogle className="text-[#4285F4] text-lg" />
							</span>{" "}
							Sign up with Google
						</button>
						<button className="flex items-center justify-center gap-2 bg-[#23232a] hover:bg-[#23232a]/80 text-white font-semibold py-2 rounded-lg border border-[#23232a]">
							<span className="bg-white rounded-full p-1">
								<FaApple className="text-black text-lg" />
							</span>{" "}
							Sign up with Apple
						</button>
					</div>
					<div className="flex items-center gap-2 mb-4 md:mb-5">
						<div className="flex-1 h-px bg-[#23232a]" />
						<span className="text-xs text-gray-500">OR</span>
						<div className="flex-1 h-px bg-[#23232a]" />
					</div>
					<div className="flex gap-2 mb-5 md:mb-7">
						<button
							onClick={() => setTab("login")}
							className={`px-4 py-2 font-semibold rounded-lg transition-all ${
								tab === "login" ? "bg-[#23232a] text-white" : "text-gray-400"
							}`}>
							Login
						</button>
						<button
							onClick={() => setTab("signup")}
							className={`px-4 py-2 font-semibold rounded-lg transition-all ${
								tab === "signup" ? "bg-[#23232a] text-white" : "text-gray-400"
							}`}>
							Sign Up
						</button>
					</div>
					{/* Scrollable Form Area */}
					<div
						className={
							tab === "signup"
								? "overflow-y-auto max-h-[56vh] md:max-h-[320px] pr-1 custom-scrollbar"
								: ""
						}>
						{tab === "login" ? (
							<form onSubmit={handleLogin} className="space-y-4 md:space-y-5">
								<div>
									<input
										name="email"
										type="email"
										placeholder="Your email address"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
										value={form.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="relative">
									<input
										name="password"
										type={showPassword ? "text" : "password"}
										placeholder="Your password"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 pr-10"
										value={form.password}
										onChange={handleChange}
										required
									/>
									<button
										type="button"
										className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
										onClick={() => setShowPassword((v) => !v)}
										tabIndex={-1}>
										{showPassword ? <FiEyeOff /> : <FiEye />}
									</button>
									<a
										href="#"
										className="absolute right-12 top-1/2 -translate-y-1/2 text-xs text-purple-400 hover:underline">
										Forgot password?
									</a>
								</div>
								{error && <div className="text-red-500 text-sm">{error}</div>}
								<button
									type="submit"
									className="w-full bg-gradient-to-r from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800 text-white py-2 rounded-lg font-semibold mt-2 shadow-md disabled:opacity-60"
									disabled={!form.email || !form.password}>
									Log in
								</button>
							</form>
						) : (
							<form onSubmit={handleSignup} className="space-y-4 md:space-y-5">
								<div>
									<input
										name="labName"
										type="text"
										placeholder="Lab Name"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
										value={form.labName}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<input
										name="name"
										type="text"
										placeholder="Full Name"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
										value={form.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<input
										name="email"
										type="email"
										placeholder="Your email address"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
										value={form.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="relative">
									<input
										name="password"
										type={showPassword ? "text" : "password"}
										placeholder="Your password"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 pr-10"
										value={form.password}
										onChange={handleChange}
										required
									/>
									<button
										type="button"
										className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
										onClick={() => setShowPassword((v) => !v)}
										tabIndex={-1}>
										{showPassword ? <FiEyeOff /> : <FiEye />}
									</button>
								</div>
								<div>
									<select
										name="role"
										className="w-full bg-[#18181b] border border-[#23232a] rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
										value={form.role}
										onChange={handleChange}>
										<option value="staff">Staff</option>
										<option value="admin">Admin</option>
									</select>
								</div>
								{error && <div className="text-red-500 text-sm">{error}</div>}
								<button
									type="submit"
									className="w-full bg-gradient-to-r from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800 text-white py-2 rounded-lg font-semibold mt-2 shadow-md disabled:opacity-60"
									disabled={
										!form.labName || !form.email || !form.password || !form.name
									}>
									Sign Up
								</button>
							</form>
						)}
					</div>
					<div className="text-center text-xs text-gray-400 mt-6 md:mt-8">
						{tab === "login" ? (
							<span>
								Don&apos;t have an account?{" "}
								<button
									className="text-purple-400 hover:underline"
									onClick={() => setTab("signup")}>
									Sign up
								</button>
							</span>
						) : (
							<span>
								Already have an account?{" "}
								<button
									className="text-purple-400 hover:underline"
									onClick={() => setTab("login")}>
									Log in
								</button>
							</span>
						)}
					</div>
				</div>
				{/* Right: Branding/Visual */}
				<div className="hidden md:flex flex-col justify-center items-center flex-1 bg-gradient-to-br from-[#23232a] to-[#18181b] relative overflow-hidden">
					{/* Soft gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-violet-700/10 pointer-events-none" />
					{/* 3D Illustration Placeholder */}
					<div className="absolute inset-0 flex items-center justify-center opacity-60">
						<svg width="220" height="220" viewBox="0 0 320 320" fill="none">
							<ellipse
								cx="160"
								cy="220"
								rx="120"
								ry="40"
								fill="#a78bfa"
								fillOpacity="0.12"
							/>
							<rect
								x="80"
								y="60"
								width="160"
								height="160"
								rx="32"
								fill="#a78bfa"
								fillOpacity="0.18"
							/>
							<rect
								x="110"
								y="90"
								width="100"
								height="100"
								rx="20"
								fill="#a78bfa"
								fillOpacity="0.25"
							/>
							<text
								x="160"
								y="180"
								textAnchor="middle"
								fontSize="80"
								fill="#a78bfa"
								fillOpacity="0.18">
								Lab
							</text>
						</svg>
					</div>
					<div className="relative z-10 flex flex-col items-center justify-center w-full px-6">
						<div className="bg-[#23232a]/80 rounded-2xl shadow-lg p-6 flex flex-col items-center max-w-md mx-auto border border-purple-500/20 mb-4">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-violet-700 mb-3 shadow">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
									<circle
										cx="16"
										cy="16"
										r="16"
										fill="white"
										fillOpacity="0.08"
									/>
									<path
										d="M10 17l4 4 8-8"
										stroke="#a78bfa"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center drop-shadow-lg">
								Trusted by 500+ Labs Nationwide
							</h2>
							<p className="text-gray-300 text-center mb-2 text-base md:text-lg">
								Join a growing network of diagnostic labs already connected with
								Divith Labs. Register your lab today and experience seamless
								management, reporting, and growth opportunities.
							</p>
						</div>
						<button
							className="relative bg-gradient-to-r from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800 text-white px-7 py-2 rounded-full font-semibold text-base shadow-lg border-2 border-white/10 transition-all duration-200"
							onClick={() => setTab("signup")}>
							Register Your Lab
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthModal;

<style jsx>{`
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
		border-radius: 8px;
		background: #18181b;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #23232a;
		border-radius: 8px;
		border: 1.5px solid #18181b;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #2a2a2e;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: #18181b;
		border-radius: 8px;
	}
`}</style>;
