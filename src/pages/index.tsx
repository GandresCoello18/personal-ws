/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import { Layout } from '../app/layout';
import Link from 'next/link';
import PortfolioJson from '../mock/portafolio.json';
import VideosJson from '../mock/videos.json';
import { FaAws, FaReact, FaNodeJs, FaLinux, FaPhoenixFramework, FaYarn, FaChrome, FaDocker, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { CardProyect } from '../components/card/cardProyect';
import { Proyecto } from '../interfaces/proyect';
import { useEffect, useState } from 'react';

const images = [
   '/conf-quito-cumbaya.jpg',
   '/conf-quito-cumbaya-2.jpeg',
];

const techs = [
   { icon: <FaReact size={50} />, name: 'React' },
   { icon: <FaNodeJs size={50} />, name: 'Node.js' },
   { icon: <FaDocker size={50} />, name: 'Docker' },
   { icon: <FaAws size={50} />, name: 'AWS' },
   { icon: <FaLinux size={50} />, name: 'Linux' },
   { icon: <FaYarn size={50} />, name: 'Yarn' },
   { icon: <FaChrome size={50} />, name: 'Chrome' },
   { icon: <FaHtml5 size={50} />, name: 'HTML5' },
   { icon: <FaCss3Alt size={50} />, name: 'CSS3' }
];

const PageHome = () => {    
    const [currentImage, setCurrentImage] = useState(images[0]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
   
    return (
      <Layout className='leading-normal tracking-normal text-white gradient'>
         <div className="header bg-cover bg-center" style={{ backgroundImage: `url(${currentImage})` }}>
            <div className='bg-black/50'>
               <div className="pt-24">
                  <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                     <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                        <p className="uppercase tracking-loose w-full">¿Me estabas buscando?</p>
                        <h1 className="my-4 text-5xl font-bold leading-tight">¡Hola, me llamo Andrés Coello!</h1>
                        <p className="leading-normal text-2xl mb-8">Soy Full Stack developer en web y móvil multiplataforma, pero estoy en camino a ser <strong>Devops Engineer</strong> te presento una breve biografía de mí y te invito a platicar conmigo.</p>
                        <a href='https://calendly.com/goyeselcoca/30min' className='z-10' target='_blank' rel="noreferrer">
                           <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Platica conmigo</button>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="relative -mt-12 lg:-mt-24">
                  <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                     <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                           <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                           <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                           <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                           <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                     </g>
                  </svg>
               </div>
            </div>
         </div>

         <section className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
               <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">¿En qué me desempeño?</h1>
               <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
               </div>

               <div className="flex flex-wrap">
                  <div className="w-5/6 sm:w-1/2 p-6">
                     <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Full Stack Developer</h3>
                     <p className="text-gray-600 md:mb-8">Me gusta desarrollar aplicaciones que usan Api Rest, Graphql, Single page aplication, Server side rendering, Progress web app y móviles multiplataforma con React, React Native, Next.js, Nest.js, Node.js, Redis, MongoDB, MySql, Express, etc.
                     <br /><br />
                     También doy charlas, me uno a retos, soy mentor o tutor en linea para quienes empiezan en el desarrollo de software y mis proyectos personales son clave en mi camino de aprendizaje.</p>
                  </div>
                  <div className="w-full sm:w-1/2 md:p-6">
                     <img src='/dev.png' alt='imagen dev' className='w-full' />
                  </div>
               </div>


               <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 md:p-6 md:mt-6">
                     <img src='/planet.png' alt='img planet' className='w-full' />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                     <div className="align-middle">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Dejando huellas</h3>
                        <p className="text-gray-600 md:mb-8">He trabajado colaborando en proyectos abiertos como personales pero mas frecuentemente ayudando a estudiantes en varias partes del mundo como: Colombia, Peru, Uruguay, Argentina, Mexico, Republica Dominicana y España, además aprendo de ellos y de sus culturas.</p>
                     </div>
                  </div>

               </div>
            </div>

            <div className="mx-auto px-4 text-center">
               <h2 className="mb-4 text-3xl text-gray-800 font-bold">Me Encanta</h2>
               <p className="text-gray-600 mb-8">Estas son algunas de las tecnologías con las que me apasiona trabajar.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  {techs.map((tech, index) => (
                     <div key={index} className="bg-white text-gray-400 p-6 rounded-lg shadow-lg flex items-center justify-center flex-col">
                     {tech.icon}
                     <span className="mt-4 text-lg font-medium text-gray-400">{tech.name}</span>
                     </div>
                  ))}
               </div>
               </div>
         </section>

         <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
               <h1 className="text-3xl font-semibold text-center md:text-left ml-3 mb-8 text-gray-800 w-full">Proyectos Destacados</h1>

               <div className="md:p-4 w-full p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                     {PortfolioJson.proyectos.slice(0, 3).map((proyect: Proyecto) => <CardProyect isAnimate={true} data={proyect} key={proyect.title} />)}
               </div>

               <div className='flex justify-center mt-5 w-full'>
                  <Link href='/portafolio'>
                     <button className="border-2 border-gray-900 cursor-pointer text-gray-900 px-4 py-2 rounded-md text-1xl font-medium transition duration-300">Más proyectos</button>
                  </Link>
               </div>
            </div>
         </section>

         <section className="bg-gray-100 py-10">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
               <h1 className="text-3xl font-semibold text-center md:text-left ml-3 text-gray-800 w-full">Videos Destacados</h1>

               <div className="md:p-4 w-full p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {VideosJson.videos.slice(0, 3).map(video => <iframe key={video.link} className="w-full h-64 my-10 rounded-lg md:h-80" src={video.link} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>)}
               </div>

               <div className='flex justify-center mt-5 w-full'>
                  <Link href='/videos'>
                     <button className="border-2 border-gray-900 cursor-pointer text-gray-900 px-4 py-2 rounded-md text-1xl font-medium transition duration-300">Más videos</button>
                  </Link>
               </div>
            </div>
         </section>

         <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
               <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                  <g className="wave" fill="#f8fafc">
                     <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                     <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                     </g>
                  </g>
               </g>
            </g>
         </svg>

         <section className="container mx-auto text-center py-6 mb-12">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Te interesa conocer más de mi</h1>
            <div className="w-full mb-4">
               <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <h3 className="my-4 text-3xl leading-tight">¡Te invito a un espacio de 30 minutos!</h3>

            <a href='https://calendly.com/goyeselcoca/30min' target='_blank' rel="noreferrer">
               <button className='mx-auto lg:mx-0 hover:underline cursor-pointer bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg'>
                  Platica conmigo
               </button>
            </a>
         </section>
      </Layout>
    )
}

export default PageHome;