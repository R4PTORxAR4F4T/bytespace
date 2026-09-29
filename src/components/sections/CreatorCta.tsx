import Img from "../ui/Img";
import Button from "../ui/Button";

export default function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-primary bg-grid py-[80px] text-center text-white">
      <Img
        src="/images/ornament-left.png"
        className="absolute left-0 top-0 h-fit lg:block"
      />
      <Img
        src="/images/ornament-right.png"
        className="absolute right-0 top-0 lg:block"
      />
      <div className="relative mx-auto max-w-[964px] px-5">
        <h2 className="mx-auto max-w-[710px] font-heading text-3xl font-semibold leading-[1.2] tracking-tight md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-10 text-base leading-relaxed text-gray-50/90">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button href="/signup" className="mt-12">
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
