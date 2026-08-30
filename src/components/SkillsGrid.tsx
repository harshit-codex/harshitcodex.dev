import { skills } from "@/lib/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
          <h3 className="mb-3 font-mono text-sm font-medium text-accent">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-foreground/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
