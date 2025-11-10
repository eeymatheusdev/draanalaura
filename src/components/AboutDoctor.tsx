import dentistaFoto from "@/assets/perfil.jpg";

export const AboutDoctor = () => {
  return (
    <section id="about-doctor" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Dra. Ana Laura Moretti
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Cirurgiã-Dentista especializada em Clínica Geral e Harmonização
              Facial, com formação acadêmica de excelência e constante
              atualização em técnicas e procedimentos de ponta.
            </p>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Com anos de experiência, busco sempre oferecer o melhor
              atendimento, priorizando a segurança, o conforto e a satisfação de
              cada paciente.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Minha missão é transformar sorrisos e realçar a autoestima através
              de tratamentos personalizados e resultados naturais.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={dentistaFoto}
              alt="Dra. Ana Laura Moretti"
              className="rounded-lg shadow-2xl w-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
