import type { ReactNode } from 'react'

export function ProjectSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      aria-labelledby={`section-${number}`}
      className="flex flex-col gap-3 border-t border-border py-10 md:flex-row md:gap-12"
    >
      <div className="flex shrink-0 items-baseline gap-3 md:w-56">
        <span className="font-mono text-sm text-highlight">{number}</span>
        <h2 id={`section-${number}`} className="text-sm font-semibold uppercase tracking-widest text-foreground">
          {title}
        </h2>
      </div>
      <div className="flex-1 text-lg leading-relaxed text-foreground text-pretty">{children}</div>
    </section>
  )
}

export function Placeholder({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-md border border-dashed border-primary/50 bg-primary/5 px-3 py-1 font-mono text-sm text-primary">
      {`[${label}]`}
    </span>
  )
}
