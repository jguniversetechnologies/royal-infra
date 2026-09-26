import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import ClientsPage from "../pages/ClientsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";
import QualityPage from "../pages/QualityPage";
import ServicesPage from "../pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "projects", Component: ProjectsPage },
      { path: "quality-safety", Component: QualityPage },
      { path: "clients", Component: ClientsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
