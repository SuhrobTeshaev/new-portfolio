import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function ProjectsPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.projects.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {language === "en"
                ? "A showcase of my recent work and projects"
                : "Демонстрация моих недавних работ и проектов"}
            </p>
          </div>
          <div className="mt-16">
            <ProjectsGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
