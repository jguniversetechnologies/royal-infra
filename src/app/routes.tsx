import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import ClientsPage from "../pages/ClientsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";
import PrivacyPage from "../pages/PrivacyPage";
import QualityPage from "../pages/QualityPage";
import ServicesPage from "../pages/ServicesPage";
import TermsPage from "../pages/TermsPage";

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
      { path: "privacy-policy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
