import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlogPosts, BlogPost } from "@/hooks/useBlogPosts";

// This would normally come from an API or database
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
      en: `<p>Creating responsive web applications is essential in today's multi-device world. In this article, we'll explore how to build truly responsive React applications that work seamlessly across all devices.</p>

<h2>Understanding Responsive Design</h2>
<p>Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's about creating websites that look good on all devices.</p>

<h2>Using Media Queries</h2>
<p>Media queries are a key component of responsive design. They allow you to apply different styles based on the characteristics of the device, such as its width, height, or orientation.</p>

<pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}</code></pre>

<h2>Flexible Layouts with Flexbox and Grid</h2>
<p>CSS Flexbox and Grid are powerful tools for creating flexible layouts. They allow you to create complex layouts that adjust automatically to different screen sizes.</p>

<h2>React Components for Responsive Design</h2>
<p>In React, you can create components that render differently based on the screen size. This can be done using libraries like react-responsive or by using custom hooks that track the window size.</p>

<pre><code>import { useMediaQuery } from 'react-responsive';

function MyComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}</code></pre>

<h2>Conclusion</h2>
<p>Building responsive web applications with React requires a combination of CSS techniques and React-specific approaches. By understanding these concepts and applying them correctly, you can create applications that provide an excellent user experience across all devices.</p>`,
      ru: `<p>Создание адаптивных веб-приложений необходимо в современном мире с множеством устройств. В этой статье мы рассмотрим, как создавать по-настоящему адаптивные приложения React, которые безупречно работают на всех устройствах.</p>

<h2>Понимание адаптивного дизайна</h2>
<p>Адаптивный дизайн — это подход к веб-дизайну, который обеспечивает хорошее отображение веб-страниц на различных устройствах и размерах окон или экранов. Речь идет о создании веб-сайтов, которые хорошо выглядят на всех устройствах.</p>

<h2>Использование медиа-запросов</h2>
<p>Медиа-запросы являются ключевым компонентом адаптивного дизайна. Они позволяют применять различные стили в зависимости от характеристик устройства, таких как его ширина, высота или ориентация.</p>

<pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}</code></pre>

<h2>Гибкие макеты с Flexbox и Grid</h2>
<p>CSS Flexbox и Grid — мощные инструменты для создания гибких макетов. Они позволяют создавать сложные макеты, которые автоматически адаптируются к различным размерам экрана.</p>

<h2>Компоненты React для адаптивного дизайна</h2>
<p>В React вы можете создавать компоненты, которые отображаются по-разному в зависимости от размера экрана. Это можно сделать с помощью библиотек, таких как react-responsive, или с помощью пользовательских хуков, которые отслеживают размер окна.</p>

<pre><code>import { useMediaQuery } from 'react-responsive';

function MyComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}</code></pre>

<h2>Заключение</h2>
<p>Создание адаптивных веб-приложений с React требует сочетания техник CSS и подходов, специфичных для React. Понимая эти концепции и правильно применяя их, вы можете создавать приложения, которые обеспечивают отличный пользовательский опыт на всех устройствах.</p>`,
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
      en: `<p>Laravel is a powerful PHP framework, but without proper optimization, your application might not perform as well as it could. In this article, we'll explore various techniques to optimize your Laravel application's performance.</p>

<h2>Database Optimization</h2>
<p>The database is often the bottleneck in web applications. Here are some ways to optimize your database queries:</p>
<ul>
  <li>Use eager loading to avoid N+1 query problems</li>
  <li>Index your database columns properly</li>
  <li>Use query caching</li>
</ul>

<h2>Caching Strategies</h2>
<p>Laravel provides a robust caching system that can significantly improve performance:</p>
<pre><code>// Cache a value for 60 minutes
Cache::put('key', 'value', 60);

// Retrieve a value from the cache
$value = Cache::get('key');</code></pre>

<h2>Route Caching</h2>
<p>Laravel allows you to cache your routes for faster route registration:</p>
<pre><code>php artisan route:cache</code></pre>

<h2>Configuration Caching</h2>
<p>You can cache your configuration files to reduce the number of files that need to be loaded:</p>
<pre><code>php artisan config:cache</code></pre>

<h2>Optimizing Composer Autoloader</h2>
<p>Optimize the Composer autoloader for better performance:</p>
<pre><code>composer install --optimize-autoloader --no-dev</code></pre>

<h2>Using Laravel Horizon for Queue Management</h2>
<p>Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel-powered Redis queues.</p>

<h2>Conclusion</h2>
<p>By implementing these optimization techniques, you can significantly improve the performance of your Laravel applications. Remember that optimization should be an ongoing process, and it's important to measure the impact of your changes to ensure they're having the desired effect.</p>`,
      ru: `<p>Laravel — мощный PHP-фреймворк, но без правильной оптимизации ваше приложение может работать не так хорошо, как могло бы. В этой статье мы рассмотрим различные методы оптимизации производительности вашего приложения Laravel.</p>

<h2>Оптимизация базы данных</h2>
<p>База данных часто является узким местом в веб-приложениях. Вот несколько способов оптимизации ваших запросов к базе данных:</p>
<ul>
  <li>Используйте жадную загрузку (eager loading) для избежания проблем с N+1 запросами</li>
  <li>Правильно индексируйте столбцы базы данных</li>
  <li>Используйте кэширование запросов</li>
</ul>

<h2>Стратегии кэширования</h2>
<p>Laravel предоставляет надежную систему кэширования, которая может значительно повысить производительность:</p>
<pre><code>// Кэшировать значение на 60 минут
Cache::put('key', 'value', 60);

// Получить значение из кэша
$value = Cache::get('key');</code></pre>

<h2>Кэширование маршрутов</h2>
<p>Laravel позволяет кэшировать ваши маршруты для более быстрой регистрации маршрутов:</p>
<pre><code>php artisan route:cache</code></pre>

<h2>Кэширование конфигурации</h2>
<p>Вы можете кэшировать ваши файлы конфигурации, чтобы уменьшить количество файлов, которые необходимо загрузить:</p>
<pre><code>php artisan config:cache</code></pre>

<h2>Оптимизация автозагрузчика Composer</h2>
<p>Оптимизируйте автозагрузчик Composer для лучшей производительности:</p>
<pre><code>composer install --optimize-autoloader --no-dev</code></pre>

<h2>Использование Laravel Horizon для управления очередями</h2>
<p>Laravel Horizon предоставляет красивую панель управления и конфигурацию на основе кода для ваших очередей Redis, работающих на Laravel.</p>

<h2>Заключение</h2>
<p>Внедряя эти методы оптимизации, вы можете значительно повысить производительность ваших приложений Laravel. Помните, что оптимизация должна быть непрерывным процессом, и важно измерять влияние ваших изменений, чтобы убедиться, что они дают желаемый эффект.</p>`,
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
      en: `<p>State management is a critical aspect of React applications. As your application grows, managing state becomes more complex. In this article, we'll explore modern state management solutions for React applications.</p>

<h2>Local Component State</h2>
<p>React's built-in useState hook is perfect for managing local component state:</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}</code></pre>

<h2>Context API</h2>
<p>React's Context API allows you to share state across components without prop drilling:</p>
<pre><code>import { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  return useContext(CountContext);
}</code></pre>

<h2>Redux</h2>
<p>Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and are easy to test.</p>

<h2>Zustand</h2>
<p>Zustand is a small, fast, and scalable state management solution. It has a simple API and doesn't require boilerplate code:</p>
<pre><code>import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}</code></pre>

<h2>Jotai</h2>
<p>Jotai is an atomic approach to global React state management. It's inspired by Recoil and provides a simpler API:</p>
<pre><code>import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}</code></pre>

<h2>Conclusion</h2>
<p>There's no one-size-fits-all solution for state management in React. The best approach depends on your application's specific needs. For simple applications, React's built-in state management might be sufficient. For more complex applications, you might need a more robust solution like Redux, Zustand, or Jotai.</p>`,
      ru: `<p>Управление состоянием — критический аспект приложений React. По мере роста вашего приложения управление состоянием становится более сложным. В этой статье мы рассмотрим современные решения для управления состоянием в приложениях React.</p>

<h2>Локальное состояние компонента</h2>
<p>Встроенный хук useState в React идеально подходит для управления локальным состоянием компонента:</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}</code></pre>

<h2>Context API</h2>
<p>Context API в React позволяет вам делиться состоянием между компонентами без передачи пропсов через все уровни:</p>
<pre><code>import { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  return useContext(CountContext);
}</code></pre>

<h2>Redux</h2>
<p>Redux — это предсказуемый контейнер состояния для JavaScript-приложений. Он помогает вам писать приложения, которые ведут себя последовательно и легко тестируются.</p>

<h2>Zustand</h2>
<p>Zustand — это небольшое, быстрое и масштабируемое решение для управления состоянием. У него простой API, и он не требует шаблонного кода:</p>
<pre><code>import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
}</code></pre>

<h2>Jotai</h2>
<p>Jotai — это атомарный подход к глобальному управлению состоянием в React. Он вдохновлен Recoil и предоставляет более простой API:</p>
<pre><code>import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}</code></pre>

<h2>Заключение</h2>
<p>Не существует универсального решения для управления состоянием в React. Лучший подход зависит от конкретных потребностей вашего приложения. Для простых приложений встроенного управления состоянием React может быть достаточно. Для более сложных приложений вам может понадобиться более надежное решение, такое как Redux, Zustand или Jotai.</p>`,
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

interface BlogPostPageProps {
  mockParams?: { slug: string };
}

export default function BlogPostPage({ mockParams }: BlogPostPageProps = {}) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const params = mockParams || useParams<{ slug: string }>();
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { posts } = useBlogPosts();

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const foundPost = posts.find((p) => p.slug === slug);
      setPost(foundPost || null);
      setLoading(false);
    }, 300);
  }, [slug, posts]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  if (loading) {
    return (
      <div className="container max-w-screen-xl py-16">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container max-w-screen-xl py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold">
            {language === "en" ? "Post not found" : "Статья не найдена"}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {language === "en"
              ? "The blog post you're looking for doesn't exist or has been removed."
              : "Статья, которую вы ищете, не существует или была удалена."}
          </p>
          <Button asChild className="mt-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === "en" ? "Back to Blog" : "Вернуться к блогу"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <article className="py-16 md:py-24">
        <div className="container max-w-screen-xl">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === "en" ? "Back to Blog" : "Вернуться к блогу"}
              </Link>
            </Button>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              {post.title[language]}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 aspect-video overflow-hidden rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.title[language]}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="prose prose-lg dark:prose-invert mt-12 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content[language] }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
