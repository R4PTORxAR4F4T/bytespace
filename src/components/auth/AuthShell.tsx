import Logo from "../ui/Logo";
import CourseCard from "../ui/CourseCard";
import AvatarStack from "../ui/AvatarStack";
import Img from "../ui/Img";
import { courses } from "@/lib/data";

export default function AuthShell({
  heading,
  text,
  children,
}: {
  heading: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary bg-grid">
      <div className="mx-auto flex max-w-[1200px] items-center px-5 pt-[35px]">
        <Logo light showName={false} />
      </div>
      <div className="mx-auto mt-10 grid max-w-[1200px] items-start gap-12 px-5 pb-16 lg:mt-[35px] lg:grid-cols-2">
        <div className="hidden text-gray-50 lg:block">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 max-w-[475px] text-lg leading-relaxed">{text}</p>

          <Img src="/images/ornament-login.png" className="absolute z-40" />

          <div className="relative mt-16 h-[420px]">
            <div className="absolute left-0 top-16 w-[373px] opacity-95 z-0">
              <CourseCard
                course={{ ...courses[1], title: "Build Digital Asset" }}
              />
            </div>

            <div className="absolute left-[92px] top-0 w-[373px] z-10">
              <CourseCard course={courses[2]} />
            </div>

            <div className="absolute bottom-0 left-[160px] w-[258px] rounded-2xl bg-lime p-4 text-ink z-30">
              <p className="text-base font-medium">Happy Students</p>
              <p className="mb-2 text-[10px] text-gray-400">
                <b className="text-ink">4.5</b> (240) ★
              </p>
              <AvatarStack size={43} overlap={16} count={7} label="2K+" />
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[579px] rounded-3xl bg-white px-6 py-12 sm:px-[63px] lg:mt-[85px]">
          {children}
        </div>
      </div>
    </div>
  );
}
