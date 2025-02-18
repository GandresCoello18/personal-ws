import { NextSeo } from 'next-seo';
import { CardProyect } from '../components/card/cardProyect';
import Portafolio from '../mock/portafolio.json';
import { Layout } from '../app/layout'
import { Proyecto } from '../interfaces/proyect';
import { BASE_URL } from 'app/utils/url';

const PagePortafolio = () => {
    return (
        <Layout>
            <NextSeo
                title="Portafolio | Andres Coello Goyes"
                description="Mis proyectos mas recientes y publicados en el desarrollo web y movil."
                canonical="https://andres-coello-goyes.vercel.app/"
                openGraph={{
                url: 'https://andres-coello-goyes.vercel.app/',
                title: 'Portafolio | Andres Coello Goyes',
                description: 'Mis proyectos mas recientes y publicados en el desarrollo web y movil.',
                images: [
                    {
                        url: `${BASE_URL}/me.jpg`,
                        alt: 'Andres Coello Goyes',
                    },
                ],
                site_name: 'Andres coello goyes',
                }}
            />

            <section className='mt-28 mb-12'>
                <h1 className='text-center p-5 mb-10 text-4xl'>Portafolio</h1>
                <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Portafolio.proyectos.map((proyect: Proyecto) => <CardProyect key={proyect.title} data={proyect} />)}
                </div>
            </section>
        </Layout>
    )
}

export default PagePortafolio;