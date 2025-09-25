import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import PublicLayout from "./layouts/publicLayout/PublicLayout.tsx";
import PanelLayout from "./layouts/panelLayout/PanelLayout.tsx";

import Welcome from "./pages/Welcome/welcome.tsx";
import Estoque from "./pages/Estoque/estoque.tsx";
import Vendas from "./pages/Vendas/vendas.tsx";
import NotFound from "./pages/NotFound/notFound.tsx";
import Panel from "./pages/Panel/panel.tsx";

const router = createBrowserRouter([
  
  // Layout público 
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },

  // Layout do painel
  {
    element: <PanelLayout />,
    children: [
      {
        path: "/painel",
        element: <Panel />,
      },
      {
        path: "/estoque",
        element: <Estoque />,
      },
      {
        path: "/vendas",
        element: <Vendas />,
      },
    ],
  },
  
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
