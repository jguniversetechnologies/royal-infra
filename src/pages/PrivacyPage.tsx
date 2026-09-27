import { Link } from "react-router";
import { brand, phones } from "../content/site";

const sections = [
  {
    title: "Who this covers",
    body: `${brand.name} runs this website. This policy explains what we collect when you use the site or send an enquiry, and how that information is used.`,
  },
  {
    title: "What we collect",
    body: "The contact form asks for your name, company, phone number, project type, and a short brief. We do not ask for an email address. The site does not use advertising trackers.",
  },
  {
    title: "How we use it",
    body: "We use enquiry details only to understand the work and to reply by phone. We do not sell personal information, and we do not use it for unrelated marketing.",
  },
  {
    title: "Who else sees it",
    body: "Enquiry details stay with the Royal Infra office team that handles the job. We share them only if the law requires it, or with a contractor who needs them to price or carry out work you have asked us to do.",
  },
  {
    title: "How long we keep it",
    body: "We keep an enquiry for as long as we need it to respond, to prepare a quotation, or to meet a record we are required to hold. You can ask us to delete a message that is no longer needed.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be made through the contact page or by calling the office number listed on this website.",
  },
];

export default function PrivacyPage() {
  return (
    <article className="bg-[#F4EEE5] px-5 pb-24 pt-[120px] text-[#171717] lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-[760px]">
        <p className="eyebrow text-[#9B6C13]">Legal</p>
        <h1 className="section-title mt-4">Privacy policy</h1>
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
