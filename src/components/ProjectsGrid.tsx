import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface Project {
  id: number;
  title: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "E-commerce Platform",
      ru: "Платформа электронной коммерции",
    },
    description: {
      en: "A full-featured e-commerce platform built with React, Redux, and Laravel. Features include product catalog, cart, checkout, and admin dashboard.",
      ru: "Полнофункциональная платформа электронной коммерции, созданная с использованием React, Redux и Laravel. Включает каталог товаров, корзину, оформление заказа и панель администратора.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["React", "Redux", "Laravel", "MySQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: {
      en: "Task Management App",
      ru: "Приложение для управления задачами",
    },
    description: {
      en: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      ru: "Приложение для совместного управления задачами с обновлениями в реальном времени, интерфейсом перетаскивания и функциями командного сотрудничества.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
    tags: ["React", "TypeScript", "Node.js", "Socket.io"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/task-app",
  },
  {
    id: 3,
    title: {
      en: "Portfolio Website",
      ru: "Сайт-портфолио",
    },
    description: {
      en: "A responsive portfolio website with dark mode, animations, and content management system.",
      ru: "Адаптивный сайт-портфолио с темным режимом, анимациями и системой управления контентом.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio",
  },
];

export default function ProjectsGrid() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title[language]}
          description={project.description[language]}
          imageUrl={project.imageUrl}
          tags={project.tags}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}
