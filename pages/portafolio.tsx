import { GetServerSideProps } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import { CardProyect } from '../components/card/cardProyect';
import { Layout } from '../components/layout'
import { Proyecto } from '../interfaces/proyecto';

export const getServerSideProps: GetServerSideProps<{}> = async () => {
    const res = await fetch(`http://localhost:3000/api/hello`);
    const {data} = await res.json()
    const user = undefined;

    if (!user) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        }
    }
};

type Props = {
    data: Proyecto[]
}

const PagePortafolio = ({data}: Props) => {
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map(proyect => (
                    <a key={proyect.id_proyecto} href={proyect.enlace_pry} target='_blank' className='mb-4' rel="noreferrer">
                        <CardProyect data={proyect} />
                    </a>
                ))}
            </div>
            <br />
            <br />
            <br />
        </Layout>
    )
}

export default PagePortafolio;