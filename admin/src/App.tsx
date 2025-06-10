import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";

const AppContent: React.FC = () => {
	// const { user } = useAuth();

	return (
		<div className="min-h-screen bg-gray-100">
			{/*
			{!user && (
				<>
					<div className="filter blur-sm pointer-events-none select-none">
						<Dashboard />
					</div>
					<AuthModal />
				</>
			)}
			{user && <Dashboard />}
			*/}
			{/* Bypassing login/signup for development: Always show Dashboard */}
			<Dashboard />
		</div>
	);
};
const App: React.FC = () => (
	<AuthProvider>
		<AppContent />
	</AuthProvider>
);

export default App;
