import { BlogPost } from "@/hooks/useBlogPosts";

// This service would normally fetch data from an external API
// For now, we're using static data but structured in a way that makes it easy to replace with API calls later

export const BlogService = {
  // Fetch all blog posts
  getAllPosts: async (): Promise<BlogPost[]> => {
    // In a real implementation, this would be an API call
    // return await fetch('https://api.example.com/posts').then(res => res.json());

    // For now, return static data
    return Promise.resolve(staticBlogPosts);
  },

  // Fetch a single blog post by slug
  getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    // In a real implementation, this would be an API call
    // return await fetch(`https://api.example.com/posts/${slug}`).then(res => res.json());

    // For now, search in static data
    const post = staticBlogPosts.find((post) => post.slug === slug);
    return Promise.resolve(post || null);
  },

  // Fetch posts by tag
  getPostsByTag: async (tag: string): Promise<BlogPost[]> => {
    // In a real implementation, this would be an API call
    // return await fetch(`https://api.example.com/posts?tag=${tag}`).then(res => res.json());

    // For now, filter static data
    const posts = staticBlogPosts.filter((post) => post.tags?.includes(tag));
    return Promise.resolve(posts);
  },
};

// Static blog posts data
// In a real application, this would come from an API
const staticBlogPosts: BlogPost[] = [
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
      en: "<p>Creating responsive web applications is essential in today's multi-device world. In this article, we'll explore how to build truly responsive React applications that work seamlessly across all devices.</p><h2>Understanding Responsive Design</h2><p>Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.</p>",
      ru: "<p>Создание адаптивных веб-приложений необходимо в современном мире с множеством устройств. В этой статье мы рассмотрим, как создавать по-настоящему адаптивные приложения React.</p><h2>Понимание адаптивного дизайна</h2><p>Адаптивный дизайн — это подход к веб-дизайну, который обеспечивает хорошее отображение веб-страниц на различных устройствах.</p>",
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
      en: "<p>Laravel is a powerful PHP framework, but without proper optimization, your application might not perform as well as it could. In this article, we'll explore various techniques to optimize your Laravel application's performance.</p><h2>Database Optimization</h2><p>The database is often the bottleneck in web applications. Here are some ways to optimize your database queries.</p>",
      ru: "<p>Laravel — мощный PHP-фреймворк, но без правильной оптимизации ваше приложение может работать не так хорошо, как могло бы. В этой статье мы рассмотрим различные методы оптимизации производительности вашего приложения Laravel.</p><h2>Оптимизация базы данных</h2><p>База данных часто является узким местом в веб-приложениях.</p>",
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
      en: "<p>State management is a critical aspect of React applications. As your application grows, managing state becomes more complex. In this article, we'll explore modern state management solutions for React applications.</p><h2>Local Component State</h2><p>React's built-in useState hook is perfect for managing local component state.</p>",
      ru: "<p>Управление состоянием — критический аспект приложений React. По мере роста вашего приложения управление состоянием становится более сложным. В этой статье мы рассмотрим современные решения для управления состоянием в приложениях React.</p><h2>Локальное состояние компонента</h2><p>Встроенный хук useState в React идеально подходит для управления локальным состоянием компонента.</p>",
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
      en: "<p>React is one of the most popular JavaScript libraries for building user interfaces. If you're new to React, this guide will help you get started with the basics.</p><h2>Setting Up Your Development Environment</h2><p>Before you start coding, you need to set up your development environment. You'll need Node.js and npm installed on your computer.</p>",
      ru: "<p>React — одна из самых популярных JavaScript-библиотек для создания пользовательских интерфейсов. Если вы новичок в React, это руководство поможет вам начать с основ.</p><h2>Настройка среды разработки</h2><p>Прежде чем начать кодирование, вам нужно настроить среду разработки. Вам понадобятся Node.js и npm, установленные на вашем компьютере.</p>",
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
      en: "<p>Artificial Intelligence is revolutionizing the way we build websites and applications. In this article, we'll explore the top AI tools that frontend developers should be using in 2024.</p><h2>AI-Powered Code Assistants</h2><p>Code assistants like GitHub Copilot and Tabnine use machine learning to suggest code completions as you type, making development faster and more efficient.</p>",
      ru: "<p>Искусственный интеллект революционизирует способ создания веб-сайтов и приложений. В этой статье мы рассмотрим лучшие инструменты ИИ, которые фронтенд-разработчики должны использовать в 2024 году.</p><h2>Помощники по коду на базе ИИ</h2><p>Помощники по коду, такие как GitHub Copilot и Tabnine, используют машинное обучение для предложения завершения кода во время набора текста, делая разработку быстрее и эффективнее.</p>",
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
      en: "<p>CSS Grid and Flexbox are two powerful layout systems in CSS. Understanding when to use each can help you create more efficient and maintainable layouts.</p><h2>Understanding Flexbox</h2><p>Flexbox is designed for one-dimensional layouts - either a row or a column. It's perfect for components like navigation menus, form elements, and other UI components.</p>",
      ru: "<p>CSS Grid и Flexbox — это две мощные системы макетов в CSS. Понимание того, когда использовать каждую из них, может помочь вам создавать более эффективные и поддерживаемые макеты.</p><h2>Понимание Flexbox</h2><p>Flexbox предназначен для одномерных макетов - либо строка, либо столбец. Он идеально подходит для таких компонентов, как навигационные меню, элементы форм и другие компоненты пользовательского интерфейса.</p>",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    date: "2024-02-20",
    readTime: 7,
    author: "John Doe",
    slug: "css-grid-vs-flexbox",
    tags: ["CSS", "Layout", "Frontend"],
  },
];
