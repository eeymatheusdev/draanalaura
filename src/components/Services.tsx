import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Smile, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "Clínica Geral",
      description:
        "Atendimento odontológico completo com foco em prevenção e tratamento de problemas bucais.",
      treatments: [
        "Limpeza e Profilaxia",
        "Restaurações Estéticas",
        "Tratamento de Canal",
        "Periodontia",
        "Próteses e Implantes",
      ],
    },
    {
      icon: Sparkles,
      title: "Harmonização Facial",
      description:
        "Procedimentos estéticos faciais para realçar sua beleza natural com segurança e precisão.",
      treatments: [
        "Toxina Botulínica (Botox)",
        "Preenchimento Labial",
        "Bioestimuladores de Colágeno",
        "Harmonização do Sorriso",
        "Skinbooster",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Nossos Serviços
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oferecemos tratamentos personalizados para cuidar do seu sorriso e
          realçar sua beleza natural
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-pink transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-pink/20 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.treatments.map((treatment, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-foreground/80"
                    >
                      <span className="w-2 h-2 rounded-full bg-pink mr-3"></span>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
