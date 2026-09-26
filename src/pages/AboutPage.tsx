import { Link } from "react-router";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { bankers, brand, credentials, equipment, mission, orgLevels, people, story, timeline, workforce } from "../content/site";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Royal Infra"
        title={<>Twenty years.<br />One practice.</>}
        description="AIM Infracorp Pvt. Ltd. is the company behind Royal Infra. The directors, the trade and the standard of work carry forward from 2004."
        image="/images/quality-team.jpg"
      />

      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <Reveal>
            <p className="eyebrow text-[#9B6C13]">Our story</p>
            <h2 className="section-title mt-4">From a proprietary firm to a private limited company.</h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-sm leading-7 text-black/65">
            {story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-px bg-black/10 sm:grid-cols-3">
          {timeline.map((item) => (
            <article key={item.year} className="bg-[#F4EEE5] p-6 lg:p-8">
              <p className="font-serif text-4xl text-[#9B6C13]">{item.year}</p>
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111315] py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 text-center lg:px-8">
          <Reveal>
            <p className="eyebrow">Mission</p>
            <blockquote className="mt-6 font-serif text-[clamp(1.8rem,4vw,3.1rem)] leading-[1.2] tracking-[-0.03em] text-white">{mission}</blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow text-[#9B6C13]">People</p>
            <h2 className="section-title mt-4 max-w-xl">The names on the company.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person) => (
              <article key={person.name} className="bg-[#F4EEE5] p-6 lg:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">{person.role}</p>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{person.name}</h3>
                {person.href ? (
                  <a href={person.href} className="mt-4 inline-block text-sm text-black/60 hover:text-[#7D570E]">
                    {person.phone}
                  </a>
                ) : (
                  person.phone && <p className="mt-4 text-sm text-black/45">{person.phone}</p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">How the company is structured</h3>
            <ol className="mt-6 grid gap-4 md:grid-cols-5">
              {orgLevels.map((level, index) => (
                <li key={level.level} className="border-t border-black/15 pt-4">
                  <span className="text-[10px] text-black/35">0{index + 1}</span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em]">{level.level}</p>
                  <p className="mt-2 text-sm leading-6 text-black/55">{level.roles.join(" · ")}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#171717] lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow text-[#9B6C13]">Workforce</p>
            <h2 className="section-title mt-4">About 124 people, from office to site.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-black/55">Engineers, safety officers, supervisors and skilled trades. Role counts below are as recorded in the company profile.</p>
            <ul className="mt-8">
              {workforce.map(([role, count]) => (
                <li key={role} className="flex items-center justify-between border-b border-black/10 py-3 text-sm">
                  <span>{role}</span>
                  <span className="font-serif text-lg text-[#9B6C13]">{count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[#9B6C13]">Plant & equipment</p>
            <h2 className="section-title mt-4">Owned machines, ready to mobilize.</h2>
            <div className="mt-8 space-y-8">
              {equipment.map((group) => (
                <div key={group.group}>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">{group.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="border border-black/10 px-3 py-2 text-xs text-black/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111315] py-20">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <p className="eyebrow">Registrations</p>
          <h2 className="mt-4 font-serif text-4xl text-white">On the statutory record.</h2>
          <dl className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((item) => (
              <div key={item.label} className="bg-[#111315] p-6">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E7BD63]">{item.label}</dt>
                <dd className="mt-3 font-serif text-xl text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-white/45">Bankers: {bankers.join(" · ")}</p>
          <p className="mt-2 text-sm text-white/35">
            {brand.legalName} · Private limited · Year of establishment as a private entity: {brand.incorporated}
          </p>
        </div>
      </section>

      <section className="bg-[#F4EEE5] py-20 text-[#171717]">
        <Reveal className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">Talk to the people who will run the job.</h2>
          <Link to="/contact" className="button-primary">
            Contact the office <ArrowUpRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
