import Img from "../ui/Img";
import AvatarStack from "../ui/AvatarStack";
import { CheckCircle } from "../ui/Icons";
import { creatorPerks, stats } from "@/lib/data";

const Panel = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`absolute rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur ${className}`}
  >
    {children}
  </div>
);

export default function Growth() {
  return (
    <section
      id="creators"
      className="relative isolate overflow-hidden bg-[#fafbff] py-24"
    >
      {/* Background Color Spots */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-left lime green glow */}
        <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#dfff70]/45 blur-[110px]" />

        {/* Top-center lime glow */}
        <div className="absolute left-[25%] -top-40 h-[400px] w-[400px] rounded-full bg-[#d7ff72]/40 blur-[120px]" />

        {/* Top-right soft blue glow */}
        <div className="absolute -right-40 -top-20 h-[450px] w-[450px] rounded-full bg-[#cbd5ff]/35 blur-[120px]" />

        {/* Middle-left purple glow */}
        <div className="absolute -left-48 top-[35%] h-[450px] w-[450px] rounded-full bg-[#d8d6ff]/35 blur-[130px]" />

        {/* Middle-right blue glow */}
        <div className="absolute -right-40 top-[35%] h-[450px] w-[450px] rounded-full bg-[#c5d2ff]/30 blur-[130px]" />

        {/* Bottom-left lime green glow */}
        <div className="absolute -bottom-36 -left-32 h-[500px] w-[500px] rounded-full bg-[#caff50]/50 blur-[110px]" />

        {/* Bottom-center soft purple glow */}
        <div className="absolute -bottom-40 left-[35%] h-[450px] w-[450px] rounded-full bg-[#d9dcff]/40 blur-[120px]" />

        {/* Bottom-right lavender glow */}
        <div className="absolute -bottom-20 -right-40 h-[550px] w-[550px] rounded-full bg-[#b9c8ff]/45 blur-[130px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-[1258px] flex-col gap-24 px-5">
        {/* Row 1 – Learners */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="max-w-[577px] font-heading text-3xl font-semibold leading-[1.2] tracking-tight md:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-10 max-w-[477px] text-base leading-relaxed text-muted">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Statistics */}
            <dl className="mt-10 flex gap-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-heading text-4xl font-semibold text-primary">
                    {s.value}
                  </dd>
                  <dd className="text-lg text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Learner Image */}
          <div className="relative mx-auto h-[500px] w-full max-w-[577px] overflow-hidden rounded-3xl">
            <Img src="/images/growth-learner.png" alt="Learner with laptop" />
          </div>
        </div>

        {/* Row 2 – Creators */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Creator Image and Floating Panels */}
          <div className="relative mx-auto h-[560px] w-full">
            {/* Creator Image */}
            <Img
              src="/images/growth-creator.png"
              alt="Creator with tablet"
              className="absolute inset-0 z-10 h-full w-full object-contain object-bottom"
            />

            {/* Total Revenue Panel */}
            <Panel className="left-0 top-10 z-0 w-[232px] rounded-xl !bg-primary text-white">
              <p className="text-sm">Total Revenue</p>
              <p className="text-xs opacity-70">July 1-28</p>

              <p className="mt-3 flex items-center justify-between font-heading text-2xl font-semibold">
                $120.29
              </p>

              <div className="mt-3 h-2 rounded-full bg-white/20">
                <div className="h-2 w-2/3 rounded-full bg-lime" />
              </div>
            </Panel>

            {/* Year to Date Panel */}
            <Panel className="left-0 top-48 z-0 w-[150px] rounded-xl !bg-primary text-white">
              <p className="text-sm">Year to Date</p>
              <p className="text-xs opacity-70">2023</p>

              <p className="mt-3 font-heading text-xl font-semibold">
                $1,200.38
              </p>
            </Panel>

            {/* Happy Students Panel */}
            <Panel className="bottom-12 right-0 z-20 rounded-xl !bg-lime !p-4">
              <p className="font-medium">Happy Students</p>

              <p className="mb-2 text-[10px] text-gray-400">
                <b className="text-ink">4.5</b> (240) ★
              </p>

              <AvatarStack size={43} overlap={16} count={5} label="2K+" />
            </Panel>
          </div>

          {/* Creator Text Content */}
          <div>
            <h2 className="max-w-[391px] font-heading text-3xl font-semibold leading-[1.2] tracking-tight md:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="mt-10 max-w-[574px] text-base leading-relaxed text-muted">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Creator Perks */}
            <ul className="mt-10 flex flex-col gap-4">
              {creatorPerks.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-base font-medium"
                >
                  <CheckCircle />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
