import Img from "../ui/Img";
import Button from "../ui/Button";
import AvatarStack from "../ui/AvatarStack";
import { Search } from "../ui/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary bg-grid pt-32 text-white md:pt-[169px]">
      {/* lime disc behind the hero photo */}
      <div className="absolute left-1/2 top-[582px] hidden h-[1149px] w-[1149px] -translate-x-1/2 rounded-full bg-lime md:block" />
      <Img src="/images/3d ornament.png" className="absolute top-56 hidden w-full lg:block" />

      <div className="relative mx-auto max-w-[935px] px-5 text-center">
        <h1 className="font-heading text-4xl font-semibold leading-[1.2] tracking-tight md:text-[72px]">Get Access to Hundreds Courses Available</h1>
        <p className="mx-auto mt-8 text-base leading-relaxed text-gray-50/90 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <form role="search" className="mx-auto mt-16 flex max-w-[581px] items-center gap-4">
          <label className="flex h-[52px] flex-1 items-center gap-3 rounded-full bg-white px-6 text-ink">
            <Search className="h-6 w-6 shrink-0" />
            <input type="search" placeholder="Course, topic, creator" className="w-full bg-transparent text-lg outline-none placeholder:text-gray-400" />
          </label>
          <Button type="submit" className="h-[46px]">Search</Button>
        </form>
      </div>

      <div className="relative mx-auto mt-12 h-[420px] max-w-[1200px] px-5 md:h-[540px]">
        <div className="absolute bottom-0 left-1/2 h-full w-[min(578px,90%)] -translate-x-1/2">
          <Img src="/images/hero-person.png" alt="Student smiling with headphones" className="absolute top-6 scale-[1.3]" />
        </div>
        <div className="absolute top-24 left-[16%] hidden rounded-2xl bg-white/90 p-4 text-ink shadow-lg backdrop-blur md:block">
          <p className="text-base font-medium">UI/UX Design</p>
          <p className="text-sm text-gray-400">200 Courses • 1000+ Students</p>
        </div>
        <div className="absolute right-[18%] top-28 hidden w-[232px] rounded-2xl bg-white/90 p-4 text-ink shadow-lg backdrop-blur md:block">
          <p className="text-sm text-gray-400">Learning Progress</p>
          <p className="font-heading text-5xl font-semibold">55%</p>
          <div className="mt-2 h-2 rounded-full bg-gray-100"><div className="h-2 w-[55%] rounded-full bg-lime" /></div>
        </div>
        <div className="absolute bottom-20 left-[15%] hidden w-[258px] rounded-2xl bg-white p-4 text-ink md:block">
          <p className="text-base font-medium">Happy Students</p>
          <p className="mb-2 text-[10px] text-gray-400"><b className="text-ink">4.5</b> (240) ★</p>
          <AvatarStack size={43} overlap={16} count={7} label="2K+" />
        </div>
      </div>
    </section>
  );
}
