import { Outlet } from "react-router-dom"
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout() {
    return (
		<div className="min-h-screen bg-ink flex flex-col  gap-8">
			<TopNav />
			<main className="py-5 px-5 md:p-10 max-w-lg md:max-w-4xl mx-auto flex flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}