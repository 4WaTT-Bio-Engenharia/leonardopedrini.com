const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="font-display text-lg font-semibold">
              <span className="text-primary">LP</span>
              <span className="text-foreground/60 mx-1.5">·</span>
              <span className="text-foreground">Leonardo Pedrini</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Leonardo Pedrini · Consultoria Estratégica para PMEs.
            <br className="md:hidden" /> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
