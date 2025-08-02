import { Clock, CheckCircle, XCircle, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const activities = [
  {
    id: 1,
    type: "test_completed",
    title: "JavaScript Fundamentals",
    score: 87,
    status: "passed",
    time: "2 hours ago",
    icon: CheckCircle,
  },
  {
    id: 2,
    type: "test_failed",
    title: "React Advanced Concepts",
    score: 65,
    status: "failed",
    time: "1 day ago",
    icon: XCircle,
  },
  {
    id: 3,
    type: "test_started",
    title: "CSS Grid & Flexbox",
    score: null,
    status: "in_progress",
    time: "2 days ago",
    icon: Clock,
  },
  {
    id: 4,
    type: "note_created",
    title: "Created notes for Python Basics",
    score: null,
    status: "completed",
    time: "3 days ago",
    icon: FileText,
  },
]

export function RecentActivity() {
  return (
    <Card className="hover-lift shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          
          return (
            <div key={activity.id} className="flex items-start gap-3 group">
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                activity.status === "passed" && "bg-success/10 text-success",
                activity.status === "failed" && "bg-destructive/10 text-destructive",
                activity.status === "in_progress" && "bg-warning/10 text-warning",
                activity.status === "completed" && "bg-info/10 text-info"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-soft">
                    {activity.title}
                  </p>
                  {activity.score && (
                    <Badge variant={activity.status === "passed" ? "default" : "destructive"}>
                      {activity.score}%
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          )
        })}
        
        <div className="pt-2">
          <button className="text-sm text-primary hover:text-primary/80 font-medium transition-soft">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  )
}