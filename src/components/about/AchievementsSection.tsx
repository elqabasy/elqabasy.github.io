
import { Trophy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      contest: "ACM ACPC",
      team: "Problem rick rolled",
      year: 2022,
      rank: "5th place",
      description: "Solved 8 out of 12 problems in this prestigious algorithmic programming contest."
    },
    {
      contest: "Google Kickstart",
      team: "Solo Participant",
      year: 2021,
      rank: "Top 15%",
      description: "Ranked in the top 15% globally, solving complex algorithmic challenges."
    },
    {
      contest: "National Cybersecurity CTF",
      team: "SecureBytes",
      year: 2023,
      rank: "3rd place",
      description: "Capture the Flag competition focused on web exploitation and cryptography."
    },
    {
      contest: "HackTheBox University CTF",
      team: "DefendersOfEgypt",
      year: 2022,
      rank: "Top 10",
      description: "Competed in a global university challenge, specializing in web security challenges."
    },
    {
      contest: "Regional Collegiate Programming Contest",
      team: "Binary Bandits",
      year: 2021,
      rank: "2nd place",
      description: "Regional qualifier for the ACPC, solved problems in data structures and algorithms."
    },
  ];

  return (
    <section id="achievements" className="py-16 bg-white scroll-mt-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center">
          <span className="bg-blue-100 p-2 rounded-lg mr-3">
            <Trophy className="h-6 w-6 text-portfolio-blue" />
          </span>
          Contest Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-portfolio-blue mb-2">{achievement.year}</Badge>
                  <Badge variant="outline" className="bg-white">{achievement.rank}</Badge>
                </div>
                <CardTitle className="text-xl">{achievement.contest}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-500 mb-3">Team: <span className="font-medium">{achievement.team}</span></p>
                <p className="text-gray-700">{achievement.description}</p>
                {index < 2 && (
                  <div className="mt-3">
                    <a href="#" className="text-sm text-portfolio-blue hover:underline">
                      View Certificate →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
