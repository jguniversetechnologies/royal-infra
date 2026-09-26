import { Link } from "react-router";
import { qualityPolicy, stats } from "../content/site";
import { ArrowUpRight, ShieldIcon } from "./Icons";

const points = [
  ["Agreed terms", "Work is delivered to the terms agreed with the client."],
  ["ISO 9001:2008", "Consistent quality, in line with the stated quality policy."],
  ["Prevention first", "Training, teamwork and checks that catch issues before they travel."],
];

export default function Quality() {
  return (
    <section id="quality" className="bg-[#111315]">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-2">
        <div className="px-5 py-24 lg:px-8 lg:py-28">
          <p className="eyebrow">Quality & safety</p>
          <h2 className="section-title mt-4 max-w-md text-white">
            The standard,
            <br />
            in writing.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#C7C5BF]">{qualityPolicy}</p>
          <div className="mt-10 max-w-lg">
            {points.map(([title, body]) => (
              <div key={title} className="flex gap-4 border-t border-white/10 py-5">
                <ShieldIcon className="mt-0.5 size-5 shrink-0 text-[#E7BD63]" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/45">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/quality-safety" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E7BD63]">
            Quality and safety policies <ArrowUpRight />
          </Link>
        </div>
        <div className="min-h-[520px]">
          <img src="/images/service-safety.jpg" alt="Supervisors in helmets and high-visibility vests on site" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="bg-[#C99A3D] text-[#17130B]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`py-9 lg:px-8 ${index % 2 !== 0 ? "border-l border-black/15 pl-6" : ""} ${index > 1 ? "border-t border-black/15 lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-black/15" : ""}`}>
              <strong className="block font-serif text-4xl lg:text-5xl">{stat.value}</strong>
              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-black/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
