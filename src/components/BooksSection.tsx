import bookProfitFirst from "@/assets/book-profit-first.jpg";
import bookEmyth from "@/assets/book-emyth.jpg";
import bookEssentialism from "@/assets/book-essentialism.jpg";
import bookReceitaPrevisivel from "@/assets/book-receita-previsivel.jpg";
import bookVendaDesafiadora from "@/assets/book-venda-desafiadora.jpg";

const books = [
  {
    image: bookProfitFirst,
    title: "Profit First (O Lucro Primeiro)",
    description:
      "Aprenda a se pagar primeiro e garanta que sua empresa sempre tenha lucro, revertendo a lógica tradicional do fluxo de caixa.",
    tool: "+ Planilha 'O Lucro Primeiro em 5 Minutos'",
  },
  {
    image: bookEmyth,
    title: "O Mito do Empreendedor",
    description:
      "Descubra a diferença entre ser um técnico escravo do seu negócio e um empreendedor que constrói sistemas que trabalham para você.",
    tool: "+ Checklist 'Minha Primeira SOP (Standard Operating Procedure)'",
  },
  {
    image: bookEssentialism,
    title: "Essencialismo",
    description:
      "Domine a arte de focar nos 20% de atividades que geram 80% dos resultados, eliminando a sobrecarga e o caos do dia a dia.",
    tool: "+ Matriz de Eisenhower Simplificada para Empreendedores",
  },
  {
    image: bookReceitaPrevisivel,
    title: "Receita Previsível",
    description:
      "Aprenda a criar um processo de vendas escalável e previsível, transformando seu negócio em uma máquina de geração de receita constante.",
    tool: "+ Template 'Pipeline de Vendas Simplificado'",
  },
  {
    image: bookVendaDesafiadora,
    title: "A Venda Desafiadora",
    description:
      "Descubra como os melhores vendedores desafiam seus clientes com insights valiosos, ensinando-os a pensar de forma diferente sobre seus problemas.",
    tool: "+ Script 'Abordagem Desafiadora em 3 Passos'",
  },
];

const BooksSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-foreground">
          Um MBA para Empreendedores, entregue em seu e-mail em{" "}
          <span className="text-primary">5 minutos</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-card rounded-xl p-6 flex flex-col items-center text-center border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <img
                src={book.image}
                alt={`Capa do livro ${book.title}`}
                className="w-48 h-64 object-cover rounded-lg mb-6 shadow-lg"
              />
              <h3 className="text-xl font-bold mb-3 text-foreground">{book.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {book.description}
              </p>
              <p className="text-primary font-semibold text-sm">{book.tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
