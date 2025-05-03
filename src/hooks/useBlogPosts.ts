import { useState, useEffect } from "react";
import { Language } from "@/contexts/LanguageContext";

export interface BlogPost {
  id: number;
  title: {
    en: string;
    ru: string;
  };
  excerpt: {
    en: string;
    ru: string;
  };
  content: {
    en: string;
    ru: string;
  };
  imageUrl: string;
  date: string;
  readTime: number;
  author: string;
  slug: string;
  tags?: string[];
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: {
        en: "Building Responsive Web Applications with React",
        ru: "Создание адаптивных веб-приложений с React",
      },
      excerpt: {
        en: "Learn how to create responsive web applications using React and modern CSS techniques.",
        ru: "Узнайте, как создавать адаптивные веб-приложения с использованием React и современных техник CSS.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      date: "2023-10-15",
      readTime: 8,
      author: "John Doe",
      slug: "building-responsive-web-applications",
      tags: ["React", "CSS", "Responsive Design"],
    },
    {
      id: 2,
      title: {
        en: "Optimizing Laravel Performance",
        ru: "Оптимизация производительности Laravel",
      },
      excerpt: {
        en: "Discover techniques to improve the performance of your Laravel applications.",
        ru: "Откройте для себя методы повышения производительности ваших приложений Laravel.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80",
      date: "2023-09-22",
      readTime: 10,
      author: "John Doe",
      slug: "optimizing-laravel-performance",
      tags: ["Laravel", "Performance", "Backend"],
    },
    {
      id: 3,
      title: {
        en: "Modern State Management in React",
        ru: "Современное управление состоянием в React",
      },
      excerpt: {
        en: "Explore different state management solutions for React applications.",
        ru: "Исследуйте различные решения для управления состоянием в приложениях React.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      date: "2023-08-10",
      readTime: 12,
      author: "John Doe",
      slug: "modern-state-management-react",
      tags: ["React", "State Management", "Frontend"],
    },
    {
      id: 4,
      title: {
        en: "Getting Started with React: A Beginner's Guide",
        ru: "Начало работы с React: руководство для начинающих",
      },
      excerpt: {
        en: "Simple steps to start your journey with React development from scratch.",
        ru: "Простые шаги для начала вашего пути с React-разработкой с нуля.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
      date: "2024-01-15",
      readTime: 6,
      author: "John Doe",
      slug: "getting-started-with-react",
      tags: ["React", "Beginners", "Tutorial"],
    },
    {
      id: 5,
      title: {
        en: "AI Tools for Frontend Developers in 2024",
        ru: "Инструменты ИИ для фронтенд-разработчиков в 2024 году",
      },
      excerpt: {
        en: "Discover how AI is transforming frontend development with these cutting-edge tools.",
        ru: "Узнайте, как ИИ трансформирует фронтенд-разработку с помощью этих передовых инструментов.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1677442135136-760c813770c6?w=800&q=80",
      date: "2024-03-05",
      readTime: 9,
      author: "John Doe",
      slug: "ai-tools-for-frontend-developers",
      tags: ["AI", "Frontend", "Tools"],
    },
    {
      id: 6,
      title: {
        en: "CSS Grid vs Flexbox: When to Use Each",
        ru: "CSS Grid против Flexbox: когда использовать каждый",
      },
      excerpt: {
        en: "A practical guide to choosing between CSS Grid and Flexbox for your layouts.",
        ru: "Практическое руководство по выбору между CSS Grid и Flexbox для ваших макетов.",
      },
      content: {
        en: "Full article content here...",
        ru: "Полное содержание статьи здесь...",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
      date: "2024-02-20",
      readTime: 7,
      author: "John Doe",
      slug: "css-grid-vs-flexbox",
      tags: ["CSS", "Layout", "Frontend"],
    },
  ]);

  // In a real application, you would fetch posts from an API
  // This is a placeholder for that functionality
  useEffect(() => {
    // Simulating API fetch
    // In a real app, replace with actual API call:
    // const fetchPosts = async () => {
    //   try {
    //     const response = await fetch('https://api.example.com/posts');
    //     const data = await response.json();
    //     setPosts(data);
    //   } catch (error) {
    //     console.error('Error fetching blog posts:', error);
    //   }
    // };
    //
    // fetchPosts();
  }, []);

  const getPostsByTag = (tag: string, language: Language) => {
    return posts.filter((post) => post.tags?.includes(tag));
  };

  const getLatestPosts = (count: number = 3) => {
    return [...posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };

  const getBeginnerPosts = (language: Language, count: number = 3) => {
    return posts
      .filter(
        (post) =>
          post.tags?.includes("Beginners") || post.tags?.includes("Tutorial"),
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };

  const getAIPosts = (language: Language, count: number = 3) => {
    return posts
      .filter((post) => post.tags?.includes("AI"))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };

  return {
    posts,
    getLatestPosts,
    getPostsByTag,
    getBeginnerPosts,
    getAIPosts,
  };
};
