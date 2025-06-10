import BookLabTests from "../components/BookLabTests";
import BookTestSection from "../components/BookTestSection";
import FindTestByHealthConcern from "../components/FindTestByHealthConcern";
import FeatureSection from "../components/FeatureSection";

const BookTestPage = () => {
	return (
		<div className="w-full min-h-screen font-sans py-8">
			<div className="bg-[#e0f7fa] rounded-3xl p-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6">
					Book Your Lab Tests
				</h1>
				<p className="text-lg text-[#2d3748] max-w-2xl">
					Choose from our wide range of diagnostic tests and health checkup
					packages. Book online and get samples collected from your home.
				</p>
			</div>
			<BookTestSection />
			<FindTestByHealthConcern />
			<BookLabTests />
			<FeatureSection />
		</div>
	);
};

export default BookTestPage;
