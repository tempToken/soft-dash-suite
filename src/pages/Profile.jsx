import { DashboardLayout } from "@/components/DashboardLayout"

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your profile and account settings.</p>
      </div>
    </DashboardLayout>
  );
};

export default Profile;