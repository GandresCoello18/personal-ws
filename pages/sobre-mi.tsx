/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Layout } from '../components/layout';

const PageSobreMi = () => {
    return (
        <Layout>
            <section className='mt-28 mb-12 max-w-7xl mx-auto p-5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="w-full bg-white mb-6 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src="/me.jpeg" alt="Andres coello" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">Trabajando en mi</p>
                            <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">En el 2018 tomé la decisión de adquirir conocimiento por mi cuenta, lo que muchos llaman ser autodidacta. Con la ayuda videos, plataformas, post, tutoriales, retos y colaboraciones.</p>
                        </div>
                    </div>

                    <a href='https://platzi.com/p/programandres/' target='_blank' rel="noreferrer" className="w-full bg-white mb-6 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src="/platzi.png" alt="platzi andres coello" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">Nunca parar de aprender</p>
                            <p className="text-base text-gray-400 font-normal">Estudiante de ingenieria en Software</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">Un lema muy querido por la plataforma de enseñanza de calidad llamada Platzi, donde ha sido de gran ayuda para mi camino profesional y conociendo personas que les gusta la tecnología como a mí.</p>
                        </div>
                    </a>

                    <a href='https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj' target='_blank' className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row" rel="noreferrer">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src="/youtube.png" alt="youtube andres coello" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">Compartir es apreder 2 veces</p>
                            <p className="text-base text-gray-400 font-normal">Creador de contenido en Software</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">Compartir y devolver el favor que internet me hizo a mí, en YouTube comparto tutoriales que a varios les sirve de gran ayuda.</p>
                        </div>
                    </a>

                    <a href='https://www.tusclasesparticulares.com.ec/profesores/andres-coello-goyes.htm' target='_blank' className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row" rel="noreferrer">
                        <div className="w-full md:w-2/5 h-80">
                            <img className="object-center object-cover w-full h-full" src="/tus-clases.png" alt="clases particulares andres coello" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-bold">Alguien con quien platicar</p>
                            <p className="text-base text-gray-400 font-normal">Tutor en Software</p>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">El camino del aprendizaje puede tener dificultades si no tienes compañía, es por eso que me ofrezco como tutor, profesor, pero más que eso un amigo en el que puedes confiar y platicar sobre tus proyectos.</p>
                        </div>
                    </a>
                </div>
            </section>
        </Layout>
    )
}

export default PageSobreMi;