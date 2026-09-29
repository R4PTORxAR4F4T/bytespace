import type { Course } from "@/lib/data";
import Img from "./Img";
import AvatarStack from "./AvatarStack";
import { SignalBars, Star } from "./Icons";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-gray-50/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">{children}</span>
);

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="w-full max-w-[373px] rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Img src={course.img} alt={course.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <Chip>17 Lessons</Chip><Chip>2 hours 16 mins</Chip><Chip>59 Comments</Chip>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-xl font-semibold leading-7 tracking-tight text-black">{course.title}</h3>
          <p className="text-xs leading-5 text-muted">by <span className="text-primary">{course.author}</span></p>
        </div>
        <span className="flex shrink-0 items-center text-lg font-medium text-muted">{course.rating}<Star className="h-6 w-6" /></span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700">
          <SignalBars />{course.level}
        </span>
        <AvatarStack label="26+" />
      </div>
      <p className="mt-4 flex items-end">
        <span className="font-heading text-xl font-semibold leading-7 text-primary">${course.price}</span>
        <span className="text-xs leading-5 text-muted">/lifetime</span>
      </p>
    </article>
  );
}
