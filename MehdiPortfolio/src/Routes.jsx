import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ComponentsPage from "pages/ComponentsPage";
import ProjectPage from "pages/ProjectPage";
import ServicesPage from "pages/ServicesPage";
import PortfolioPage from "pages/PortfolioPage";
import { projectsList } from "mock/projects";
const License = React.lazy(() => import("pages/License"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Error = React.lazy(() => import("pages/Error"));
const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AgentList = React.lazy(() => import("pages/AgentList"));
const PropertyDetails = React.lazy(() => import("pages/ProjectPage"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage projects={projectsList}/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs projects={projectsList}/>} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage projects={projectsList}/>} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/agentlist" element={<AgentList />} />
          <Route path="/projectdetails" element={<ProjectPage projects={projectsList}/>} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<License />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
