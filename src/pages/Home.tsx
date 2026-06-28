import Card from "@/components/Card";
import CatalogHero from "@/components/sections/CatalogHero";
import RecordCard from "@/components/records/RecordCard";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";

export default function Home() {
	const featuredProjects: Project[] = projects.filter((p) => p.featured);

	return (
		<div className="space-y-12">
			<Card
				hasTopBorder
				className="p-10 md:p-12 relative hover:bg-surface hover:shadow-accent-glow transition-all"
			>
				<CatalogHero />
			</Card>

			<div>
				<h2 className="font-mono text-xs uppercase letter-spacing-wider text-teal mb-4">
					Selected records
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{featuredProjects.map((project) => (
						<RecordCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
