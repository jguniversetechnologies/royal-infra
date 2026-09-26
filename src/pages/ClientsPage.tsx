import { Link } from "react-router";
import { ArrowUpRight } from "../components/Icons";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { clients } from "../content/site";

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title={<>Clients who<br />come back.</>}
        description="Reliance Industries, Reliance Foundation, Finolex Cables, Aditya Birla and Extinct Fire Engineers are on the work-order record, along with residential and institutional jobs."
        image="/images/project-industrial.jpg"
      />

      <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-[#9B6C13]">Who has appointed us</p>
              <h2 className="section-title mt-4">The relationship is the work that follows the first order.</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-black/55">
              Reliance returns across Patalganga and Silvassa — maintenance, utilities, a warehouse, a conference hall, joinery and a guest house. Finolex, Birla and Extinct Fire Engineers sit beside that industrial work. The Aamby Valley villa shows the same team on a private house.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
            {clients.map((client) => (
              <article key={client.name} className="bg-[#F4EEE5] p-8 lg:p-12">
                <h2 className="font-serif text-4xl">{client.name}</h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-black/55">{client.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C99A3D] py-20 text-[#17130B]">
        <Reveal className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/50">Build with us</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl">If the scope is civil, industrial or a private house, start with the office.</h2>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 bg-[#0B0C0D] px-6 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-white">
            Start a conversation <ArrowUpRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
