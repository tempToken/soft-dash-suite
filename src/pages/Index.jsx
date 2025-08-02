import { BarChart3, FileText, Users, Target, Clock, BookOpen } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { StatsCard } from "@/components/StatsCard"
import { RankCard } from "@/components/RankCard"
import { RecentActivity } from "@/components/RecentActivity"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Pritam! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your learning journey today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Tests Completed"
            value={24}
            change="+12% from last week"
            icon={FileText}
            trend="up"
          />
          <StatsCard
            title="Average Score"
            value="87%"
            change="+5% improvement"
            icon={Target}
            trend="up"
          />
          <StatsCard
            title="Study Streak"
            value="7 days"
            change="Keep it up!"
            icon={Clock}
            trend="neutral"
          />
          <StatsCard
            title="Notes Created"
            value={156}
            change="+23 this week"
            icon={BookOpen}
            trend="up"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rank Card - Takes 1 column */}
          <div className="lg:col-span-1">
            <RankCard />
          </div>

          {/* Recent Activity - Takes 2 columns */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard
            title="Leaderboard Position"
            value="#247"
            change="↑12 positions"
            icon={BarChart3}
            trend="up"
            className="bg-gradient-card"
          />
          <StatsCard
            title="Study Group Rank"
            value="#3"
            change="Top performer"
            icon={Users}
            trend="up"
            className="bg-gradient-card"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;