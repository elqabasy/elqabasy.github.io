
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroSection from "@/components/about/IntroSection";
import SkillsSection from "@/components/about/SkillsSection";
import EducationSection from "@/components/about/EducationSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import GoalsSection from "@/components/about/GoalsSection";
import TabNavigation from "@/components/about/TabNavigation";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <IntroSection />
        <div className="container py-12">
          <TabNavigation />
        </div>
        <EducationSection />
        <SkillsSection />
        <AchievementsSection />
        <GoalsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
