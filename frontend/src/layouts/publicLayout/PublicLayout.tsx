import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Outlet />
    </div>
  );
};

export default App;
