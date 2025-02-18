/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { BASE_URL } from 'app/utils/url';

export const Footer = () => {
    const [Avatar, setAvatar] = useState<string>(`${BASE_URL}/me.jpeg`);

    return (
        <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <a href="https://www.youtube.com/channel/UCHWsGkCRqlNKnoxYkC_ZRxQ" target='_blank' rel="noreferrer">
                <img className='rounded-full w-20 h-20 md:w-24 md:h-24 mr-4 md:mr-0' onError={() => setAvatar('./me.jpeg')} src={Avatar} alt='logo andres coello goyes' />
              </a>
              <div className='ml-3'>
                <p className="font-semibold text-xl md:text-2xl">Andrés Coello</p>
                <p className="text-sm md:text-base">Full Stack Developer</p>
              </div>
            </div>
      
            <div className="flex flex-col">
              <p className="font-semibold text-xl md:text-2xl mb-4">Conecta</p>
              <ul className="space-y-2">
                <li><a href="https://calendly.com/goyeselcoca/30min" target='_blank' rel="noreferrer">Platica conmigo</a></li>
                <li><a href="https://www.classgap.com/es/tutor/andres-coello-web-tech" target='_blank' rel="noreferrer">Asesorías</a></li>
                <li><a href="https://platzi.com/p/programandres/" target='_blank' rel="noreferrer">Platzi</a></li>
              </ul>
            </div>
      
            <div className="flex flex-col">
              <p className="font-semibold text-xl md:text-2xl mb-4">Redes</p>
              <ul className="space-y-2">
                <li><a href="https://www.instagram.com/coellogoyes" target='_blank' rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/andr%C3%A9s-roberto-coello-goyes" target='_blank' rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/AndresC79085858" target='_blank' rel="noreferrer">Twitter</a></li>
              </ul>
            </div>
      
            <div className="flex flex-col">
              <p className="font-semibold text-xl md:text-2xl mb-4">Web</p>
              <ul className="space-y-2">
                <li><Link href='/portafolio'>Portafolio</Link></li>
                <li><Link href='/resumen'>Resumen</Link></li>
                <li><Link href='/sobre-mi'>Sobre mí</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>      
    )
}