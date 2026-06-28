export default function CatalogHero() {
	return (
		<div>
			<div className="absolute -top-3 right-4 md:right-0 md:-top-3.5 bg-accent-bold text-paper font-mono text-xs uppercase letter-spacing-wider px-2.5 py-1 transform -rotate-1.5">
				Front end
			</div>

			<div className="flex gap-8 mb-7 font-mono text-sm text-paper/60">
				<div>
					<div className="text-xs uppercase letter-spacing-wide text-teal mb-1">
						Call no.
					</div>
					<div className="text-paper">005.1</div>
				</div>
				<div>
					<div className="text-xs uppercase letter-spacing-wide text-teal mb-1">
						Author
					</div>
					<div className="text-paper">Canini, Lisa</div>
				</div>
				<div>
					<div className="text-xs uppercase letter-spacing-wide text-teal mb-1">
						Location
					</div>
					<div className="text-paper">Auburn, WA</div>
				</div>
			</div>

			<h1 className="font-display text-5xl md:text-6xl font-bold mb-2 text-paper">
				Lisa Cee
			</h1>

			<p className="font-mono text-sm text-accent mb-6">
				Frontend Dngineer
			</p>

			<p className="text-base text-paper/60 max-w-xl mb-7 leading-relaxed">
				I spent years helping library patrons find what they needed,
				then realized organizing complex information so anyone can use
				it is exactly what drew me to the front end. I build interfaces
				with React and TypeScript, with an eye for accessibility and a
				soft spot for well-made systems.
			</p>

			<div className="flex flex-wrap gap-2 mb-7">
				{[
					"React",
					"TypeScript",
					"Tailwind CSS",
					"Accessibility",
					"Component Architecture",
				].map((skill) => (
					<span
						key={skill}
						className="font-mono text-xs border border-accent/30 text-teal px-2 py-1 rounded-card"
					>
						{skill}
					</span>
				))}
			</div>

			<div className="border-t border-accent/30 pt-5 flex justify-between font-mono text-xs text-paper/60">
				<div>
					Status:{" "}
					<span className="text-teal">Perpetually learning</span>
				</div>
				<div>Catalogued 2026</div>
			</div>
		</div>
	);
}
