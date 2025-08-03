
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AchievementsHeader from "@/components/achievements/AchievementsHeader";
import AchievementsFilter from "@/components/achievements/AchievementsFilter";
import AchievementsList from "@/components/achievements/AchievementsList";
import SpotlightAchievement from "@/components/achievements/SpotlightAchievement";
import AchievementsCTA from "@/components/achievements/AchievementsCTA";
import { Achievement, AchievementCategory } from "@/types/achievement";
import { achievements } from "@/data/achievements";
import { Download } from "lucide-react";

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState<AchievementCategory | "all">("all");

  const filteredAchievements = activeFilter === "all"
    ? achievements
    : achievements.filter(achievement => achievement.category === activeFilter);

  const spotlightAchievement = achievements.find(achievement => achievement.spotlight);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <AchievementsHeader />



        {/* Spotlight Achievement */}
        {spotlightAchievement && (
          <section className="py-12">
            <div className="container">
              <h2 className="text-2xl font-bold flex items-center mb-6">
                <span className="text-yellow-400 mr-2">★</span> Spotlight Achievement
              </h2>
              <SpotlightAchievement achievement={spotlightAchievement} />
            </div>
          </section>
        )}


        {/* Filter Tabs */}
        <section className="py-8 bg-portfolio-light-bg">
          <div className="container overflow-x-auto">
            <div className="min-w-max">
              <AchievementsFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </div>
        </section>

        {/* Achievement List */}
        <section className="py-12">
          <div className="container">
            <AchievementsList achievements={filteredAchievements} />
          </div>
        </section>

        {/* Call to Action */}
        <AchievementsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;
