import React from 'react';
import { NextSeo } from 'next-seo';
import { CardProyect } from '../components/card/cardProyect';
import Portafolio from '../mock/portafolio.json';
import { Layout } from '../components/layout'
import { Proyecto } from '../interfaces/proyecto';

const PagePortafolio = () => {
    return (
        <Layout>
            <NextSeo
                title="Portafolio | Andres coello goyes"
                description="Mis proyectos mas recientes y publicados en el desarrollo web y movil."
                canonical="http://localhost/"
                openGraph={{
                url: 'http://localhost/',
                title: 'Portafolio | Andres coello goyes',
                description: 'Mis proyectos mas recientes y publicados en el desarrollo web y movil.',
                images: [
                    {
                        url: 'https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj',
                        width: 800,
                        height: 600,
                        alt: 'logo youtube andres coello'
                    },
                    {
                        url: 'https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj',
                        width: 900,
                        height: 800,
                        alt: 'logo youtube andres coello'
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