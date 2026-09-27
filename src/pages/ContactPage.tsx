import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import { address, phones, services } from "../content/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what<br />you need to build.</>}
        description="Share the location, the scope and the stage of the job. The office will take it from there."
        image="/images/hero-construction.jpg"
      />
      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow text-[#9B6C13]">Office</p>
            <h2 className="section-title mt-4">Royal Infra</h2>
            <address className="mt-6 text-sm leading-7 text-black/65 not-italic">
              {address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-8 space-y-2">
              {phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="block text-sm font-medium hover:text-[#7D570E]">
                  {phone.display}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="grid gap-6 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,.08)] sm:grid-cols-2 lg:p-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <label className="form-field">
              <span>Your name *</span>
              <input required name="name" placeholder="Full name" autoComplete="name" />
            </label>
            <label className="form-field">
              <span>Company</span>
              <input name="company" placeholder="Organization" autoComplete="organization" />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Phone *</span>
              <input required name="phone" type="tel" placeholder="+91" autoComplete="tel" />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Project type</span>
              <select name="type">
                {services.map((service) => (
                  <option key={service.id}>{service.title}</option>
                ))}
                <option>Interior or renovation</option>
              </select>
            </label>
            <label className="form-field sm:col-span-2">
              <span>Project brief *</span>
              <textarea required name="message" rows={6} placeholder="Location, scope, timeline and anything the site team should know." />
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button className="button-primary" type="submit">
                Send to the office <ArrowUpRight />
              </button>
              {sent && <p className="text-xs text-[#7D570E]">Noted. Call the Royal Infra office number to follow up.</p>}
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
