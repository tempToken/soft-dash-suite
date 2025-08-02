import { DashboardLayout } from "@/components/DashboardLayout"

const Leaderboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against other students.</p>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;