import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ForWhomSection from "@/components/ForWhomSection";
import SprintOfferSection from "@/components/SprintOfferSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import TransformationSection from "@/components/TransformationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialSection from "@/components/DifferentialSection";
import AuthoritySection from "@/components/AuthoritySection";
import FaqSection from "@/components/FaqSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ForWhomSection />
        <SprintOfferSection />
        <DeliverablesSection />
        <TransformationSection />
        <HowItWorksSection />
        <DifferentialSection />
        <AuthoritySection />
        <FaqSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
