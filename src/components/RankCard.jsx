import { Trophy, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function RankCard() {
  return (
    <Card className="hover-lift shadow-card bg-gradient-card">
      <CardHeader className="pb-3 p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg font-semibold flex items-center gap-2">
            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="truncate">Current Rank</span>
          </CardTitle>
          <Badge className="bg-success/10 text-success border-success/20 flex-shrink-0">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">#247</div>
          <p className="text-xs sm:text-sm text-muted-foreground">out of 10,847 students</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress to next rank</span>
            <span className="font-medium text-foreground">87%</span>
          </div>
          <Progress value={87} className="h-2 bg-muted" />
          <p className="text-xs text-muted-foreground">
            Need 156 more points to reach #246
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-2">
          <div className="text-center">
            <div className="text-base sm:text-lg font-semibold text-foreground">2,847</div>
            <p className="text-xs text-muted-foreground">Total Points</p>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-semibold text-foreground">156</div>
            <p className="text-xs text-muted-foreground">This Week</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}