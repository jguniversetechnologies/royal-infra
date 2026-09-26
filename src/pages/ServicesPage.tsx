import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { alsoDelivered, services } from "../content/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>The work we<br />are set up to do.</>}
        description="Civil and structural packages, villas, industrial sheds, water systems, fire piping and road development — with the people and plant to mobilize."
        image="/images/hero-construction.jpg"
      />

      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <Reveal className="mb-14 grid gap-6 lg:grid-cols-2">
            <h2 className="section-title">Grouped the way the company actually works.</h2>
            <p className="max-w-lg text-sm leading-7 text-black/55">Each scope below is taken from AIM Infracorp’s own service list. Interior fit-out, electrical work and rainwater harvesting sit alongside them, because those jobs are already in the project record.</p>
          </Reveal>
          <div className="space-y-5">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                id={service.id}
                className="group grid scroll-mt-24 overflow-hidden bg-[#0B0C0D] text-white md:grid-cols-[0.8fr_1.2fr]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: Math.min(index * 0.04, 0.16) }}
              >
                <div className="h-64 overflow-hidden md:h-auto md:min-h-[280px]">
                  <img src={service.image} alt={service.imageAlt} className={`h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 ${"frame" in service ? service.frame : ""}`} />
                </div>
                <div className="p-7 md:p-10 lg:p-12">
                  <span className="text-[10px] tracking-[0.18em] text-[#E7BD63]">{service.number}</span>
                  <h2 className="mt-5 font-serif text-4xl">{service.title}</h2>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">{service.intro}</p>
                  <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xs text-white/70">
                        <span className="size-1 shrink-0 bg-[#E7BD63]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 border border-black/10 bg-white p-7 md:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">Also delivered</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {alsoDelivered.map((item) => (
                <li key={item} className="text-sm text-black/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#C99A3D] py-16 text-[#17130B]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl">A scope that crosses more than one trade?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0B0C0D] px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-white">
            Talk to our team <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
