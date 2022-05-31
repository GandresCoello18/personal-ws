import React from 'react';
import { NextSeo } from 'next-seo';
import { CardProyect } from '../components/card/cardProyect';
import { Layout } from '../components/layout'

const PagePortafolio = () => {
    return (
        <Layout>
            <NextSeo
                title="Portafolio | Andres coello goyes"
                description="Pagina de proyectos personales de andres del 2019 con php 5 y react 15 primos pasos."
                canonical="http://localhost/"
                openGraph={{
                url: 'http://localhost/',
                title: 'Portafolio | Andres coello goyes',
                description: 'Pagina de proyectos personales de andres del 2019 con php 5 y react 15 primos pasos.',
                images: [
                    {
                    url: 'https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj',
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                    type: 'image/jpeg',
                    },
                    {
                    url: 'https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj',
                    width: 900,
                    height: 800,
                    alt: 'Og Image Alt Second',
                    type: 'image/jpeg',
                    },
                ],
                site_name: 'Andres coello goyes',
                }}
            />

            <section className='mt-28 mb-12'>
                <h1 className='text-center p-5 mb-10 text-4xl'>Portafolio</h1>
                <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[1,2,3,4].map((proyect: number) => <CardProyect key={proyect} />)}
                </div>
            </section>
        </Layout>
    )
}

export default PagePortafolio;