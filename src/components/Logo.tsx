import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Royal Infra, AIM Infracorp home">
      <span className="grid size-10 shrink-0 place-items-center bg-[#C99A3D] font-serif text-[15px] leading-none text-[#0B0C0D]">RI</span>
      <span>
        <strong className="block text-[13px] font-semibold tracking-[0.2em] text-white">ROYAL INFRA</strong>
        <span className="block text-[8px] uppercase tracking-[0.18em] text-white/45">AIM Infracorp Pvt. Ltd.</span>
      </span>
    </Link>
  );
}
