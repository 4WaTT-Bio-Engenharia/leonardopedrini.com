import leonardoImg from "@/assets/leonardo-about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <img
              src={leonardoImg}
              alt="Leonardo Pedrini"
              className="w-72 md:w-96 rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
              De projetos de{" "}
              <span className="text-primary">R$ 5 bilhões</span> para a
              realidade do seu MEI.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Meu nome é Leonardo Pedrini. Sou engenheiro, empreendedor e
              fundador de um ecossistema de infraestrutura e energia. Construí
              tudo do zero, sem herança e sem network. A mesma lógica de gestão
              que uso em projetos bilionários pode ser simplificada para ajudar
              você a ter mais lucro, mais tempo e mais liberdade. Meu objetivo é
              traduzir o complexo para o simples e te dar as ferramentas para
              crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
