import Link from "next/link";
import Logo from "../ui/Logo";
import { Cart } from "../ui/Icons";
import { navLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="mx-auto flex h-[120px] max-w-[1200px] items-center justify-between px-5">
        <Logo light />
        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {navLinks.map((l, i) => (
            <Link key={l.label} href={l.href} className={`text-base ${i === 0 ? "font-medium text-lime" : "text-white/90 hover:text-white"}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-base">
          <Link href="/login" className="hidden hover:underline sm:block">Sign In</Link>
          <Link href="/signup" className="font-medium hover:underline">Join Us</Link>
          <Cart />
        </div>
      </div>
    </header>
  );
}
