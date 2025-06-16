import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookTestPage from "./pages/BookTestPage";
import DoctorsPage from "./pages/DoctorsPage";
import BusinessPartnershipPage from "./pages/BusinessPartnershipPage";
import AboutUsPage from "./pages/AboutUsPage";
import CareerPage from "./pages/CareerPage";
import InvestorsPage from "./pages/InvestorsPage";
import BlogsPage from "./pages/BlogsPage";
import Layout from "./components/Layout";
import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/book-test" element={<BookTestPage />} />
					<Route path="/doctors" element={<DoctorsPage />} />
					<Route
						path="/business-partnership"
						element={<BusinessPartnershipPage />}
					/>
					<Route path="/about-us" element={<AboutUsPage />} />
					<Route path="/career" element={<CareerPage />} />
					<Route path="/investors" element={<InvestorsPage />} />
					<Route path="/blogs" element={<BlogsPage />} />
					<Route path="/login" element={<PatientLogin />} />
					<Route path="/register" element={<PatientRegister />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
