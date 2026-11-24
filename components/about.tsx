"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca de mí</SectionHeading>
      <p className="mb-3">
        Soy <span className="font-medium">desarrollador full stack</span> con{" "}
        <span className="font-medium">5 años de experiencia</span> en productos
        web y móviles. Hoy me enfoco en llevar productos{" "}
        <span className="font-medium">de cero a producción</span> usando IA en
        cada etapa.
      </p>
      <p className="mb-3">
        Empiezo por el producto: prototipos y wireframes con{" "}
        <span className="font-medium">Claude y Stitch</span>, sistemas de diseño
        con <span className="font-medium">Claude Design conectado a Figma</span>,
        documentados en archivos <span className="italic">DESIGN.md</span> que
        sirven de fuente de verdad para el equipo y para los agentes. Después
        diseño la arquitectura del frontend (
        <span className="font-medium">React, Next.js, React Native</span>) y del
        backend (<span className="font-medium">NestJS, Node.js, Python</span>),
        modelo la base de datos y despliego en{" "}
        <span className="font-medium">AWS, VPS o Vercel</span> con despliegues
        continuos y automatizados.
      </p>
      <p className="mb-3">
        Trabajo con un{" "}
        <span className="font-medium">flujo estandarizado y asistido por agentes</span>.
        Creo <span className="font-medium">skills y servidores MCP</span> que
        automatizan tareas concretas, como revisar despliegues y errores con
        Sentry y Vercel, revisar la UI o analizar tests, y sé distinguir cuándo
        vale la pena automatizar un paso. Orquesto varios agentes en paralelo
        con <span className="font-medium">Orca</span> y combino{" "}
        <span className="font-medium">Claude Code, Cursor y Grok</span> según
        la tarea. Mantengo contexto persistente entre
        sesiones con wikis LLM y memoria para agentes como Engram, lo que me
        permite coordinar varios agentes sobre un mismo proyecto sin perder el
        hilo.
      </p>
      <p>
        También he integrado IA dentro de los productos que construyo:{" "}
        <span className="font-medium">servidores MCP e integraciones con LLMs</span>{" "}
        en Leasey.AI, y{" "}
        <a href="https://buucly.com/" target="_blank" className="italic">
          Buucly.com
        </a>
        , una plataforma que genera libros personalizados con IA. Además enseño
        desarrollo full stack en <span className="font-medium">Soy Henry</span>.
      </p>
    </motion.section>
  );
}
