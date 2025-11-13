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
    name: "Alberto Flores Conejo",
    role: "Estudiante de Desarrollo web",
    company: "España",
    image: "https://dbwf8q1mv0cee.cloudfront.net/chi/api/user/dsp/eyjgt1ay3uiurvg0anwqtj6hrt6cwuq50.jpg/110x110cut/?v=1",
    text: "Andrés es muy paciente y sabe lo que hace",
    rating: 5,
  },
  {
    name: "Juliana Amorim",
    role: "Estudiante de Software Engineering",
    company: "España",
    text: "Andrés es un profesor mucho conocimiento y paciencia. Altamente recomendable! Gracias Andrés",
    rating: 5,
    image: "https://dbwf8q1mv0cee.cloudfront.net/chi/api/user/dsp/tzzfxeev3ejk84takcrer6c1ll_nz4rw0.jpg/110x110cut/?v=1",
  },
  {
    name: "Clara Foscaldi",
    role: "Frontend Vue.js Developer",
    company: "Argentina",
    image: "https://d2d74a7s2nfnwy.cloudfront.net/i/avatar4.png?v=1",
    text: "Excelente profesor!! Es muy dedicado y enseña con mucha paciencia. Además de que tiene buena disposición y muestra compromiso hacia sus alumnos.",
    rating: 5,
  },
  {
    name: "Felipe Stevenson Fernandez",
    role: "Practicante de Backend",
    company: "Chile",
    image: "https://d2d74a7s2nfnwy.cloudfront.net/i/avatar4.png?v=1",
    text: "Comprometido con lo que se le pide ayuda, explica muy bien, paso por paso",
    rating: 5,
  },
  {
    name: "Pedro",
    role: "Junior Developer",
    company: "Colombia",
    image: "https://d2d74a7s2nfnwy.cloudfront.net/i/avatar4.png?v=1",
    text: "Lo recomiendo muchísimo, se adaptó totalmente a mi situación, fué paciente y logré sobradamente lo que buscaba.",
    rating: 5,
  },
  {
    name: "Isabel fernandez",
    role: "Estudiante con proyecto final",
    company: "Republica Dominicana",
    image: "https://d2d74a7s2nfnwy.cloudfront.net/i/avatar4.png?v=1",
    text: "Buen profesor, se preocupa por revisar la materia para que todo quede claro.",
    rating: 5,
  },
]

const stats = [
  { value: "150+", label: "Estudiantes Satisfechos" },
  { value: "4.9/5", label: "Rating Promedio" },
  { value: "100%", label: "Tasa de Recomendación" },
  { value: "5+", label: "Años de Experiencia" },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 mb-16">
          <h2 className="section-title">Qué Dicen los Estudiantes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Historias de desarrolladores que transformaron su carrera gracias a mentoría y educación de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-elevated p-6 md:p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-6 flex-1 leading-relaxed">"{testimonial.text}"</p>

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
