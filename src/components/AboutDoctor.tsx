import dentistaFoto from "@/assets/perfil.jpg";
import Image from "next/image";

export const AboutDoctor = () => {
  return (
    <section id="about-doctor" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-2 md:gap-6 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
              Dra. Ana Laura
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Com paixão pela odontologia e dedicação ao bem-estar dos
              pacientes, Dra. Ana Laura é especialista em Clínico Geral e
              Harmonização Facial, unindo técnica, arte e cuidado humano para
              transformar sorrisos e elevar a autoestima.
            </p>
          </div>
          <div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={dentistaFoto}
                alt="Dra. Ana Laura Moretti"
                className="rounded-2xl shadow-2xl w-72 h-80 md:w-80 md:h-96 object-cover border-4 border-pink transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
