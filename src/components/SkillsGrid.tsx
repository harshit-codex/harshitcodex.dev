import { skills } from "@/lib/data/skills";

export function SkillsGrid() {
  return (
    <ul className="space-y-4 rounded-lg border border-border bg-surface p-6">
      {skills.map((group) => (
        <li key={group.category} className="flex gap-3 text-sm leading-relaxed sm:text-base">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <p>
            <span className="font-mono font-medium text-accent">{group.category}: </span>
            <span className="text-foreground/85">{group.items.join(", ")}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
