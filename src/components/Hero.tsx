import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  const whatsappLink =
    "https://wa.me/5516994653366?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta!";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink via-white to-beige px-4 pt-20"
    >
      <div className="container mx-auto text-center max-w-4xl animate-fade-in">
        <Image
          src={logo}
          alt="Ana Laura Moretti - Cirurgiã Dentista"
          className="h-56 md:h-72 w-auto mx-auto mb-12 md:mb-16 transform translate-x-6 md:translate-x-8 transition-transform duration-500 hover:scale-105"
          priority
        />
        <h1 className="font-serif text-8xl md:text-6xl text-gold/90 font-bold mb-6">
          Sorria com Confiança
        </h1>
        <p className="text-base md:text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
          Clínica Odontológica e Harmonização Facial com excelência em cuidados
          estéticos e odontológicos
        </p>
        <Button
          asChild
          size="lg"
          className="bg-pink hover:bg-pink/90 text-accent-foreground font-semibold text-base px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-slow"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Agende sua Consulta
          </a>
        </Button>
      </div>
    </section>
  );
};
