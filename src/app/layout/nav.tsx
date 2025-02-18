/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BASE_URL } from 'app/utils/url';

export const Nav = () => {
	const [Avatar, setAvatar] = useState<string>(`${BASE_URL}/me.jpeg`);
	const [pathname, setPathname] = useState<string>('');
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	useEffect(() => {
		setPathname(window.location.pathname);
	}, []);

    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white bg-gray-900">
		<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
			<div className="pl-4 flex items-center">
				<Link href='/'>
					<div className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
						<img className='rounded-full w-14' onError={() => setAvatar('./me.jpeg')} src={Avatar} alt='logo andres coello goyes' />
					</div>
				</Link>
			</div>

			<div className="block lg:hidden pr-4">
				<button onClick={() => setOpenMenu(!openMenu)} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			<div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 ${openMenu ? 'block' : 'hidden'}`} id="nav-content">
				<ul className="list-reset lg:flex justify-end flex-1 items-center">
					<li className="mr-3">
						<Link href='/'>
							<span className={`inline-block py-2 px-4 text-white ${pathname === '/inicio' ? 'font-bold' : ''} no-underline`}>Inicio</span>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/portafolio'>
							<span className={`inline-block py-2 px-4 text-white ${pathname === '/portafolio' ? 'font-bold' : ''} no-underline`}>Portafolio</span>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/videos'>
							<span className={`inline-block py-2 px-4 text-white ${pathname === '/videos' ? 'font-bold' : ''} no-underline`}>Videos</span>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/resumen'>
							<span className={`inline-block text-white no-underline ${pathname === '/resumen' ? 'font-bold' : ''} py-2 px-4`}>Resumen</span>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/sobre-mi'>
							<span className={`inline-block text-white no-underline ${pathname === '/sobre-mi' ? 'font-bold' : ''} py-2 px-4`}>Sobre mi</span>
						</Link>
					</li>
				</ul>
				<a href='https://calendly.com/goyeselcoca/30min' target='_blank' rel="noreferrer" className='cursor-pointer hidden lg:block'>
					<button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Platica conmigo</button>
				</a>
			</div>
		</div>
		<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
	</nav>
    )
}