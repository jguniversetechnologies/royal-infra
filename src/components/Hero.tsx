import { motion } from "motion/react";
import { Link } from "react-router";
import { storyShort } from "../content/site";
import { ArrowRight, ArrowUpRight, BuildingIcon, ClockIcon, HandshakeIcon, ShieldIcon } from "./Icons";

const trustItems = [
  { label: "Quality construction", icon: BuildingIcon },
  { label: "On-time delivery", icon: ClockIcon },
  { label: "Safety focused", icon: ShieldIcon },
  { label: "Reliable partner", icon: HandshakeIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] bg-[#0B0C0D] pt-[74px]">
      <img src="/images/hero-construction.jpg" alt="Residential towers beside an active construction site" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,13,.97)_0%,rgba(11,12,13,.78)_46%,rgba(11,12,13,.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,12,13,1)_0%,transparent_42%)]" />

      <div className="relative mx-auto flex min-h-[610px] max-w-[1240px] items-center px-5 py-20 lg:px-8">
        <motion.div className="max-w-[760px]" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}>
          <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            Civil & industrial construction
          </motion.p>
          <motion.h1
            className="mt-5 max-w-[680px] font-serif text-[clamp(3.4rem,7vw,6.4rem)] leading-[0.88] tracking-[-0.045em] text-white"
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
          >
            Building trust.
            <br />
            <span className="text-[#E7BD63]">
              Delivering
              <br />
              excellence.
            </span>
          </motion.h1>
          <motion.p className="mt-7 max-w-[560px] text-sm leading-7 text-[#C7C5BF] sm:text-base" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            {storyShort}
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Link to="/contact" className="button-primary">
              Start a project <ArrowUpRight />
            </Link>
            <Link to="/services" className="button-outline">
              Our services <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-2 border-y border-white/10 bg-[#0B0C0D]/80 lg:grid-cols-4">
        {trustItems.map(({ label, icon: Icon }, index) => (
          <div key={label} className={`flex min-w-0 flex-col items-start gap-3 px-4 py-5 lg:flex-row lg:items-center lg:px-7 lg:py-6 ${index % 2 === 1 ? "border-l border-white/10" : ""} ${index > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
            <span className="grid size-9 shrink-0 place-items-center border border-[#C99A3D]/45 text-[#E7BD63] lg:size-10">
              <Icon />
            </span>
            <span className="max-w-full text-[10px] font-semibold uppercase leading-tight tracking-[0.06em] text-white/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
