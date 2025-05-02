import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:example@example.com",
      label: "Email",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      href: "https://t.me/username",
      label: "Telegram",
    },
  ];

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/blog", label: t.nav.blog },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand and Description */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center text-lg font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {language === "en"
                ? "Full-stack developer specializing in React and Laravel, creating modern and responsive web applications."
                : "Full-stack разработчик, специализирующийся на React и Laravel, создающий современные и адаптивные веб-приложения."}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {language === "en" ? "Navigation" : "Навигация"}
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {language === "en" ? "Connect" : "Связаться"}
            </h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                    aria-label={link.label}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
