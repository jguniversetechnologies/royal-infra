import { Link } from "react-router";
import { projects, timeline } from "../content/site";
import { ArrowUpRight } from "./Icons";

const featured = projects.slice(0, 4);

export default function AboutProjects() {
  return (
    <>
      <section id="about" className="border-t border-black/10 bg-[#F4EEE5] text-[#171717]">
        <div className="mx-auto grid max-w-[1240px] lg:grid-cols-2">
          <div className="min-h-[480px] overflow-hidden">
            <img src="/images/quality-team.jpg" alt="Site engineer on a reinforced concrete deck" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center px-5 py-20 lg:px-16">
            <div>
              <p className="eyebrow text-[#9B6C13]">The company</p>
              <h2 className="section-title mt-4">
                The same practice.
                <br />
                A clearer company.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-black/60">
                Royal Infra is the public name of AIM Infracorp Pvt. Ltd. The work began in 2004 as M/S Aim Construction, continued from 2013 as M/S Aim Corporation, and became a private limited company in 2020 — same directors, same construction business.
              </p>
              <ol className="mt-8 space-y-4 border-t border-black/10 pt-6">
                {timeline.map((item) => (
                  <li key={item.year} className="grid grid-cols-[4.5rem_1fr] gap-4">
                    <span className="font-serif text-xl text-[#9B6C13]">{item.year}</span>
                    <span>
                      <strong className="block text-sm text-[#171717]">{item.title}</strong>
                      <span className="mt-1 block text-xs leading-5 text-black/50">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-[#9B6C13] pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7D570E]">
                Read the company story <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0B0C0D] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mt-4 text-white">Contracts that can be named.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">Industrial maintenance, a private villa, fire piping and civil packages for clients who return. Values below are taken from the company work-order record.</p>
            <div className="mt-8 hidden overflow-hidden lg:block">
              <img src="/images/project-warehouse.jpg" alt="Industrial building facade" className="h-[420px] w-full object-cover" />
            </div>
          </div>
          <div>
            {featured.map((project, index) => (
              <article key={project.title} className="border-t border-white/10 py-6 last:border-b">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#E7BD63]">
                    0{index + 1} · {project.category}
                  </p>
                  <ArrowUpRight className="size-4 shrink-0 text-[#E7BD63]" />
                </div>
                <h3 className="mt-3 font-serif text-3xl text-white">{project.title}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/40">
                  {project.client} · {project.place}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">{project.scope}</p>
                {project.value && <p className="mt-3 text-xs font-semibold tracking-wide text-[#E7BD63]">{project.value}</p>}
              </article>
            ))}
            <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E7BD63]">
              Full project register <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
