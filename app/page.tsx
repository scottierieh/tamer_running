import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Sessions from "@/components/Sessions";
import Crew from "@/components/Crew";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Programs />
      <Sessions />
      <Crew />
      <Join />
      <Footer />
    </main>
  );
}
