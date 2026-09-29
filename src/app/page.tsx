import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";
import Growth from "@/components/sections/Growth";
import CreatorCta from "@/components/sections/CreatorCta";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Categories />
        <Growth />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
