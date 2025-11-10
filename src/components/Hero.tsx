import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/20 to-secondary/40 px-4 pt-20"
    >
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <img
          src={logo}
          alt="Ana Laura Moretti - Cirurgiã Dentista"
          className="h-32 md:h-40 mx-auto mb-8 transition-transform duration-500 hover:scale-105"
        />
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-accent">
          Seu Sorriso, Nossa Arte
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
          Clínica Odontológica e Harmonização Facial com excelência em cuidados
          estéticos e odontológicos
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5" />
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer"></a>
          Agende sua Consulta
        </Button>
      </div>
    </section>
  );
};
