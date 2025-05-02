import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import { LanguageProvider } from "./contexts/LanguageContext";

// Lazy load blog post page for better performance
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function App() {
  return (
    <LanguageProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <p className="p-4 text-lg">Loading...</p>
          </div>
        }
      >
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
            </Route>
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
