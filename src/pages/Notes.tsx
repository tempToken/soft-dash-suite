import { DashboardLayout } from "@/components/DashboardLayout"

const Notes = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Notes</h1>
        <p className="text-muted-foreground">Access and create your study notes.</p>
      </div>
    </DashboardLayout>
  );
};

export default Notes;