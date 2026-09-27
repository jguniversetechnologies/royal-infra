import { Link } from "react-router";
import { brand, phones } from "../content/site";

const sections = [
  {
    title: "Using this website",
    body: `This website is published by ${brand.name}. By using it, you agree to these terms. If you do not agree, please leave the site.`,
  },
  {
    title: "What the pages describe",
    body: "Service descriptions on this site explain the kind of work Royal Infra undertakes. They are not a quotation, a programme, or a contract. A job starts only when both sides agree the scope, price, and terms in writing.",
  },
  {
    title: "Enquiries",
    body: "Sending the contact form asks us to consider the work. It does not reserve a date, a crew, or a price. We may decline an enquiry.",
  },
  {
    title: "Site content",
    body: "Text, layout, and the Royal Infra name on this site belong to Royal Infra. You may not copy them for another business. Project and client pages may be empty until we publish that material.",
  },
  {
    title: "Liability",
    body: "We take care to keep the site accurate. It is general information, not engineering advice for a particular site. Royal Infra is not liable for a decision made only from these pages, before a written agreement.",
  },
  {
    title: "Changes and law",
    body: "We may update these terms by publishing a new version on this page. They are governed by the laws of India.",
  },
];

export default function TermsPage() {
  return (
    <article className="bg-[#F4EEE5] px-5 pb-24 pt-[120px] text-[#171717] lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-[760px]">
        <p className="eyebrow text-[#9B6C13]">Legal</p>
        <h1 className="section-title mt-4">Terms & conditions</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-black/40">Last updated 27 September 2026</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-black/65">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 border-t border-black/10 pt-6 text-sm text-black/55">
          Office phone:{" "}
          <a href={phones[0].href} className="text-[#7D570E]">
            {phones[0].display}
          </a>
          . Or use the{" "}
          <Link to="/contact" className="text-[#7D570E]">
            contact page
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
