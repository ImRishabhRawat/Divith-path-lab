import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
	<div className="w-full max-w-[1680px] mx-auto min-h-screen ">
		<Navbar />
		<div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
			{children}
		</div>
		<Footer/>
	</div>
);

export default Layout;
