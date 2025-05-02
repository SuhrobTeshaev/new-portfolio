import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Layout } from "lucide-react";

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

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
    </div>
  );
}
