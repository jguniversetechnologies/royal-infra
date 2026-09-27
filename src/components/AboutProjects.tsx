import { Link } from "react-router";
import { equipment } from "../content/site";
import { ArrowUpRight } from "./Icons";

export default function AboutProjects() {
  return (
    <section id="about" className="border-t border-black/10 bg-[#F4EEE5] text-[#171717]">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-2">
        <div className="min-h-[480px] overflow-hidden">
          <img src="/images/quality-team.jpg" alt="Site engineer on a reinforced concrete deck" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-5 py-20 lg:px-16">
          <div>
            <p className="eyebrow text-[#9B6C13]">The company</p>
            <h2 className="section-title mt-4">
              Civil and industrial
              <br />
              construction.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-black/60">
              The scope is structural work, housing, industrial sheds, water systems, fire piping, and infrastructure — with owned plant ready to mobilize.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-[#9B6C13] pb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7D570E]">
              People and equipment <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <p className="eyebrow text-[#9B6C13]">Plant & equipment</p>
          <h2 className="section-title mt-4 max-w-xl">Owned machines, ready to mobilize.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((group) => (
              <div key={group.group}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-black/70">
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
  );
}
