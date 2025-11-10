import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const CallToAction = () => {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!";

  return (
    <section
      id="call-to-action"
      className="py-20 px-4 bg-gradient-to-br from-pink via-white to-beige text-primary"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <Calendar className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Pronto para Transformar seu Sorriso?
        </h2>
        <p className="text-xl mb-16 text-foreground">
          Agende sua avaliação e descubra como podemos ajudar você a conquistar
          o sorriso e a aparência que sempre desejou.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-pink hover:bg-pink/90 text-accent-foreground font-semibold text-base px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-slow"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};
