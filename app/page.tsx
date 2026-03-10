import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import VideoDemo from "@/components/VideoDemo";
import Models from "@/components/Models";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <VideoDemo />
      <Models />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
