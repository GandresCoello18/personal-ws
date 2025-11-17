"use client"

import { useState } from "react"
import { ExternalLink, Github, Code2 } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  featured: boolean
  stats?: {
    label: string
    value: string
  }[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Plataforma E-Learning SaaS",
    description:
      "Plataforma de cursos online con sistema de pagos integrado, gestión de estudiantes y análisis avanzado. Más de 50k usuarios activos mensualmente.",
    image: "/elearning-platform-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "TailwindCSS"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
    stats: [
      { label: "Usuarios", value: "50k+" },
      { label: "Cursos", value: "200+" },
      { label: "Ingresos", value: "$500k+" },
    ],
  },
  {
    id: "2",
    title: "Dashboard Analítica Real-Time",
    description:
      "Dashboard interactivo que procesa millones de eventos en tiempo real. Implementado con websockets y visualizaciones dinámicas.",
    image: "/real-time-analytics-dashboard.png",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
    stats: [
      { label: "Latencia", value: "<100ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "RPS", value: "10k+" },
    ],
  },
  {
    id: "3",
    title: "App Móvil Fitness",
    description:
      "Aplicación React Native para seguimiento de entrenamientos con IA que personaliza rutinas. Disponible en iOS y Android.",
    image: "/fitness-mobile-app-interface.png",
    tags: ["React Native", "Firebase", "TensorFlow", "Expo"],
    link: "https://example.com",
    featured: false,
  },
  {
    id: "4",
    title: "CMS Headless Personalizado",
    description:
      "Sistema de gestión de contenidos personalizado con API GraphQL. Utilizado por 15+ agencias digitales.",
    image: "/cms-headless-content-management.jpg",
    tags: ["GraphQL", "Node.js", "PostgreSQL", "Docker"],
    link: "https://example.com",
    featured: false,
  },
  {
    id: "5",
    title: "Marketplace B2B Tecnológico",
    description: "Plataforma de marketplace especializada en servicios tecnológicos. Conecta proveedores con empresas.",
    image: "/marketplace-platform-b2b.jpg",
    tags: ["Next.js", "Stripe Connect", "PostgreSQL", "Redis"],
    link: "https://example.com",
    featured: false,
  },
  {
    id: "6",
    title: "Generador de Reportes PDF",
    description:
      "Herramienta para generar reportes personalizados en PDF con gráficos dinámicos y exportación en múltiples formatos.",
    image: "/pdf-report-generator-tool.jpg",
    tags: ["Node.js", "Puppeteer", "PDF-lib", "Express"],
    link: "https://example.com",
    featured: false,
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "featured">("featured")

  const filteredProjects = activeCategory === "featured" ? projects.filter((p) => p.featured) : projects

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Selección de proyectos en los que implementé soluciones innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.slice(2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Ver Todos los Proyectos
            <Code2 size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <div className="card-elevated overflow-hidden group hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 md:h-64 overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground line-clamp-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-3 flex-1">{project.description}</p>

        {project.stats && (
          <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-sm font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Ver Demo
            <ExternalLink size={16} />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
            >
              Código
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
