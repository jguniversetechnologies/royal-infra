import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import { address, brand, people, phones, services } from "../content/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nProject type: ${data.get("type")}\n\nProject brief:\n${data.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what<br />you need to build.</>}
        description="Share the location, the scope and the stage of the job. The Raigad office will take it from there."
        image="/images/hero-construction.jpg"
      />
      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow text-[#9B6C13]">Raigad office</p>
            <h2 className="section-title mt-4">AIM Infracorp Pvt. Ltd.</h2>
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
              <a href={`mailto:${brand.email}`} className="block pt-2 text-sm text-[#7D570E]">
                {brand.email}
              </a>
              <p className="pt-2 text-xs uppercase tracking-[0.14em] text-black/40">{brand.website}</p>
            </div>
            <div className="mt-10 border-t border-black/10 pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Direct</p>
              <ul className="mt-4 space-y-3">
                {people
                  .filter((person) => person.href)
                  .map((person) => (
                    <li key={person.name} className="text-sm">
                      <span className="block text-black/80">{person.name}</span>
                      <span className="text-xs text-black/45">{person.role}</span>
                      <a href={person.href} className="mt-1 block text-[#7D570E]">
                        {person.phone}
                      </a>
                    </li>
                  ))}
              </ul>
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
            <label className="form-field">
              <span>Email *</span>
              <input required name="email" type="email" placeholder="you@company.com" autoComplete="email" />
            </label>
            <label className="form-field">
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91" autoComplete="tel" />
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
              {sent && <p className="text-xs text-[#7D570E]">Your email application should open, addressed to {brand.email}.</p>}
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
