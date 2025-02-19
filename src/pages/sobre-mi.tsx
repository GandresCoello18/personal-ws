/* eslint-disable @next/next/no-img-element */
import { NextSeo } from 'next-seo';
import { Layout } from '../app/layout';
import { BASE_URL } from 'app/utils/url';

const PageSobreMi = () => {
  return (
    <Layout>
      <NextSeo
        title="Sobre mi | Andres coello goyes"
        description="Entre las cosas que mas me gustan hacer es desarrollar apps de alto impacto, colaborar como tutor o creador de contenido."
        canonical="https://andres-coello-goyes.vercel.app/"
        openGraph={{
          url: 'https://andres-coello-goyes.vercel.app/',
          title: 'Sobre mi | Andres coello goyes',
          description:
            'Entre las cosas que mas me gustan hacer es desarrollar apps de alto impacto, colaborar como tutor o creador de contenido.',
          images: [
            {
              url: `${BASE_URL}/me.jpg`,
              alt: 'Andres Coello Goyes',
            },
          ],
          site_name: 'Andres coello goyes',
        }}
      />
      <section className="mt-28 mb-12 max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full bg-white mb-6 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-top object-cover w-full h-full"
                src="/me.jpeg"
                alt="Andres coello"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">
                Trabajando en mi
              </p>
              <p className="text-base text-gray-400 font-normal">
                Software Engineer
              </p>
              <p className="text-base leading-relaxed text-gray-500 font-normal">
                En el 2017 tomé la decisión de adquirir conocimiento por mi
                cuenta, lo que muchos llaman ser autodidacta. Con la ayuda
                videos, plataformas, post, tutoriales, retos y colaboraciones.
              </p>
            </div>
          </div>

          <a
            href="https://platzi.com/p/programandres/"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-white mb-6 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-top object-cover w-full h-full"
                src="/platzi.png"
                alt="platzi andres coello"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">
                Nunca parar de aprender
              </p>
              <p className="text-base text-gray-400 font-normal">
                Estudiante de ingenieria en Software
              </p>
              <p className="text-base leading-relaxed text-gray-500 font-normal">
                Un lema muy querido por la plataforma de enseñanza de calidad
                llamada Platzi, donde ha sido de gran ayuda para mi camino
                profesional y conociendo personas que les gusta la tecnología
                como a mí.
              </p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@andrescoellogoyes"
            target="_blank"
            className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
            rel="noreferrer"
          >
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-center object-cover w-full h-full"
                src="/youtube.png"
                alt="youtube andres coello"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">
                Compartir es apreder 2 veces
              </p>
              <p className="text-base text-gray-400 font-normal">
                Creador de contenido en Desarrollo de Software
              </p>
              <p className="text-base leading-relaxed text-gray-500 font-normal">
                Compartir y devolver el favor que internet me hizo a mí, en
                YouTube comparto tutoriales que a varios les sirve de gran
                ayuda.
              </p>
            </div>
          </a>

          <a
            href="https://www.classgap.com/me/andres-coello-web-tech"
            target="_blank"
            className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row"
            rel="noreferrer"
          >
            <div className="w-full md:w-2/5 h-80">
              <img
                className="object-cover object-left w-full h-full"
                src="/tus-clases.png"
                alt="clases particulares andres coello"
              />
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p className="text-xl text-gray-700 font-bold">
                Alguien con quien platicar y aprender
              </p>
              <p className="text-base text-gray-400 font-normal">
                Profesor o tutor en Desarrollo de Software
              </p>
              <p className="text-base leading-relaxed text-gray-500 font-normal">
                El camino del aprendizaje puede tener dificultades si no tienes
                compañía, es por eso que me ofrezco como tutor, profesor, pero
                más que eso un amigo en el que puedes confiar y platicar sobre
                tus proyectos.
              </p>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default PageSobreMi;
