import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Royal Infra home">
      <span className="grid size-10 shrink-0 place-items-center bg-[#C99A3D] font-serif text-[15px] leading-none text-[#0B0C0D]">RI</span>
      <strong className="text-[13px] font-semibold tracking-[0.2em] text-white">ROYAL INFRA</strong>
    </Link>
  );
}
