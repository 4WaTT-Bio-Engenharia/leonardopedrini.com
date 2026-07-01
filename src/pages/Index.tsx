import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProblemsSection from "@/components/ProblemsSection";
import MethodSection from "@/components/MethodSection";
import DifferentialSection from "@/components/DifferentialSection";
import AboutSection from "@/components/AboutSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AuthoritySection />
        <ProblemsSection />
        <MethodSection />
        <DifferentialSection />
        <AboutSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
