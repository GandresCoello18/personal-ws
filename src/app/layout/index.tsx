import { Nav } from './nav';
import { Footer } from './footer';
import '../globals.css';
import { BASE_URL } from 'app/utils/url';
import { NextSeo } from 'next-seo';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <NextSeo
        title="Andrés Coello Goyes"
        description="Soy software developer desde el 2019 en ambiente web y móvil multiplataforma, autodidacta, tutor y amigo para quienes necesiten de una mano en sus proyectos."
        canonical="https://andres-coello-goyes.vercel.app/"
        openGraph={{
          url: 'https://andres-coello-goyes.vercel.app/',
          type: 'website',
          title: 'Andrés Coello Goyes',
          description:
            'Soy software developer desde el 2018 en ambiente web y móvil multiplataforma, autodidacta, tutor y amigo para quienes necesiten de una mano en sus proyectos.',
          images: [
            {
              url: `${BASE_URL}/me.jpg`,
              alt: 'Andres Coello Goyes',
            },
          ],
          site_name: 'Andres Coello Goyes',
        }}
        twitter={{
          handle: '@AndresC79085858',
          site: '@AndresC79085858',
          cardType: 'summary_large_image',
        }}
      />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
