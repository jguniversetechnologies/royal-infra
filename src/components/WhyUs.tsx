import { whyUs } from "../content/site";

export default function WhyUs() {
  return (
    <section className="bg-[#F4EEE5] py-24 text-[#171717] lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-[#9B6C13]">Why Royal Infra</p>
          <h2 className="section-title mt-4">Plant, people, and a clean statutory record.</h2>
        </div>
        <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <article key={item.title} className="bg-[#F4EEE5] p-7 lg:p-8">
              <span className="text-[10px] tracking-[0.16em] text-[#9B6C13]">0{index + 1}</span>
              <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
