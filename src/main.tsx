import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.scss";
import App from "./App.tsx";

// Pages
import HomePage from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "thesis", element: <About /> },
      { path: "knowledge", element: <About /> },
      { path: "emotion", element: <About /> },
      { path: "digitalization", element: <About /> },
      { path: "bachelorsThesis", element: <About /> },
      { path: "prosex", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
