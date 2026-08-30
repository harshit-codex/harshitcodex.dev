import { skills } from "@/lib/data/skills";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.category} className="rounded-lg border border-border bg-surface p-5">
          <h3 className="mb-3 font-mono text-sm font-medium text-accent">{group.category}</h3>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-mono text-xs sm:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
