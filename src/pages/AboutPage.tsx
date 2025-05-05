import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";
import enResume from '../../public/SuhrobResume.pdf'

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Experience data
  const experiences = [
    // {
    //   position:
    //     language === "en"
    //       ? "Senior Frontend Developer"
    //       : "Старший Frontend-разработчик",
    //   company:
    //     language === "en" ? "Tech Solutions Inc." : "Tech Solutions Inc.",
    //   period: "2021 - Present",
    //   description:
    //     language === "en"
    //       ? "Led the development of multiple React applications, implemented state management solutions, and mentored junior developers."
    //       : "Руководил разработкой нескольких приложений на React, внедрял решения для управления состоянием и наставлял младших разработчиков.",
    // },
    {
      position:
        language === "en" ? "Software Engineer" : "Веб - разработчик",
      company: language === "en" ? "Livo-dev" : "Livo-dev",
      period: "March 2024 - present",
      description:
        language === "en"
          ? "Developed and maintained web applications using React for frontend and Laravel for backend. Implemented RESTful APIs and database solutions."
          : "Разрабатывал и поддерживал веб-приложения, используя React для фронтенда и Laravel для бэкенда. Реализовывал RESTful API и решения для баз данных.",
    },
    {
      position:
        language === "en" ? "Junior Web Developer" : "Младший веб-разработчик",
      company: language === "en" ? "WEB-studio BO/BO" : "WEB-studio BO/BO" ,
      period: "January 2024 - March 2024",
      description:
        language === "en"
          ? "Worked on frontend development using HTML, CSS, and JavaScript. Assisted in the development of responsive websites and web applications."
          : "Работал над фронтенд-разработкой с использованием HTML, CSS и JavaScript. Помогал в разработке адаптивных веб-сайтов и веб-приложений.",
    },
  ];

  // Companies data
  const companies = [
    {
      name: "Company A",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CA&backgroundColor=3b82f6",
    },
    {
      name: "Company B",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CB&backgroundColor=6366f1",
    },
    {
      name: "Company C",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CC&backgroundColor=8b5cf6",
    },
    {
      name: "Company D",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CD&backgroundColor=ec4899",
    },
  ];

  return (
    <div className="bg-background">
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {t.about.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {t.about.bio}
              </p>
              <div className="mt-8">
                <Button asChild>
                  <a
                    href={
                      language === "en" ?  enResume  : "/resume-ru.pdf"
                    }
                    download
                    className="inline-flex items-center gap-2"
                  >
                    <FileDown className="h-4 w-4" />
                    {t.about.downloadResume}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
              <img
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&q=80"
                alt="Developer"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted/30 md:py-24">
        <div className="container max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.about.experienceTitle}
          </h2>
          <div className="mt-10 grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-card p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {exp.period}
                  </div>
                </div>
                <p className="mt-4">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* T-Shape Skills Section */}
      <section className="py-16 bg-muted/30 md:py-24">
        <div className="container max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {language === "en" ? "T-Shape Skills" : "T-образные навыки"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {language === "en"
              ? "Deep expertise in frontend development with broad knowledge in related areas"
              : "Глубокая экспертиза в frontend-разработке с широкими знаниями в смежных областях"}
          </p>

          <div className="mt-10">
            {/* Primary Skills - The vertical bar of the T */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-semibold mb-4">
                {language === "en"
                  ? "Primary Expertise"
                  : "Основная экспертиза"}
              </h3>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-primary mb-3">
                  {language === "en"
                    ? "Frontend Development"
                    : "Frontend-разработка"}
                </h4>
                <p className="mb-4">
                  {language === "en"
                    ? "Deep expertise in building modern, responsive, and performant web applications using React, TypeScript, and modern CSS frameworks."
                    : "Глубокая экспертиза в создании современных, адаптивных и производительных веб-приложений с использованием React, TypeScript и современных CSS-фреймворков."}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Redux",
                    "Tailwind CSS",
                    "CSS/SCSS",
                    "HTML5",
                    "JavaScript",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card p-3 rounded-md text-center shadow-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Secondary Skills - The horizontal bar of the T */}
            <h3 className="text-xl font-semibold mb-4">
              {language === "en"
                ? "Supporting Knowledge"
                : "Дополнительные знания"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <h4 className="text-lg font-medium mb-3">
                  {language === "en"
                    ? "Backend Development"
                    : "Backend-разработка"}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Understanding of server-side programming and API development"
                    : "Понимание серверного программирования и разработки API"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Laravel",
                    "Node.js",
                    "Express",
                    "RESTful APIs",
                    "MySQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <h4 className="text-lg font-medium mb-3">
                  {language === "en" ? "UI/UX Design" : "UI/UX дизайн"}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Ability to create visually appealing and user-friendly interfaces"
                    : "Способность создавать визуально привлекательные и удобные интерфейсы"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Adobe XD",
                    "Responsive Design",
                    "Wireframing",
                    "Prototyping",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Testing */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <h4 className="text-lg font-medium mb-3">
                  {language === "en"
                    ? "Testing & DevOps"
                    : "Тестирование и DevOps"}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "en"
                    ? "Knowledge of testing methodologies and deployment processes"
                    : "Знание методологий тестирования и процессов развертывания"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Jest",
                    "React Testing Library",
                    "Git",
                    "CI/CD",
                    "Docker",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {language === "en" ? "Soft Skills" : "Гибкие навыки"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {language === "en"
              ? "Professional qualities valued in global work environments"
              : "Профессиональные качества, ценимые в глобальной рабочей среде"}
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {/* European Work Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                {language === "en"
                  ? "European Work Culture"
                  : "Европейская рабочая культура"}
              </h3>
              <ul className="space-y-3">
                {[
                  language === "en"
                    ? "Work-Life Balance"
                    : "Баланс работы и личной жизни",
                  language === "en"
                    ? "Direct Communication"
                    : "Прямая коммуникация",
                  language === "en"
                    ? "Autonomy & Independence"
                    : "Автономия и независимость",
                  language === "en"
                    ? "Structured Problem Solving"
                    : "Структурированное решение проблем",
                  language === "en"
                    ? "Precision & Attention to Detail"
                    : "Точность и внимание к деталям",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* American Work Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                {language === "en"
                  ? "American Work Culture"
                  : "Американская рабочая культура"}
              </h3>
              <ul className="space-y-3">
                {[
                  language === "en"
                    ? "Entrepreneurial Mindset"
                    : "Предпринимательское мышление",
                  language === "en"
                    ? "Result-Oriented Approach"
                    : "Ориентация на результат",
                  language === "en"
                    ? "Adaptability & Flexibility"
                    : "Адаптивность и гибкость",
                  language === "en"
                    ? "Proactive Communication"
                    : "Проактивная коммуникация",
                  language === "en"
                    ? "Leadership & Initiative"
                    : "Лидерство и инициативность",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Asian Work Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">
                {language === "en"
                  ? "Asian Work Culture"
                  : "Азиатская рабочая культура"}
              </h3>
              <ul className="space-y-3">
                {[
                  language === "en"
                    ? "Team Harmony & Collaboration"
                    : "Гармония в команде и сотрудничество",
                  language === "en"
                    ? "Respect for Hierarchy"
                    : "Уважение к иерархии",
                  language === "en"
                    ? "Continuous Improvement"
                    : "Непрерывное совершенствование",
                  language === "en"
                    ? "Diligence & Dedication"
                    : "Усердие и преданность делу",
                  language === "en"
                    ? "Long-term Relationship Building"
                    : "Построение долгосрочных отношений",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-muted/30 md:py-24">
        <div className="container max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.about.companiesTitle}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-card p-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-16 rounded-full"
                />
                <p className="mt-4 font-medium">{company.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
