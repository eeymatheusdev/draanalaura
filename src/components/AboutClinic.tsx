import { Award, Heart, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutClinic = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência",
      description: "Profissionais altamente qualificados e atualizados com as melhores técnicas do mercado",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Protocolos rigorosos de biossegurança e uso de equipamentos de última geração",
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Atendimento acolhedor e personalizado, respeitando as necessidades de cada paciente",
    },
    {
      icon: Star,
      title: "Resultados",
      description: "Compromisso com resultados naturais e harmoniosos que valorizam sua beleza",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
          Sobre a Clínica
        </h2>
        <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nossa clínica combina tecnologia de ponta com atendimento humanizado para oferecer 
          os melhores resultados em odontologia e harmonização facial. Cada procedimento é 
          planejado de forma personalizada, respeitando as características únicas de cada paciente.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
