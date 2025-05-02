import { Language } from "@/contexts/LanguageContext";

type TranslationKeys = {
  name: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    bio: string;
    experience: string;
    experienceTitle: string;
    companies: string;
    companiesTitle: string;
    downloadResume: string;
  };
  projects: {
    title: string;
    viewLive: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    minRead: string;
  };
  footer: {
    rights: string;
  };
};

type Translations = {
  [key in Language]: TranslationKeys;
};

export const translations: Translations = {
  en: {
    name: "John Doe",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    home: {
      title: "React & Laravel Developer",
      subtitle:
        "Building modern web applications with cutting-edge technologies",
      cta: "View My Work",
    },
    about: {
      title: "About Me",
      bio: "I am a full-stack developer specializing in React for frontend and Laravel for backend development. With over 5 years of experience, I've worked on various projects ranging from small business websites to complex enterprise applications.",
      experience: "Professional Experience",
      experienceTitle: "My Experience",
      companies: "Companies I've Worked With",
      companiesTitle: "Work History",
      downloadResume: "Download Resume",
    },
    projects: {
      title: "My Projects",
      viewLive: "View Live",
      viewCode: "View Code",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Feel free to reach out for collaborations or just a friendly hello",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formSuccess: "Message sent successfully!",
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts, tutorials and insights about web development",
      readMore: "Read More",
      minRead: "min read",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  ru: {
    name: "Иван Иванов",
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      blog: "Блог",
      contact: "Контакты",
    },
    home: {
      title: "React и Laravel Разработчик",
      subtitle:
        "Создаю современные веб-приложения с использованием передовых технологий",
      cta: "Посмотреть мои работы",
    },
    about: {
      title: "Обо мне",
      bio: "Я full-stack разработчик, специализирующийся на React для фронтенда и Laravel для бэкенда. С опытом более 5 лет, я работал над различными проектами от небольших бизнес-сайтов до сложных корпоративных приложений.",
      experience: "Профессиональный опыт",
      experienceTitle: "Мой опыт",
      companies: "Компании, с которыми я работал",
      companiesTitle: "История работы",
      downloadResume: "Скачать резюме",
    },
    projects: {
      title: "Мои проекты",
      viewLive: "Открыть сайт",
      viewCode: "Посмотреть код",
    },
    contact: {
      title: "Связаться со мной",
      subtitle:
        "Не стесняйтесь обращаться для сотрудничества или просто поздороваться",
      formName: "Имя",
      formEmail: "Электронная почта",
      formMessage: "Сообщение",
      formSubmit: "Отправить сообщение",
      formSuccess: "Сообщение успешно отправлено!",
    },
    blog: {
      title: "Блог",
      subtitle: "Мысли, руководства и идеи о веб-разработке",
      readMore: "Читать далее",
      minRead: "мин чтения",
    },
    footer: {
      rights: "Все права защищены.",
    },
  },
};
