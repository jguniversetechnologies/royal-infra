import { Link } from "react-router";
import { address, brand, credentials, phones, services } from "../content/site";
import { ArrowUpRight } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C0D]">
      <section className="bg-[#C99A3D] text-[#17130B]">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">Have a project in mind?</p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.03] tracking-[-0.03em] md:text-5xl">Planning your next construction project?</h2>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 bg-[#0B0C0D] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black">
            Request a quote <ArrowUpRight />
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-xs leading-6 text-white/45">
            {brand.legalName} — civil and industrial construction from Raigad, practiced since {brand.founded}.
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/30">GST {credentials[0].value}</p>
        </div>
        <div>
          <h3 className="footer-heading">Company</h3>
          <div className="footer-links">
            <Link to="/about">About us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/quality-safety">Quality & safety</Link>
            <Link to="/clients">Clients</Link>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Services</h3>
          <div className="footer-links">
            {services.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Contact</h3>
          <div className="footer-links normal-case">
            {phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.display}
              </a>
            ))}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            {address.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 border-t border-white/8 px-5 py-6 text-[9px] uppercase tracking-[0.13em] text-white/25 sm:flex-row lg:px-8">
        <span>
          © {new Date().getFullYear()} {brand.name} · {brand.legalName} All rights reserved.
        </span>
        <span>PAN {credentials[1].value}</span>
      </div>
    </footer>
  );
}
