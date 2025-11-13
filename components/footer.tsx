import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    producto: [
      { label: "Proyectos", href: "#projects" },
      { label: "Servicios", href: "#services" },
      { label: "Blog", href: "https://blog.example.com" },
    ],
    recursos: [
      { label: "Documentación", href: "#" },
      { label: "Guías", href: "#" },
      { label: "Tutoriales", href: "#" },
    ],
    legal: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  }

  const social = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contacto@andrescoello.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                AC
              </div>
              <span className="font-bold text-foreground">Andres Coello</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Developer, Mentor y Creador. Ayudando a desarrolladores a crecer profesionalmente.
            </p>
            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-10 h-10 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                    title={item.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Producto</h4>
            <ul className="space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    {link.href.startsWith("http") && (
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {links.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Andres Coello. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Diseñado y desarrollado con
              <span className="text-accent mx-1">❤️</span>
              using Next.js + Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
