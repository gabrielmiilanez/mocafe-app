import AppSidebar from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const PanelLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SidebarProvider defaultOpen={true}>
        <aside className="">
          <AppSidebar />
          <SidebarTrigger />
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default PanelLayout;
