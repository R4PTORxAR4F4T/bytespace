import SectionHeading from "./SectionHeading";
import { categories } from "@/lib/data";

const glyph: Record<string, string> = {
  Design: "M4 20l4-1 10-10-3-3L5 16l-1 4Zm11-13 3 3",
  Development: "M9 8l-4 4 4 4M15 8l4 4-4 4",
  "IT & Software": "M5 5h14v10H5zM9 19h6M12 15v4",
  Business: "M4 8h16v11H4zM9 8V5h6v3",
  Marketing: "M4 13v-2l12-5v12L4 13Zm12-4a3 3 0 0 1 0 6",
  Photography: "M4 8h4l2-3h4l2 3h4v11H4zM12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
};

export default function Categories() {
  return (
    <section className="bg-white pb-24">
      <SectionHeading size="md" title="Explore Diverse Learning Paths at Bytespace"
        text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories." />
      <ul className="mx-auto mt-12 grid max-w-[1202px] grid-cols-2 justify-items-center gap-6 px-5 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <li key={c}>
            <a href="#courses" className="flex h-[167px] w-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white transition hover:border-primary">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-lime">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={glyph[c]} /></svg>
              </span>
              <span className="font-heading text-base font-medium">{c}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
