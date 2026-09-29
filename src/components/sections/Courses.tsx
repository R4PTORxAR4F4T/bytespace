import SectionHeading from "./SectionHeading";
import CourseCard from "../ui/CourseCard";
import { courses, courseTabs } from "@/lib/data";

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <div className="mx-auto mt-10 flex max-w-[1086px] flex-wrap justify-center gap-x-4 gap-y-3 px-5" role="tablist" aria-label="Course categories">
        {courseTabs.map((t, i) => (
          <button key={t} role="tab" aria-selected={i === 0}
            className={`rounded-full px-4 py-3 text-base ${i === 0 ? "bg-lime font-medium" : "bg-gray-50 text-gray-700 hover:bg-gray-100"} ${t === "+ More" ? "bg-transparent text-primary" : ""}`}>{t}</button>
        ))}
      </div>
      <div className="mx-auto mt-16 grid max-w-[1200px] justify-items-center gap-10 px-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => <CourseCard key={c.title} course={c} />)}
      </div>
    </section>
  );
}
