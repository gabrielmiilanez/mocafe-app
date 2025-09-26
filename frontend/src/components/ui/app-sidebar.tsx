import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Box, ShoppingCart, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Painel", url: "/painel", icon: Home },
  { title: "Estoque", url: "/estoque", icon: Box },
  { title: "Vendas", url: "/vendas", icon: ShoppingCart },
];

export default function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      {/* HEADER */}
      <SidebarHeader className="border-b px-4 py-3">
        <h2 className="text-xl font-bold tracking-tight">☕ Mocafé</h2>
        <SidebarTrigger className="flex md:hidden ml-4" />
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.url}
              >
                <Link to={item.url} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t px-4 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button
                className="flex items-center gap-2 text-red-600 hover:text-red-800 cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                <span>Sair</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
