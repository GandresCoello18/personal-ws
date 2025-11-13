import { Send, Calendar, MessageSquare } from "lucide-react"
import { ContactForm } from "./contact-form"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 hero-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="section-title">Conversemos Sobre tu Proyecto</h2>
          <p className="section-subtitle">
            Estoy disponible para nuevos proyectos, colaboraciones y oportunidades de mentoría. Contacta conmigo y
            empecemos.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:contacto@andrescoello.com"
            className="card-elevated p-6 text-center hover:border-accent/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Send size={24} />
            </div>
            <h3 className="font-bold mb-2 text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">contacto@andrescoello.com</p>
          </a>

          <a
            href="https://calendar.app.google.com"
            className="card-elevated p-6 text-center hover:border-accent/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Calendar size={24} />
            </div>
            <h3 className="font-bold mb-2 text-foreground">Agendar Llamada</h3>
            <p className="text-sm text-muted-foreground">Consulta gratuita de 30 min</p>
          </a>

          <a
            href="https://wa.me/1234567890"
            className="card-elevated p-6 text-center hover:border-accent/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-bold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Respuesta en minutos</p>
          </a>
        </div>

        {/* Quick Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}
