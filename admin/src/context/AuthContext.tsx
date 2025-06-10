import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
	name: string;
	email: string;
	role: "admin" | "staff";
};

type AuthContextType = {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	signup: (
		name: string,
		email: string,
		password: string,
		role: "admin" | "staff"
	) => Promise<boolean>;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const stored = localStorage.getItem("admin-user");
		if (stored) setUser(JSON.parse(stored));
	}, []);

	const login = async (email: string, password: string) => {
		// Dummy: Accept any email/password, set admin if email includes "admin"
		const role = email.includes("admin") ? "admin" : "staff";
		const fakeUser = { name: email.split("@")[0], email, role };
		setUser(fakeUser);
		localStorage.setItem("admin-user", JSON.stringify(fakeUser));
		return true;
	};

	const signup = async (
		name: string,
		email: string,
		password: string,
		role: "admin" | "staff"
	) => {
		// Dummy: Accept any signup
		const fakeUser = { name, email, role };
		setUser(fakeUser);
		localStorage.setItem("admin-user", JSON.stringify(fakeUser));
		return true;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("admin-user");
	};

	return (
		<AuthContext.Provider value={{ user, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
};
