import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Junior Developer",
    company: "Tech Startup",
    image: "/placeholder.svg?key=v2b0a",
    text: "La mentoría de Andres fue transformacional. En 3 meses pasé de ser completamente principiante a conseguir mi primer trabajo como developer. Su enfoque práctico es increíble.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Tech Lead",
    company: "Agencia Digital",
    text: "Contratamos a Andres para consultoría técnica. Sus recomendaciones de arquitectura mejoraron nuestra performance en un 40%. Altamente recomendado.",
    rating: 5,
  },
  {
    name: "Sofia Martínez",
    role: "Full Stack Developer",
    company: "SaaS Company",
    image: "/placeholder.svg?key=k9x4m",
    text: "Tomé el curso intensivo y fue la mejor inversión en mi carrera. Aprendí más en 4 semanas que en 6 meses estudiando solo.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    role: "Founder",
    company: "E-commerce Startup",
    image: "/placeholder.svg?key=a2w1b",
    text: "Andres desarrolló nuestra plataforma de ventas. Es un profesional con atención al detalle y comprometido con los resultados.",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    role: "Self-taught Developer",
    company: "Freelancer",
    image: "/placeholder.svg?key=z8p3j",
    text: "El code review fue muy valioso. Recibí feedback específico que mejoró significativamente la calidad de mi código.",
    rating: 5,
  },
  {
    name: "Miguel López",
    role: "Product Manager",
    company: "Tech Scale-up",
    image: "/placeholder.svg?key=c4n6l",
    text: "Andres dirigió un workshop para nuestro equipo. Muy inspirador y con contenido práctico. Todo el equipo aprendió mucho.",
    rating: 5,
  },
]

const stats = [
  { value: "500+", label: "Estudiantes Satisfechos" },
  { value: "4.9/5", label: "Rating Promedio" },
  { value: "100%", label: "Tasa de Recomendación" },
  { value: "5+", label: "Años de Experiencia" },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="section-title">Qué Dicen los Estudiantes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Historias de desarrolladores que transformaron su carrera gracias a mentoría y educación de calidad
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-elevated p-6 md:p-8 flex flex-col h-full">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-6 flex-1 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} en {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
