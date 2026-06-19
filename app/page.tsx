import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import BusinessSolutions from "@/components/sections/BusinessSolutions/BusinessSolutions";
import AllModulesShowcase from "@/components/sections/AllModulesShowcase/AllModulesShowcase";
import POSShowcase from "@/components/sections/POSShowcase/POSShowcase";
import Stats from "@/components/sections/Stats/Stats";
import Comparison from "@/components/sections/Comparison/Comparison";
import Pricing from "@/components/sections/Pricing/Pricing";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import MediaCoverage from "@/components/sections/MediaCoverage/MediaCoverage";
import SeoContent from "@/components/sections/SeoContent/SeoContent";
import FAQ from "@/components/sections/FAQ/FAQ";
import BottomCTA from "@/components/sections/BottomCTA/BottomCTA";
import Footer from "@/components/sections/Footer/Footer";
import LeadModal from "@/components/LeadModal/LeadModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessSolutions />
      <AllModulesShowcase />
      <POSShowcase />
      <Stats />
      <Comparison />
      <Pricing />
      <Testimonial />
      <MediaCoverage />
      <SeoContent />
      <FAQ />
      <BottomCTA />
      <Footer />
      <LeadModal />
    </main>
  );
}
