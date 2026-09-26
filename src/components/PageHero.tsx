import { motion } from "motion/react";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden pt-[74px]">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,13,.95),rgba(11,12,13,.58)_62%,rgba(11,12,13,.25))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0D] via-transparent to-[#0B0C0D]/30" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 pb-20 lg:px-8 lg:pb-24">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl font-serif text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.045em] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-sm leading-7 text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
