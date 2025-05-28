import About from "./_components/about";
import Consortium from "./_components/consortium";
import Footer from "./_components/footer";
import Health from "./_components/health";
import Hero from "./_components/hero";
import Insurances from "./_components/insurances";
import Partners from "./_components/partners";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Insurances />
      <Health />
      <Partners />
      <Consortium />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
