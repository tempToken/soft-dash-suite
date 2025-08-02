import { DashboardLayout } from "@/components/DashboardLayout"

const Tests = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Tests</h1>
        <p className="text-muted-foreground">Manage and take your mock tests here.</p>
      </div>
    </DashboardLayout>
  );
};

export default Tests;