import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string; variant?: "lime" | "ghost"; className?: string; children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ href, variant = "lime", className, children, ...rest }: Props) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-lg font-medium text-ink transition hover:brightness-95 active:scale-[0.98]",
    variant === "lime" ? "bg-lime" : "border border-gray-200 bg-white",
    className,
  );
  return href ? <Link href={href} className={cls}>{children}</Link> : <button className={cls} {...rest}>{children}</button>;
}
