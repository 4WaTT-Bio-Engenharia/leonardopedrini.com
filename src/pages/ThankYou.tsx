import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
          Pronto! Sua biblioteca foi enviada para o seu e-mail.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Verifique sua caixa de entrada (e a de spam, por via das dúvidas).
        </p>
        <Link
          to="/"
          className="text-primary font-semibold hover:underline"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
