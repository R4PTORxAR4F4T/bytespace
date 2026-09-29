import Img from "../ui/Img";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Bottom-left lavender glow */}
        <div className="absolute -bottom-20 -left-40 h-[550px] w-[550px] rounded-full bg-[#b9c8ff] blur-[130px]" />

        {/* Top-center lime glow */}
        <div className="absolute right-[30%] -top-20 h-[400px] w-[400px] rounded-full bg-[#d7ff72] blur-[120px]" />

        {/* right-center lime glow */}
        <div className="absolute -right-10 bottom-[20%] h-[400px] w-[400px] rounded-full bg-[#d7ff72]/40 blur-[120px] " />
      </div>

      <div className="relative mx-auto max-w-[1204px] px-5">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="max-w-[577px] font-heading text-3xl font-semibold leading-[1.2] tracking-tight md:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-relaxed text-muted">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                <Img
                  src={t.img}
                  alt={t.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-6">
                <p className="font-heading text-xl font-semibold">{t.name}</p>
                <p className="text-lg text-primary">{t.role}</p>
              </figcaption>
              <blockquote className="mt-6 text-base leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
