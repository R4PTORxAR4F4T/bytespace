import { partnerLogos } from "@/lib/data";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-16 md:py-20" aria-label="Partners">
      <div className="mx-auto flex max-w-[1132px] flex-wrap items-center justify-center gap-x-16 gap-y-6 px-5 md:justify-between">
        {partnerLogos.map((n, i) => (
          <div className="flex items-center gap-2" key={i}>
            <img src={n} alt="" />
            <p key={i} className="flex items-center gap-2 font-heading text-xl font-semibold text-gray-400">
              Logoipsum
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
