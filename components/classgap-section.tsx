"use client"

import { Star, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export function ClassgapSection() {
  return (
    <section
      id="classgap"
      className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Classgap Verified Tutor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            5+ Años de Experiencia Comprobada
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Mentor verificado en Classgap con una trayectoria sólida ayudando a cientos de estudiantes a alcanzar sus
            objetivos en desarrollo web y programación.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {/* Stat: Years */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Experiencia</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">5+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Años en la plataforma</p>
          </div>

          {/* Stat: Reviews */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Reseñas</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">17+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Calificaciones 5 estrellas</p>
          </div>

          {/* Stat: Students */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Estudiantes</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">500+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Alumnos mentorados</p>
          </div>

          {/* Stat: Rating */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Calificación</span>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">4.9/5</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Rating promedio</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left: Description */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Mentor Experimentado y Certificado
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                Con más de 5 años activo en Classgap, he establecido una reputación sólida como mentor confiable y
                efectivo. Mi experiencia abarca desde tutorías intensivas hasta mentoría estratégica a largo plazo.
              </p>
              <p>
                Mis estudiantes valoran mi capacidad para explicar conceptos complejos de forma clara, adaptarme a
                diferentes estilos de aprendizaje y proporcionar feedback constructivo que impulsa el crecimiento
                profesional.
              </p>
              <p className="text-sm bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                Las 17+ reseñas positivas reflejan mi compromiso con la excelencia educativa y la satisfacción del
                estudiante.
              </p>
            </div>
          </div>

          {/* Right: CTA and Info */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Áreas de Especialización</h4>
            <ul className="space-y-3 mb-6">
              {[
                "Desarrollo Web Full Stack",
                "React y Modern JavaScript",
                "Mentoría en Carrera Dev",
                "Preparación de Entrevistas",
                "Proyectos Prácticos",
                "Consultoría Técnica",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-teal-500 dark:text-teal-400 font-bold mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="https://www.classgap.com/me/andres-coello-web-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Ver Perfil en Classgap →
            </Link>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-lg italic text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-3">
            "Andrés es un tutor excepcional. No es un principiante - tiene la experiencia y paciencia para guiarte a
            través de conceptos difíciles. Altamente recomendado para cualquiera que busque crecimiento real en
            desarrollo web."
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Estudiante verificado de Classgap</p>
        </div>
      </div>
    </section>
  )
}
