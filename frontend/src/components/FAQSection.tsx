import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
	{
		q: "How do I start online consultation with doctors on Medicare?",
		a: "To start an online consultation, simply sign up or log in, choose your doctor, and follow the on-screen instructions to begin your session.",
	},
	{
		q: "Are your online doctors qualified?",
		a: "Yes, all our online doctors are fully qualified and certified in their respective fields.",
	},
	{
		q: "Is online doctor consultation safe and secured on Medicare?",
		a: "Absolutely. We use secure technology to protect your privacy and all consultations are confidential.",
	},
	{
		q: "What happens if I don't get a response from a doctor?",
		a: "If you do not get a response, you can contact our support team for assistance or choose another available doctor.",
	},
	{
		q: "What is the online doctor consultations?",
		a: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.",
	},
	{
		q: "Can I do a free online doctor consultation on Medicare?",
		a: "Some consultations may be free depending on your plan or promotional offers. Please check our website for current details.",
	},
];

const FAQSection = () => {
	const [open, setOpen] = useState<number | null>(null);

	return (
		<section className="w-full mx-auto py-12  my-12">
			<h2 className="text-3xl md:text-3xl font-extrabold text-[#1a1a1a] text-center mb-8">
				Got questions?
			</h2>
			<div className="flex flex-col gap-4">
				{faqs.map((faq, idx) => {
					const isOpen = open === idx;
					return (
						<div
							key={faq.q}
							className={`rounded-2xl transition-all duration-200 overflow-hidden shadow-sm border border-transparent ${
								isOpen ? "bg-[#e0f7fa]" : "bg-white"
							}`}>
							<button
								className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
								onClick={() => setOpen(isOpen ? null : idx)}>
								<span
									className={`font-semibold text-base md:text-lg text-[#1a1a1a] ${
										isOpen ? "" : ""
									}`}>
									{faq.q}
								</span>
								<FiChevronDown
									className={`ml-2 text-2xl transition-transform duration-200 ${
										isOpen ? "rotate-180" : "rotate-0"
									}`}
								/>
							</button>
							{isOpen && (
								<div className="px-6 pb-5 text-sm text-[#2d3748] animate-fade-in">
									{faq.a}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default FAQSection;
