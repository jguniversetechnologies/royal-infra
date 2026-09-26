import { Link } from "react-router";
import { clients } from "../content/site";
import { ArrowUpRight } from "./Icons";

export default function Clients() {
  return (
    <section id="clients" className="bg-[#0B0C0D] py-24 text-white lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Clients</p>
            <h2 className="section-title mt-4 max-w-xl">Names already on the work orders.</h2>
          </div>
          <Link to="/clients" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E7BD63]">
            Client relationships <ArrowUpRight />
          </Link>
        </div>
        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <article key={client.name} className="bg-[#0B0C0D] p-7 lg:min-h-44">
              <h3 className="font-serif text-3xl text-white">{client.name}</h3>
              <p className="mt-3 text-xs leading-5 text-white/45">{client.scope}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
