import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Experience data
  const experiences = [
    {
      position:
        language === "en"
          ? "Senior Frontend Developer"
          : "Старший Frontend-разработчик",
      company:
        language === "en" ? "Tech Solutions Inc." : "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        language === "en"
          ? "Led the development of multiple React applications, implemented state management solutions, and mentored junior developers."
          : "Руководил разработкой нескольких приложений на React, внедрял решения для управления состоянием и наставлял младших разработчиков.",
    },
    {
      position:
        language === "en" ? "Full-stack Developer" : "Full-stack разработчик",
      company: language === "en" ? "WebCraft Studio" : "WebCraft Studio",
      period: "2018 - 2021",
      description:
        language === "en"
          ? "Developed and maintained web applications using React for frontend and Laravel for backend. Implemented RESTful APIs and database solutions."
          : "Разрабатывал и поддерживал веб-приложения, используя React для фронтенда и Laravel для бэкенда. Реализовывал RESTful API и решения для баз данных.",
    },
    {
      position:
        language === "en" ? "Junior Web Developer" : "Младший веб-разработчик",
      company: language === "en" ? "Digital Creations" : "Digital Creations",
      period: "2016 - 2018",
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
                      language === "en" ? "/resume-en.pdf" : "/resume-ru.pdf"
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

      {/* Companies Section */}
      <section className="py-16 md:py-24">
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
