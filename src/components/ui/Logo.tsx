import Link from "next/link";
import { LogoMark } from "./Icons";

export default function Logo({
  light = false,
  showName = true,
}: {
  light?: boolean;
  showName?: boolean;
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="ByteSpace home"
    >
      <LogoMark />
      {showName && (
        <span
          className={`font-logo text-2xl font-bold ${light ? "text-white" : "text-ink"}`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
