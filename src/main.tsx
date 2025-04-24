import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./styles/global.scss";
import App from "./App.tsx";
import { useLayoutEffect, ReactNode } from "react";

// Pages
import HomePage from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import CalmiflyPage from "./pages/calmifly/Calmifly.tsx";
import KnowledgeSharingPage from "./pages/knowledgeSharing/KnowledgeSharing.tsx";
import DigitalizationPage from "./pages/digitalization/Digitalization.tsx";
import MasterThesisPage from "./pages/masterThesis/MasterThesis.tsx";
import BachelorPage from "./pages/bachelor/BachelorPage.tsx";

interface WrapperProps {
  children: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/thesis", element: <MasterThesisPage /> },
      { path: "/knowledge", element: <KnowledgeSharingPage /> },
      { path: "/calmifly", element: <CalmiflyPage /> },
      { path: "/digitalization", element: <DigitalizationPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
