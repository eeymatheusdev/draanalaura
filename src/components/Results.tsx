import { Card, CardContent } from "@/components/ui/card";
import resultadoBotox from "@/assets/resultado-botox.jpg";
import resultadoClareamento from "@/assets/resultado-clareamento.jpg";
import resultadoRestauracao from "@/assets/resultado-restauracao.jpg";

export const Results = () => {
  const results = [
    {
      title: "Toxina Botulínica",
      image: resultadoBotox,
      description: "Redução de linhas de expressão com resultados naturais",
    },
    {
      title: "Clareamento Dental",
      image: resultadoClareamento,
      description: "Sorriso mais branco e radiante",
    },
    {
      title: "Restauração Estética",
      image: resultadoRestauracao,
      description: "Harmonização completa do sorriso",
    },
  ];

  return (
    <section id="results" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in">
          Resultados que Transformam
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Veja a transformação real dos nossos pacientes com procedimentos personalizados
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {result.title}
                  </h3>
                  <p className="text-foreground/80">{result.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
