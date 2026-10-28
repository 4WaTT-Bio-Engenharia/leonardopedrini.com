import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CTAButton from "@/components/conversion/CTAButton";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/components/SEO";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <PageLayout
        title="Artigo não encontrado | Leonardo Pedrini"
        description="O artigo informado não está disponível no blog de Leonardo Pedrini."
        path={`/blog/${slug || ""}`}
        noindex
      >
        <section className="border-b border-border">
          <div className="container py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center text-cobre-dark">Blog</p>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.025em] text-foreground">
                Artigo não encontrado.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Este endereço pode ter mudado ou o conteúdo ainda não foi publicado.
              </p>
              <Link
                to="/blog"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cobre-dark hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Voltar para o blog
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/og-image.png`,
    author: { "@type": "Person", name: "Leonardo Pedrini", url: SITE_URL },
    publisher: { "@type": "Person", name: "Leonardo Pedrini", url: SITE_URL },
  };

  return (
    <PageLayout
      title={`${post.title} | Leonardo Pedrini`}
      description={post.description}
      path={`/blog/${post.slug}`}
      image={post.image}
      type="article"
      jsonLd={articleJsonLd}
    >
      <article>
        <header className="border-b border-border bg-secondary/35">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cobre-dark hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Blog
              </Link>
              <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.16em] text-cobre-dark">
                {post.category}
              </p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.description}</p>
              <div className="mt-7 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.readingTime && <span>{post.readingTime}</span>}
              </div>
            </div>
          </div>
        </header>

        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-8 text-foreground/80 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-14 rounded-lg border border-cobre/35 bg-cobre-soft/40 p-7 md:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">Tem um projeto para avaliar?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Conte o contexto da sua operação e o que precisa ser decidido. A conversa inicial ajuda a definir o próximo passo.
              </p>
              <CTAButton to="/#contato" className="mt-6" trackingParams={{ cta_position: "blog_article", article: post.slug }}>
                Conversar sobre um projeto
              </CTAButton>
            </div>
            <Link
              to="/blog"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cobre-dark hover:text-foreground"
            >
              Ver todos os artigos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
