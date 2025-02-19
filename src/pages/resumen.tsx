/* eslint-disable @next/next/no-img-element */
import resumen from '../mock/resumen.json';
import { CardResumen } from '../components/card/cardResume';
import { Layout } from '../app/layout';
import { Resumen } from '../interfaces/resume';
import { NextSeo } from 'next-seo';
import { BASE_URL } from 'app/utils/url';

const PageResumen = () => {
  return (
    <Layout>
      <NextSeo
        title="Resumen | Andres coello goyes"
        description="Instituciones o plataforma de educación, experiencias, empresas, trabajo."
        canonical="https://andres-coello-goyes.vercel.app/"
        openGraph={{
          url: 'https://andres-coello-goyes.vercel.app/',
          title: 'Resumen | Andres coello goyes',
          description:
            'Instituciones o plataforma de educación, experiencias, empresas, trabajo.',
          images: [
            {
              url: `${BASE_URL}/me.jpg`,
              alt: 'Andres Coello Goyes',
            },
          ],
          site_name: 'Andres coello goyes',
        }}
      />
      <section className="mt-28 mb-12 flex justify-center">
        <div className="md:w-3/4">
          <h2 className="p-5 mb-10 text-3xl">Educación</h2>
          <div className="md:p-4 p-2 gap-6 grid sm:grid-cols-1 lg:grid-cols-2">
            {resumen.educacion.map((res: Resumen) => (
              <a
                key={res.title}
                href={`${res.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <CardResumen data={res} />
              </a>
            ))}
          </div>

          <h2 className="p-5 mb-10 text-3xl mt-12">Experiencia</h2>
          <div className="md:p-4 p-2 gap-6 grid sm:grid-cols-1 lg:grid-cols-2">
            {resumen.experiencia.map((res: Resumen) => (
              <a
                key={res.title}
                href={`${res.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <CardResumen data={res} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto flex py-5">
        <img src="/banner-app.png" className="w-full" alt="banner" />
      </section>
    </Layout>
  );
};

export default PageResumen;
