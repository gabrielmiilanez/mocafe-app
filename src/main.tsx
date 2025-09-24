import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Welcome from "./pages/Welcome/welcome.tsx";
import Estoque from "./pages/Estoque/estoque.tsx";
import Vendas from "./pages/Vendas/vendas.tsx";
import NotFound from "./pages/NotFound/notFound.tsx";
import Panel from "./pages/Panel/panel.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);