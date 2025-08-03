
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import RecentHighlights from "@/components/home/RecentHighlights";
import QuoteSection from "@/components/home/QuoteSection";
import TechnicalExpertise from "@/components/home/TechnicalExpertise";
import PlatformsSection from "@/components/home/PlatformsSection";
import CTASection from "@/components/home/CTASection";
import AppLogo from "@/components/logo/AppLogo";
import AppIcon from "@/components/logo/AppIcon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        <HeroSection />
        <RecentHighlights />
        <QuoteSection />
        <TechnicalExpertise />
        <PlatformsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
