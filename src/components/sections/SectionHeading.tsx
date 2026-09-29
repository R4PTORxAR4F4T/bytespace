export default function SectionHeading({ title, text, size = "lg" }: { title: string; text: string; size?: "lg" | "md" }) {
  return (
    <div className="mx-auto max-w-[917px] px-5 text-center">
      <h2 className={`font-heading font-semibold leading-[1.2] tracking-tight ${size === "lg" ? "mx-auto max-w-[588px] text-3xl md:text-[44px]" : "text-2xl md:text-4xl"}`}>{title}</h2>
      <p className="mt-6 text-base leading-relaxed text-muted">{text}</p>
    </div>
  );
}
