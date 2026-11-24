import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import dePratiImg from '@/public/deprati.png';
import dugodoImg from '@/public/dugodo.png';
import buuclyImg from '@/public/buucly.png';
import type { StaticImageData } from 'next/image';

type Experience = {
  title: string;
  location: string;
  description: string | readonly string[];
  tech?: string;
  icon: React.ReactNode;
  date: string;
};

type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  // null = imagen pendiente; se muestra un placeholder
  imageUrl: StaticImageData | null;
};

export const links = [
  {
    name: 'Inicio',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Cómo trabajo',
    hash: '#process',
  },
  {
    name: 'Proyectos',
    hash: '#projects',
  },
  {
    name: 'Habilidades',
    hash: '#skills',
  },
  {
    name: 'Experiencia',
    hash: '#experience',
  },
  {
    name: 'Contacto',
    hash: '#contact',
  },
] as const;

export const experiencesData: readonly Experience[] = [
  {
    title: 'Software Engineer',
    location: 'Leasey.AI - Canada - Remoto',
    description: [
      'Desarrollo full stack en un monorepo: frontend en React y Next.js, BFF en NestJS.',
      'Servicios en Python y servidores MCP que conectan el producto con LLMs y agentes.',
      'Skills para agentes que automatizan tareas de desarrollo.',
      'Infraestructura en AWS.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: 'Enero 2025 - present',
  },
  {
    title: 'Full Stack Developer - Consultor externo',
    location: 'Movistar Colombia - Remoto',
    description:
      'Desarrollé funcionalidades en la landing page de pagos, en la aplicación móvil de Movistar Colombia con React Native y en el BFF (Backend for Frontend). Tecnologías: React, React Native, TypeScript, Node.js',
    icon: React.createElement(FaReact),
    date: 'Noviembre 2025 - Abril 2026',
  },
  {
    title: 'Full Stack Developer - Consultor externo',
    location: 'CREE Comunicaciones - Remoto',
    description: [
      'Desarrollé el Portal de Pagos v2 de punta a punta: frontend, backend e integraciones.',
      'Integración de pasarelas de pago (migración de Wompi a Mercado Pago) y del ERP Siigo para facturación y activación automática de servicios.',
      'Implementé monitoreo de errores con Sentry y skills para revisarlos, junto con agentes que verifican los errores de forma automática.',
      'Seguridad: verificación OTP antes del paso a producción, en cumplimiento de la Ley 1581 de protección de datos.',
      'Entregas por fases, con las decisiones técnicas documentadas.',
    ],
    tech: 'Next.js, React, TypeScript, GraphQL, Vercel, Sentry, Mercado Pago, Siigo',
    icon: React.createElement(CgWorkAlt),
    date: 'Noviembre 2024 - Abril 2025',
  },
  {
    title: 'Full-Stack Instructor in web development',
    location: 'Soy Henry - Full Remoto',
    description:
      'Instructor/profesor de desarrollo web frontend y backend modalidad part time. He enseñado a más de 100 estudiantes, abarcando temas como Programación orientada a objetos, testing, HTLM, CSS, JavaScript, Typescript, React js, Next js, Node.js, Express.js, Nest js, MongoDB y PostgresSQL',
    icon: React.createElement(CgWorkAlt),
    date: 'Julio 2024 - present',
  },
  {
    title: 'Frontend Developer | React Developer',
    location: 'Mutual SER',
    description: `Desarrollé mejoras, una aplicación web con React para poder hacer cargas masivas  de archivos, documentos y carpetas. Mejorando la visualización de carga y rendimiento de la aplicación en el navegador en un 40%`,
    icon: React.createElement(FaReact),
    date: '2022 - 2024',
  },
  {
    title: 'Ingeniero en desarrollo Drupal/Desarrollador React Native',
    location: 'Software One/Intergrupo - Full Remoto',
    description:
      'Logré puntuación alta en rendimiento para un proyecto de desarrollo de software frontend de un cliente reconocido a nivel nacional, reconocimiento en la adaptación técnica del perfil, calidad y compromiso.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Desarrollador Frontend / DIseñador UI ',
    location: 'Adomi Delivery - Full Remoto',
    description:
      'Aumenté las ganancias por delivery en la empresa, logrando diseñar, maquetar y desarrollar una plataforma de recaudo con react js, integrando mercado pago para cobro de comisiones por domicilio. Logré desarrollar una app de gestión de pedidos en web, basado en el flujo de la app móvil. Esto permitió a la empresa gestionar los pedidos en un solo lugar. Tecnologias: React, Next Js, MongoDB, Express js, cloudfare',
    icon: React.createElement(FaReact),
    date: '2021 - 2022',
  },
]

export const projectsData: readonly ProjectData[] = [
  {
    title: 'De Prati',
    description:
      "Trabajé 8 meses una aplicación móvil tipo 'Marketplace' con React Native. La aplicación incluyó características clave como gestión de microcréditos, pagos con tarjeta de crédito, catálogo de productos de varias marcas y gestión de envío a domicilio. ",
    tags: ['React Native', 'Redux Toolkit', 'RTK Query', 'React Native Material', 'Figma'],
    imageUrl: dePratiImg,
  },
  {
    title: 'Dugodo App',
    description:
      'Trabajé un año como freelance una app móvil desarrollada con React Native, tipo red social para viajeros llamada Dugodo',
    tags: ['React Native CLI', 'Redux Toolkit', 'TypeScript', 'Apolo Client', 'GraphQL', 'Express js'],
    imageUrl: dugodoImg,
  },
  {
    title: 'Buucly.com App',
    description:
      'Desarrollé una plataforma que permite crear libros personalizados al instante utilizando inteligencia artificial. Usando  el modelo GPT-4o de OpenAI, los usuarios pueden generar libros sobre cualquier tema en minutos. La plataforma incluye una biblioteca virtual, vista previa de contenido antes de la generación final, y opción de lectura dentro de la app',
    tags: ['React Js', 'Next.js', 'Tailwind', 'TypeScript', 'Shadcn UI', 'Prisma', 'Supabase', 'OpenAI'],
    imageUrl: buuclyImg,
  },
  {
    title: 'Portal de Pagos – CREE Comunicaciones',
    description:
      'Caso de ciclo completo: diseño, frontend, backend, integraciones, despliegue y monitoreo. Construí el Portal de Pagos v2 con migración de Wompi a Mercado Pago, integración con el ERP Siigo para facturación y activación automática de servicios, verificación OTP y monitoreo de errores con Sentry.',
    tags: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Vercel', 'Sentry', 'Mercado Pago', 'Siigo'],
    imageUrl: null,
  },
]

export const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'Angular', 'TypeScript', 'Tailwind', 'Redux Toolkit', 'React Query'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express', 'Python', 'GraphQL/Apollo'],
  },
  {
    category: 'Datos',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Firebase', 'Prisma', 'TypeORM'],
  },
  {
    category: 'Infra y despliegue',
    skills: ['AWS', 'Vercel', 'VPS', 'CI/CD', 'Sentry', 'Monorepos'],
  },
  {
    category: 'Diseño y prototipado',
    skills: ['Figma', 'Claude Design', 'Stitch'],
  },
  {
    category: 'IA y agentes',
    skills: ['Claude Code', 'Cursor', 'Servidores MCP', 'Skills', 'Orquestación de agentes', 'Memoria persistente'],
  },
] as const;

export const processData = [
  {
    title: 'Prototipo',
    description: 'Wireframes y prototipos con Claude y Stitch para validar rápido.',
  },
  {
    title: 'Sistema de diseño',
    description: 'Claude Design y Figma, con DESIGN.md como fuente de verdad.',
  },
  {
    title: 'Arquitectura y construcción',
    description: 'Front, back y base de datos pensados para escalar.',
  },
  {
    title: 'Despliegue continuo',
    description: 'AWS, VPS o Vercel con CI/CD automatizado.',
  },
  {
    title: 'Automatización con agentes',
    description: 'Skills, MCP y flujos de revisión de UI, tests y errores.',
  },
] as const;
