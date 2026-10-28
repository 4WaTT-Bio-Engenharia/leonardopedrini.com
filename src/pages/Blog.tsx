import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Reveal from "@/components/motion/Reveal";
import NewsletterSignupForm from "@/components/sections/NewsletterSignupForm";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/components/SEO";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Leonardo Pedrini",
  description: "Artigos sobre energia, biogás, biometano, energia solar, baterias e gestão de projetos.",
  url: `${SITE_URL}/blog`,
  author: { "@type": "Person", name: "Leonardo Pedrini", url: SITE_URL },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));

const Blog = () => (
  <PageLayout
    title="Blog | Leonardo Pedrini"
    description="Artigos de Leonardo Pedrini sobre energia, biogás, biometano, energia solar, armazenamento em baterias e gestão de projetos."
    path="/blog"
    jsonLd={blogJsonLd}
    flush
  >
    <section className="relative overflow-hidden bg-navy-hero text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <div className="eyebrow text-cobre-light">
            <span className="h-px w-10 bg-cobre-light/70" />
            Blog
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-papel md:text-6xl">
            Energia e gestão explicadas com clareza.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-papel/65 md:text-lg">
            Experiências, análises e aprendizados para quem precisa avaliar investimentos, conduzir projetos e entender decisões técnicas.
          </p>
        </Reveal>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {posts.length > 0 ? (
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={Math.min(index * 90, 360)} className="h-full">
                <article className="card-lux h-full">
                  <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col p-8">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark">
                      <span>{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-cobre" aria-hidden />
                      <time dateTime={post.publishedAt} className="text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-foreground transition-colors group-hover:text-cobre-dark">
                      {post.title}
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark">
                      Ler artigo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ) : (
      <section className="border-b border-border">
        <div className="container py-20 md:py-28">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <BookOpen className="mx-auto h-10 w-10 text-cobre-dark" strokeWidth={1.4} aria-hidden />
              <h2 className="mt-7 font-display text-3xl font-extrabold tracking-[-0.02em] text-foreground md:text-4xl">
                Os primeiros artigos estão em preparação.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Em breve, artigos sobre energia, biogás, solar e gestão de projetos. Publicarei somente conteúdos revisados, com informações que possam ser úteis na prática.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-border bg-card p-7 md:p-9">
              <h3 className="text-center font-display text-xl font-bold text-foreground">Receba os próximos artigos</h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
                Deixe seu e-mail para acompanhar as publicações e os demais conteúdos da newsletter.
              </p>
              <NewsletterSignupForm
                source="blog_empty"
                className="mt-7"
                note="Sem spam. Cancele quando quiser."
              />
            </div>
          </Reveal>
        </div>
      </section>
    )}
  </PageLayout>
);

export default Blog;
