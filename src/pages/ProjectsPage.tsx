import { Link } from "react-router";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import { projects } from "../content/site";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>A register of<br />delivered work.</>}
        description="Industrial plants, a private villa, fire systems, a school, a warehouse and interior packages. Figures are from the company work-order record."
        image="/images/project-warehouse.jpg"
      />

      <section className="bg-[#0B0C0D] py-20 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mb-8 hidden grid-cols-[5rem_1.3fr_1fr_1.1fr] gap-6 border-b border-white/10 pb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 md:grid">
            <span>No.</span>
            <span>Project</span>
            <span>Client</span>
            <span>Value</span>
          </div>
          <div>
            {projects.map((project, index) => (
              <article key={project.title} className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-[5rem_1.3fr_1fr_1.1fr] md:gap-6 md:py-8">
                <p className="font-serif text-2xl text-[#E7BD63]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">{project.category}</p>
                  <h2 className="mt-2 font-serif text-2xl text-white md:text-[1.7rem]">{project.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/55 md:hidden">{project.scope}</p>
                </div>
                <div>
                  <p className="text-sm text-white/80">{project.client}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/35">{project.place}</p>
                  <p className="mt-3 hidden text-sm leading-6 text-white/50 md:block">{project.scope}</p>
                </div>
                <p className="text-sm leading-6 text-[#E7BD63]">{project.value || "Completed"}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4EEE5] py-20 text-[#171717]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow text-[#9B6C13]">Next contract</p>
            <h2 className="mt-3 font-serif text-4xl">Send the location, the scope and the stage you are at.</h2>
          </div>
          <Link to="/contact" className="button-primary">
            Start a conversation <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
