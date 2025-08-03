
import { Achievement } from '@/types/achievement';
import AchievementCard from './AchievementCard';

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList = ({ achievements }: AchievementsListProps) => {
  // Filter out the spotlight achievement if it exists in the list
  const regularAchievements = achievements.filter(achievement => !achievement.spotlight);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {regularAchievements.map(achievement => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
      
      {regularAchievements.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No achievements found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default AchievementsList;
