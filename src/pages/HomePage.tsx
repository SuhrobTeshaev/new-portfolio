import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Code,
  Database,
  Layout,
  Lightbulb,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const { getLatestPosts, getBeginnerPosts, getAIPosts } = useBlogPosts();

  const techStack = [
    { name: "React", icon: <Code className="h-6 w-6" /> },
    { name: "TypeScript", icon: <Code className="h-6 w-6" /> },
    { name: "Laravel", icon: <Database className="h-6 w-6" /> },
    { name: "Next.js", icon: <Code className="h-6 w-6" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-6 w-6" /> },
    { name: "MySQL", icon: <Database className="h-6 w-6" /> },
    { name: "Node.js", icon: <Code className="h-6 w-6" /> },
    { name: "Git", icon: <Code className="h-6 w-6" /> },
  ];

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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(56,189,248,0.1),rgba(56,189,248,0))]" />
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
            >
              {t.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-xl text-muted-foreground md:text-2xl"
            >
              {t.home.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              {t.home.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link to="/projects" className="group">
                  {t.home.cta}
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">{t.nav.about}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {language === "en" ? "My Tech Stack" : "Мой технологический стек"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground"
            >
              {language === "en"
                ? "Technologies and tools I use to bring products to life"
                : "Технологии и инструменты, которые я использую для создания продуктов"}
            </motion.p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {tech.icon}
                </div>
                <span className="text-lg font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {language === "en" ? "Featured Projects" : "Избранные проекты"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground"
            >
              {language === "en"
                ? "Check out some of my recent work"
                : "Ознакомьтесь с некоторыми из моих недавних работ"}
            </motion.p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                {language === "en"
                  ? "View All Projects"
                  : "Посмотреть все проекты"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {language === "en" ? "Latest Articles" : "Последние статьи"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground"
            >
              {language === "en"
                ? "Thoughts and insights about web development"
                : "Мысли и идеи о веб-разработке"}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {getLatestPosts(3).map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <div className="group h-full overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title[language]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-xl font-semibold">
                      {post.title[language]}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(
                          language === "en" ? "en-US" : "ru-RU",
                          { year: "numeric", month: "short", day: "numeric" },
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}{" "}
                        {language === "en" ? "min read" : "мин чтения"}
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-muted-foreground">
                      {post.excerpt[language]}
                    </p>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          {language === "en" ? "Read More" : "Читать далее"}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                {language === "en" ? "View All Articles" : "Все статьи"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* For Beginners Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {language === "en"
                ? "For New Developers"
                : "Для новых разработчиков"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground"
            >
              {language === "en"
                ? "Simple steps to start your development journey"
                : "Простые шаги для начала вашего пути в разработке"}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {getBeginnerPosts(language, 3).map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <div className="group h-full overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title[language]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {language === "en"
                          ? "Beginner Friendly"
                          : "Для начинающих"}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 text-xl font-semibold">
                      {post.title[language]}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(
                          language === "en" ? "en-US" : "ru-RU",
                          { year: "numeric", month: "short", day: "numeric" },
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}{" "}
                        {language === "en" ? "min read" : "мин чтения"}
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-muted-foreground">
                      {post.excerpt[language]}
                    </p>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          {language === "en" ? "Read More" : "Читать далее"}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI for Developers Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {language === "en" ? "AI for Developers" : "ИИ для разработчиков"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground"
            >
              {language === "en"
                ? "Explore new AI possibilities for frontend development"
                : "Изучите новые возможности ИИ для фронтенд-разработки"}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {getAIPosts(language, 3).map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <div className="group h-full overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title[language]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {language === "en" ? "AI Technology" : "ИИ Технологии"}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 text-xl font-semibold">
                      {post.title[language]}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(
                          language === "en" ? "en-US" : "ru-RU",
                          { year: "numeric", month: "short", day: "numeric" },
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}{" "}
                        {language === "en" ? "min read" : "мин чтения"}
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-muted-foreground">
                      {post.excerpt[language]}
                    </p>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          {language === "en" ? "Read More" : "Читать далее"}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                {language === "en"
                  ? "Explore All AI Articles"
                  : "Изучить все статьи об ИИ"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
