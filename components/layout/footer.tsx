/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
	<footer className="bg-white">
        <div className="container mx-auto  px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 text-black">
                    <a target='_blank' className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="https://www.youtube.com/channel/UCHWsGkCRqlNKnoxYkC_ZRxQ" rel="noreferrer">
                        <img className='rounded-full' src='https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj' alt='logo andres coello goyes' />
                    </a>
                </div>

                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Conecta</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='https://calendly.com/goyeselcoca/30min'>
                                <a href="https://calendly.com/goyeselcoca/30min" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Platica conmigo</a>
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='https://www.tusclasesparticulares.com.ec/profesores/andres-coello-goyes.htm'>
                                <a href="https://www.tusclasesparticulares.com.ec/profesores/andres-coello-goyes.htm" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Asesorias</a>
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='https://platzi.com/p/programandres/'>
                                <a href="https://platzi.com/p/programandres/" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Platzi</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Redes</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://www.instagram.com/coellogoyes" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Instagram</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://www.linkedin.com/in/andr%C3%A9s-roberto-coello-goyes" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Linkedin</a>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a href="https://twitter.com/AndresC79085858" target='_blank' className="no-underline hover:underline text-gray-800 hover:text-app-100" rel="noreferrer">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <p className="uppercase text-gray-500 md:mb-6">Web</p>
                    <ul className="list-reset mb-6">
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='/portafolio'>
                                <a href="/portafolio" className="no-underline hover:underline text-gray-800 hover:text-app-100">Portafolio</a>
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='/resumen'>
                                <a href="/resumen" className="no-underline hover:underline text-gray-800 hover:text-app-100">Resumen</a>
                            </Link>
                        </li>
                        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                            <Link href='/sobre-mi'>
                                <a href="/sobre-mi" className="no-underline hover:underline text-gray-800 hover:text-app-100">Sobre mi</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}