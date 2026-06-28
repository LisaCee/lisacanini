import type { Project } from "../../data/projects";

interface RecordCardProps {
  project: Project;
}

export default function RecordCard({ project }: RecordCardProps) {
  return (
    <div className="group bg-surface-2 border border-accent/30 rounded-card p-6 hover:bg-surface hover:shadow-accent-glow transition-all flex flex-col h-full">
      <div>
        <div className="font-mono text-xs text-accent letter-spacing-wide mb-2">
           Rec. {String(project.recNo).padStart(2, "0")} — {project.dewey}
        </div>

        <h3 className="font-display text-xl font-semibold mb-2 text-paper ">
          {project.title}
        </h3>

        <p className="font-mono text-sm text-paper/60 group-hover:text-paper mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs border border-accent/30 text-teal px-2 py-0.5 rounded-card"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-accent/30 pt-3 flex gap-6 font-mono text-xs mt-auto">
        {project.viewUrl && (
          <a href={project.viewUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            View ↗
          </a>
        )}
        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          Source ↗
        </a>
      </div>
    </div>
  );
}