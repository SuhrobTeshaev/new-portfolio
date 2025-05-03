import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";

/* Replaced with useBlogPosts hook
const blogPosts: BlogPost[] = [
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
  },
];
*/

export default function BlogPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const { posts: blogPosts } = useBlogPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {language === "en" ? "Blog" : "Блог"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              {language === "en"
                ? "Thoughts, tutorials and insights about web development"
                : "Мысли, руководства и идеи о веб-разработке"}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title[language]}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {post.title[language]}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {post.readTime}{" "}
                          {language === "en" ? "min read" : "мин чтения"}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="line-clamp-3">
                      {post.excerpt[language]}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        {language === "en" ? "Read More" : "Читать далее"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
