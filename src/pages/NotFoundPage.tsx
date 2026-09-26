import { Link } from "react-router";
import { ArrowUpRight } from "../components/Icons";

export default function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-[#0B0C0D] px-5 pt-[74px] text-center">
      <div><p className="eyebrow">404</p><h1 className="mt-5 font-serif text-6xl text-white">Page not found.</h1><p className="mt-5 text-sm text-white/45">That page is not part of the Royal Infra site.</p><Link to="/" className="button-primary mt-8">Return home <ArrowUpRight /></Link></div>
    </section>
  );
}
