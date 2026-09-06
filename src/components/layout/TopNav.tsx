import { Link, useLocation } from "react-router-dom";

const navItems = [
	{
		title: "Home",
		href: "/",
	},
	// {
	// 	title: "Projects",
	// 	href: "/projects",
	// },
	// {
	// 	title: "Contact",
	// 	href: "/contact",
	// },
];

/**
 * The site's top navigation
 *
 * @returns {ReactElement}
 */
export default function TopNav() {
	// const { pathname } = useLocation();

	return (
		<header className="text-paper border-b border-accent/30 pt-8 mx-auto w-full md:px-10 md:max-w-4xl">
			<div className="flex justify-center mx-auto">
				<Link
					to="/"
					className="text-3xl font-uppercase font-mono text-paper pb-5"
				>
					Lisa <span className="text-accent">Canini</span>
				</Link>
				{/* <div className="flex gap-6 font-mono text-sm tracking-widest uppercase">
					{navItems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className={`pb-1 border-b-2 transition-colors ${
								pathname === item.href
									? "text-accent border-b-accent-bold"
									: "text-paper/60 border-b-transparent hover:text-paper"
							}`}
						>
							{item.title}
						</Link>
					))}
				</div> */}
			</div>
		</header>
	);
}