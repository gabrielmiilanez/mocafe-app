import { Outlet } from "react-router-dom";

const PanelLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <aside className="w-48 bg-amber-100 p-6">Sidebar</aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default PanelLayout;
