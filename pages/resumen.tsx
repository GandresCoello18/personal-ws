import React from 'react';
import resumen from '../mock/resumen.json';
import { CardResumen } from '../components/card/cardResumen';
import { Layout } from '../components/layout'
import { Resumen } from '../interfaces/resumen';
import { NextSeo } from 'next-seo';

const PageResumen = () => {
    return (
        <Layout>
            <NextSeo
                title="Resumen | Andres coello goyes"
                description="Instituciones o plataforma de educación, experiencias, empresas, trabajo."
                canonical="http://localhost/"
                openGraph={{
                url: 'http://localhost/',
                title: 'Resumen | Andres coello goyes',
                description: 'Instituciones o plataforma de educación, experiencias, empresas, trabajo.',
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
            <section className='mt-28 mb-12 flex justify-center'>
                <div className='md:w-3/4'>
                    <h2 className='p-5 mb-10 text-3xl'>Educación</h2>
                    <div className="md:p-4 p-2 gap-6 grid sm:grid-cols-1 lg:grid-cols-2">
                        {resumen.educacion.map((res: Resumen) => (
                            <a key={res.title} href={`${res.link}`} target='_blank' rel="noreferrer">
                                <CardResumen data={res}  />
                            </a>
                        ))}
                    </div>

                    <h2 className='p-5 mb-10 text-3xl mt-12'>Experiencia</h2>
                    <div className="md:p-4 p-2 gap-6 grid sm:grid-cols-1 lg:grid-cols-2">
                        {resumen.experiencia.map((res: Resumen) => (
                            <a key={res.title} href={`${res.link}`} target='_blank' rel="noreferrer">
                                <CardResumen data={res}  />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PageResumen;