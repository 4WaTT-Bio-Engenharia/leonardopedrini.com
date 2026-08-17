import PageLayout from "@/components/layout/PageLayout";
import CTAButton from "@/components/conversion/CTAButton";

interface PlaceholderPageProps {
  title: string;
  description: string;
  path: string;
  eyebrow?: string;
}

/**
 * Página placeholder mínima — usa PageLayout (header/footer/SEO).
 * Será substituída pela versão com copy final por outro agente.
 */
const PlaceholderPage = ({ title, description, path, eyebrow }: PlaceholderPageProps) => (
  <PageLayout title={title} description={description} path={path}>
    <section className="border-b border-border">
      <div className="container py-24 md:py-36">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-foreground">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <div className="mt-10">
            <CTAButton to="/diagnostico" size="lg" trackingParams={{ cta_position: "placeholder_hero", page: path }}>
              Diagnóstico gratuito
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PlaceholderPage;
