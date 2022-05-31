import React from 'react';
import { CardResumen } from '../components/card/cardResumen';
import { Layout } from '../components/layout'

const PageResumen = () => {
    return (
        <Layout>
            <section className='mt-28 mb-12 flex justify-center'>
                <div className='md:w-3/4'>
                    <h2 className='p-5 mb-10 text-3xl'>Educación</h2>
                    <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2">
                        {[1,2].map((res: number) => <CardResumen key={res} />)}
                    </div>

                    <h2 className='p-5 mb-10 text-3xl mt-12'>Experiencia</h2>
                    <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2">
                        {[1,2,3,4].map((res: number) => <CardResumen key={res} />)}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PageResumen;