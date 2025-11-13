import { Briefcase, GraduationCap, Award } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  type: "work" | "education" | "certification"
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Startup Innovadora",
    period: "2023 - Presente",
    description:
      "Lideré el desarrollo de aplicaciones web escalables usando React, Node.js y bases de datos NoSQL. Mentoricé 5+ desarrolladores junior en buenas prácticas de código y arquitectura.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Agencia Digital Premium",
    period: "2021 - 2023",
    description:
      "Desarrollé 15+ proyectos web para empresas del sector e-commerce y SaaS. Implementé soluciones de alta performance con Next.js, TypeScript y PostgreSQL.",
  },
  {
    type: "education",
    title: "Licenciatura en Ingeniería de Sistemas",
    company: "Universidad Nacional",
    period: "2018 - 2022",
    description: "Especialización en Desarrollo Web y Arquitectura de Software. Promedio acumulado: 4.2/5.0",
  },
  {
    type: "work",
    title: "Desarrollador Frontend",
    company: "Freelancer Independiente",
    period: "2020 - 2021",
    description:
      "Creé interfaces modernas y responsivas para startups. Portfolio incluye 10+ proyectos en React y Vue.js.",
  },
  {
    type: "certification",
    title: "Full Stack Development Bootcamp",
    company: "Coding Academy Premium",
    period: "2019 - 2020",
    description:
      "Certificación intensiva en desarrollo full stack. Proyecto final: plataforma de e-learning con 50k+ usuarios.",
  },
  {
    type: "certification",
    title: "AWS Solutions Architect Associate",
    company: "Amazon Web Services",
    period: "2023",
    description: "Certificación en diseño de arquitecturas en la nube. Experiencia en EC2, S3, Lambda y RDS.",
  },
]

function getIcon(type: string) {
  switch (type) {
    case "work":
      return <Briefcase className="w-5 h-5" />
    case "education":
      return <GraduationCap className="w-5 h-5" />
    case "certification":
      return <Award className="w-5 h-5" />
    default:
      return <Briefcase className="w-5 h-5" />
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="section-title">Experiencia y Educación</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Recorrido profesional combinando años de desarrollo y mentoría de talento
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card-elevated p-6 md:p-8 border-l-4 border-l-accent">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {getIcon(exp.type)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-6">
              <h4 className="font-bold text-lg mb-4 text-primary">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-elevated p-6">
              <h4 className="font-bold text-lg mb-4 text-accent">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-elevated p-6">
              <h4 className="font-bold text-lg mb-4 text-secondary">DevOps & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "Git", "CI/CD", "Vercel", "Firebase"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
