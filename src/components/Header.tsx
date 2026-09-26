import { useState } from "react";
import { Link, NavLink } from "react-router";
import { nav, phones } from "../content/site";
import { ArrowUpRight, MenuIcon } from "./Icons";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0C0D]/92 backdrop-blur-md">
      <div className="relative mx-auto flex h-[74px] max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => `text-[11px] font-medium tracking-wide transition hover:text-[#E7BD63] ${isActive ? "text-[#E7BD63]" : "text-white/65"}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a href={phones[0].href} className="hidden text-[11px] tracking-wide text-white/70 transition hover:text-[#E7BD63] xl:inline">
            {phones[0].display}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C99A3D] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B0C0D] transition hover:bg-[#E7BD63]">
            Get a quote <ArrowUpRight />
          </Link>
        </div>

        <button className="menu-toggle absolute top-4 right-4" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0B0C0D] px-5 py-5 xl:hidden" aria-label="Mobile navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block border-b border-white/8 py-3 text-sm ${isActive ? "text-[#E7BD63]" : "text-white/75"}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a href={phones[0].href} className="mt-4 block text-sm text-[#E7BD63]">
            {phones[0].display}
          </a>
          <Link to="/contact" onClick={() => setOpen(false)} className="button-primary mt-4">
            Get a quote <ArrowUpRight />
          </Link>
        </nav>
      )}
    </header>
  );
}
