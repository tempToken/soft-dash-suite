import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "neutral",
  className
}) {
  return (
    <Card className={cn("hover-lift shadow-card", className)}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 truncate">{title}</p>
            <p className="text-xl sm:text-2xl font-bold text-foreground">{value}</p>
            {change && (
              <p className={cn(
                "text-xs font-medium mt-1 truncate",
                trend === "up" && "text-success",
                trend === "down" && "text-destructive",
                trend === "neutral" && "text-muted-foreground"
              )}>
                {change}
              </p>
            )}
          </div>
          <div className={cn(
            "h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center flex-shrink-0 ml-2",
            "bg-primary/10 text-primary"
          )}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}