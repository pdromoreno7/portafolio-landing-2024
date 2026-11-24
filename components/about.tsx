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
        <span className="font-medium">Software Engineer full stack</span> con{" "}
        <span className="font-medium">5 años</span> construyendo plataformas web
        y móviles para empresas y startups, y{" "}
        <span className="font-medium">más de 12 proyectos entregados</span>. Hoy
        me enfoco en{" "}
        <span className="font-medium">IA aplicada al desarrollo de software</span>
        : agentes, servidores MCP y automatización del ciclo de desarrollo.
      </p>
      <p className="mb-3">
        He trabajado en todas las capas del producto: diseño de interfaz,
        arquitectura frontend, APIs, bases de datos, integraciones con terceros
        y despliegue en la nube. Me importa que lo que entrego se pueda mantener
        y escalar, por eso aplico{" "}
        <span className="font-medium">
          principios SOLID, patrones de diseño, clean architecture y pruebas
          unitarias
        </span>
        , con <span className="font-medium">CI/CD</span> para que cada cambio
        llegue a producción de forma segura.
      </p>
      <p className="mb-3">
        En mis proyectos más recientes he integrado{" "}
        <span className="font-medium">agentes de IA al flujo de desarrollo</span>
        : skills y servidores MCP que automatizan la revisión de errores,
        despliegues, interfaz y pruebas, y{" "}
        <span className="font-medium">memoria persistente</span> para que varios
        agentes trabajen sobre el mismo proyecto sin perder el contexto.
      </p>
      <p>
        Fuera de mi trabajo con clientes construyo productos propios con IA,
        como{" "}
        <a href="https://buucly.com/" target="_blank" className="italic">
          Buucly
        </a>
        , y he enseñado desarrollo full stack a{" "}
        <span className="font-medium">más de 100 estudiantes</span>.
      </p>
    </motion.section>
  );
}
