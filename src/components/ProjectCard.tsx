import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  goals?: string;
  problems?: string;
  achievements?: string;
}

export default function ProjectCard({
  title = "Project Title",
  description = "This is a sample project description that explains what the project is about.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  tags = ["React", "TypeScript", "Tailwind"],
  liveUrl,
  githubUrl,
  role = "Frontend Developer",
  goals = "Create a responsive web application with modern UI/UX",
  problems = "Optimizing performance and ensuring cross-browser compatibility",
  achievements = "Improved load time by 40% and increased user engagement",
}: ProjectCardProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <Card className="overflow-hidden bg-card transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground mb-4">
          {description}
        </CardDescription>

        <div className="space-y-3 mt-4 text-sm">
          <div>
            <span className="font-semibold">
              {language === "en" ? "My Role: " : "Моя роль: "}
            </span>
            <span>{role}</span>
          </div>

          <div>
            <span className="font-semibold">
              {language === "en" ? "Project Goals: " : "Цели проекта: "}
            </span>
            <span>{goals}</span>
          </div>

          <div>
            <span className="font-semibold">
              {language === "en" ? "Problems Solved: " : "Решенные проблемы: "}
            </span>
            <span>{problems}</span>
          </div>

          <div>
            <span className="font-semibold">
              {language === "en" ? "Achievements: " : "Достижения: "}
            </span>
            <span>{achievements}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {liveUrl && (
          <Button asChild variant="default" size="sm">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1"
            >
              <ExternalLink className="h-4 w-4" />
              {t.projects.viewLive}
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              {t.projects.viewCode}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
