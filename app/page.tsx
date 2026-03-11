import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import VideoDemo from "@/components/VideoDemo";
import Models from "@/components/Models";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import MediaMentions from "@/components/MediaMentions";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
      <Founder />
      <MediaMentions />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
