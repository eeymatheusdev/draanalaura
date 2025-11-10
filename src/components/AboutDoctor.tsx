"use client";

import dentistaFoto from "@/assets/perfil.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutDoctor = () => {
  return (
    <section id="about-doctor" className="py-20 px-4 bg-card overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gold">
              Dra. Ana Laura
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Com paixão pela odontologia e dedicação ao bem-estar dos
              pacientes, Dra. Ana Laura é especialista em Clínico Geral e
              Harmonização Facial, unindo técnica, arte e cuidado humano para
              transformar sorrisos e elevar a autoestima.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src={dentistaFoto}
              alt="Dra. Ana Laura Moretti"
              className="rounded-2xl shadow-2xl w-72 h-80 md:w-80 md:h-96 object-cover border-4 border-pink transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
