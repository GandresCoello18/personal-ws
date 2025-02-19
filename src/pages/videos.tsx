import { NextSeo } from 'next-seo';
import VideosJson from '../mock/videos.json';
import { Layout } from '../app/layout';
import { BASE_URL } from 'app/utils/url';

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
              url: `${BASE_URL}/me.jpg`,
              alt: 'Andres Coello Goyes',
            },
          ],
          site_name: 'Andres coello goyes',
        }}
      />

      <section className="mt-28 mb-12">
        <h1 className="text-center p-5 mb-2 text-4xl">Videos</h1>
        <p className="text-center mt-2 mb-6">
          Un vistazo a mis videos recientes y colaboraciones
        </p>
        <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VideosJson.videos.map((video) => (
            <iframe
              key={video.link}
              className="w-full h-64 my-10 rounded-lg md:h-80"
              src={video.link}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PageVideos;
