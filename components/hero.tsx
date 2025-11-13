import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="relative hero-gradient py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-0" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div className="flex justify-center md:justify-start">
              <div className="relative w-32 h-32 md:hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl" />
                <img
                  src="/profile-photo.jpg"
                  alt="Andres Coello - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover border-4 border-accent shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                ✨ Bienvenido a mi portafolio
              </div>
              <h1 className="section-title">
                Desarrollo de Software con
                <span className="text-accent"> Impacto</span>
              </h1>
              <p className="section-subtitle">
                Full Stack Developer, Mentor y Tutor especializado en crear soluciones web escalables mientras enseño a
                la próxima generación de desarrolladores.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <p className="text-sm text-muted-foreground">Años Experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">Estudiantes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <p className="text-sm text-muted-foreground">Proyectos</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                Ver Proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                Conectemos
                <Mail size={20} />
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Descargar CV
                <Download size={20} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 hover:bg-muted rounded-lg transition-colors" title="GitHub">
                <Github size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-3 hover:bg-muted rounded-lg transition-colors" title="LinkedIn">
                <Linkedin size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-3 hover:bg-muted rounded-lg transition-colors" title="Email">
                <Mail size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Imagen Hero con foto de perfil */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl w-80 h-80" />
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
                <img
                  src="/profile-photo.jpg"
                  alt="Andres Coello - Full Stack Developer"
                  className="relative w-full h-full rounded-full object-cover border-4 border-accent shadow-2xl"
                />
              </div>
            </div>

            {/* Badge con specialty */}
            <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur rounded-full px-6 py-3 shadow-lg">
              <p className="text-sm font-semibold text-foreground">💻 Full Stack Dev + 🎓 Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
