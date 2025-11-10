import { AboutClinic } from "@/components/AboutClinic";
import { AboutDoctor } from "@/components/AboutDoctor";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import Sidebar from "@/components/Siderbar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Hero />
      <AboutDoctor />
      <Results />
      <Services />
      <FAQ />
      <AboutClinic />
      <CallToAction />
      <Footer />
    </>
  );
}
