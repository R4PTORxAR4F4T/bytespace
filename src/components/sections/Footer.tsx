import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { footerColumns } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pt-[70px]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid gap-12 lg:grid-cols-[528px_1fr]">
          <div>
            <Logo />
            <p className="mt-4 text-base text-muted">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="mt-10 flex max-w-[504px] items-center gap-6">
              <input type="email" required placeholder="Enter your email" aria-label="Email address"
                className="h-[52px] flex-1 rounded-full border border-gray-100 px-6 text-lg outline-none focus:border-primary" />
              <Button type="submit" className="h-[46px]">Subscribe</Button>
            </form>
            <p className="mt-5 max-w-[504px] text-sm text-gray-400">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerColumns.map((col, i) => (
              <div key={i} className={col.title ? "" : "sm:pt-12"}>
                {col.title && <h3 className="mb-6 font-heading text-base font-medium">{col.title}</h3>}
                <ul className="flex flex-col gap-4">
                  {col.links.map((l) => <li key={l}><Link href="#" className="text-base text-muted hover:text-primary">{l}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-gray-100 py-6 text-sm text-muted sm:flex-row">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></div>
        </div>
      </div>
    </footer>
  );
}
