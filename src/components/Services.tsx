import { Link } from "react-router";
import { services } from "../content/site";
import { ArrowUpRight } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#9B6C13]">What we build</p>
            <h2 className="section-title mt-4 max-w-[680px]">Six scopes. One accountable team.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/55">Civil and structural work, villas, industrial sheds, piping, fire systems and roads — mobilized from Raigad.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.id} to={`/services#${service.id}`} className="group relative min-h-[340px] overflow-hidden bg-[#0B0C0D]">
              <img src={service.image} alt={service.imageAlt} className={`absolute inset-0 h-full w-full object-cover opacity-55 saturate-[.75] transition duration-700 group-hover:scale-105 group-hover:opacity-70 ${"frame" in service ? service.frame : ""}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="text-[10px] tracking-[0.18em] text-[#E7BD63]">{service.number}</span>
                  <ArrowUpRight className="size-5 text-[#E7BD63]" />
                </div>
                <h3 className="font-serif text-[26px] leading-tight text-white">{service.title}</h3>
                <p className="mt-2 max-w-[300px] text-xs leading-5 text-white/60">{service.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
