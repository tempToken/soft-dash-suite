import { useState } from "react"
import { DashboardSidebar } from "./DashboardSidebar"
import { DashboardHeader } from "./DashboardHeader"
import { cn } from "@/lib/utils"

export function DashboardLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Mobile Sidebar - Hidden on desktop */}
      <div className={cn(
        "lg:hidden fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out",
        sidebarCollapsed ? "-translate-x-full" : "translate-x-0"
      )}>
        <DashboardSidebar
          collapsed={false}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Desktop Sidebar - Always visible on large screens */}
      <div className="hidden lg:block">
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader 
          onMobileMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          showMobileMenu={true}
        />

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="p-3 sm:p-4 md:p-6">
            {children}
          </div>
        </main>

        {/* Mobile footer for small screens */}
        <div className="lg:hidden p-4 border-t border-border bg-background">
          <div className="text-xs text-muted-foreground text-center">
            Built with ❤️ by pritam
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {!sidebarCollapsed && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
  )
}