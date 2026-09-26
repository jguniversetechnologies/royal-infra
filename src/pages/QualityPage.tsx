import { motion } from "motion/react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { ShieldIcon } from "../components/Icons";
import { qualityObjectives, qualityPolicy, safetyPolicy, safetyPractices } from "../content/site";

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & safety"
        title={<>Written down.<br />Practiced on site.</>}
        description="AIM Infracorp’s quality and safety policies, as the company states them — for industrial and building work."
        image="/images/service-safety.jpg"
      />

      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <p className="eyebrow text-[#9B6C13]">Quality policy</p>
            <h2 className="section-title mt-4">Client satisfaction, held to ISO 9001:2008.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm leading-7 text-black/70">{qualityPolicy}</p>
            <h3 className="mt-10 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B6C13]">Quality objectives</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {qualityObjectives.map((item, index) => (
                <li key={item} className="border border-black/10 bg-white p-5">
                  <span className="font-serif text-2xl text-[#9B6C13]">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-6">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#111315] py-24 lg:py-28">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <Reveal className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <ShieldIcon className="size-8 text-[#E7BD63]" />
              <h2 className="section-title mt-6 text-white">
                Safe practice,
                <br />
                before the hazard.
              </h2>
            </div>
            <p className="text-sm leading-7 text-white/60">{safetyPolicy}</p>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-4">
            {safetyPractices.map((text, index) => (
              <motion.article key={text} className="bg-[#111315] p-7" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <span className="text-[10px] text-[#E7BD63]">0{index + 1}</span>
                <p className="mt-8 text-sm leading-6 text-white/75">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
