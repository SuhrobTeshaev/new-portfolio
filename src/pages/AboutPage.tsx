d=CB&backgroundColor=6366f1",
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
              <div key={index} className="rounded-lg bg-card p-6 shadow-sm">
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
              </div>
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
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-card p-6 shadow-sm"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-16 rounded-full"
                />
                <p className="mt-4 font-medium">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
