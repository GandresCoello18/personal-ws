import React from 'react';
import { NextSeo } from 'next-seo';
import VideosJson from '../mock/videos.json';
import { Layout } from '../components/layout'

const PageVideos = () => {
    return (
        <Layout>
            <NextSeo
                title="Videos | Andres coello goyes"
                description="Mis video más destacados en el desarrollo web y movil."
                canonical="https://andres-coello-goyes.vercel.app/"
                openGraph={{
                url: 'https://andres-coello-goyes.vercel.app/',
                title: 'Videos | Andres coello goyes',
                description: 'Mis video más destacados en el desarrollo web y movil.',
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
                <h1 className='text-center p-5 mb-10 text-4xl'>Videos</h1>
                <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {VideosJson.videos.map(video => <iframe key={video.link} className="w-full h-64 my-10 rounded-lg md:h-80" src={video.link} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>)}
                </div>
            </section>
        </Layout>
    )
}

export default PageVideos;
