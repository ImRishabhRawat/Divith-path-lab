import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
// import AuthModal from "./components/AuthModal";

const AppContent: React.FC = () => {
	const { user } = useAuth();

	return (
		<div className="min-h-screen bg-gray-100">
			{/* {!user && (
				<>
					<div className="filter blur-sm pointer-events-none select-none">
						<Dashboard />
					</div>
					<AuthModal />
				</>
			)} */}
			{/* {user && <Dashboard />} */}
			<Dashboard/>
		</div>
	);
};
const App: React.FC = () => (
	<AuthProvider>
		<AppContent />
	</AuthProvider>
);

export default App;
