import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, this would send the form data to a server
    alert(
      language === "en"
        ? "Message sent successfully!"
        : "Сообщение успешно отправлено!",
    );
  };

  const contactLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com",
      color: "bg-gray-800 dark:bg-gray-700",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com",
      color: "bg-blue-600 dark:bg-blue-700",
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:example@example.com",
      color: "bg-red-500 dark:bg-red-600",
    },
    {
      name: "Telegram",
      icon: <Send className="h-6 w-6" />,
      url: "https://t.me/username",
      color: "bg-blue-400 dark:bg-blue-500",
    },
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
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {language === "en" ? "Get in Touch" : "Связаться со мной"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              {language === "en"
                ? "Feel free to reach out for collaborations or just a friendly hello"
                : "Не стесняйтесь обращаться для сотрудничества или просто поздороваться"}
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 rounded-lg ${link.color} px-6 py-3 text-white transition-transform hover:scale-105`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <div className="mt-16 mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="rounded-lg bg-card p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">
                {language === "en" ? "Send a Message" : "Отправить сообщение"}
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    {language === "en" ? "Name" : "Имя"}
                  </label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {language === "en"
                        ? "Name is required"
                        : "Имя обязательно"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    {language === "en" ? "Email" : "Электронная почта"}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+\.\S+$/,
                    })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {language === "en"
                        ? "Valid email is required"
                        : "Требуется действительный email"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    {language === "en" ? "Message" : "Сообщение"}
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: true })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {language === "en"
                        ? "Message is required"
                        : "Сообщение обязательно"}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  {language === "en" ? "Send Message" : "Отправить сообщение"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
