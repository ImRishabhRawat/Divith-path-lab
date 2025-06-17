// import BookingHelpCTA from "../components/BookingHelpCTA";
// import BookLabTests from "../components/BookLabTests";
// import BookTestSection from "../components/BookTestSection";
// import DownloadAppSection from "../components/DownloadAppSection";
import FAQSection from "../components/FAQSection";
import FeatureSection from "../components/FeatureSection";
// import FindTestByHealthConcern from "../components/FindTestByHealthConcern";
import Hero from "../components/Hero";
// import PartnersSection from "../components/PartnersSection";
import Testimonials from "../components/Testimonials";
// import WhyChooseUs from "../components/WhyChooseUs";
// import WhyDivitlPathLabs from "../components/WhyDivitlPathLabs";

const HomePage = () => {
	return (
		<>
			<div className="w-full min-h-screen font-sans">
				<Hero />
				<FeatureSection />
				{/* <BookTestSection/>*/}
				{/* <FindTestByHealthConcern /> */}
				{/* <BookLabTests /> */}
				{/* <BookingHelpCTA/> */}
				<Testimonials />
				{/* <WhyChooseUs/> */}
				{/* <PartnersSection /> */}
				<FAQSection/>
				{/* <DownloadAppSection/> */}
			</div>
		</>
	);
};

export default HomePage;
