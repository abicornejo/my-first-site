import { ArrowUpRight } from 'lucide-react'
import { Placeholder, ProjectSection } from '@/components/project-section'
import { project } from '@/lib/project'

export default function Page() {
  const { name, whatItIs, whyItMatters, link, makers } = project

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16 md:py-24">
      <header className="flex flex-col gap-6 pb-14">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="h-2 w-16 rounded-full bg-primary" />
          <div className="h-2 w-8 rounded-full bg-highlight" />
        </div>
        <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Project</p>
        <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-8xl">enjoy your self</h1>
      </header>

      <ProjectSection number="01" title="What it is">
        {whatItIs ? <p>{whatItIs}</p> : <Placeholder label="two or three lines in plain words" />}
      </ProjectSection>

      <ProjectSection number="02" title="Why it matters">
        {whyItMatters ? <p>{whyItMatters}</p> : <Placeholder label="one line" />}
      </ProjectSection>

      <ProjectSection number="03" title="See it">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View the project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <Placeholder label="link" />
        )}
      </ProjectSection>

      <ProjectSection number="04" title="Made by">
        {makers.length > 0 ? (
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {makers.map((maker) => (
              <li key={maker}>{maker}</li>
            ))}
          </ul>
        ) : (
          <Placeholder label="names" />
        )}
      </ProjectSection>

      <footer className="mt-auto border-t border-border pt-8 text-sm text-muted-foreground">{name}</footer>
    </main>
  )
}
