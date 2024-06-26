/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const Nav = () => {
	const [Avatar, setAvatar] = useState<string>('https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj');
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
					<a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
						<img className='rounded-full w-14' onError={() => setAvatar('./me.jpeg')} src={Avatar} alt='logo andres coello goyes' />
					</a>
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
							<a className={`inline-block py-2 px-4 text-white ${pathname === '/inicio' ? 'font-bold' : ''} no-underline`} href="/">Inicio</a>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/portafolio'>
							<a className={`inline-block py-2 px-4 text-white ${pathname === '/portafolio' ? 'font-bold' : ''} no-underline`} href="/portafolio">Portafolio</a>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/videos'>
							<a className={`inline-block py-2 px-4 text-white ${pathname === '/videos' ? 'font-bold' : ''} no-underline`} href="/videos">Videos</a>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/resumen'>
							<a className={`inline-block text-white no-underline ${pathname === '/resumen' ? 'font-bold' : ''} py-2 px-4`} href="/resumen">Resumen</a>
						</Link>
					</li>
					<li className="mr-3">
						<Link href='/sobre-mi'>
							<a className={`inline-block text-white no-underline ${pathname === '/sobre-mi' ? 'font-bold' : ''} py-2 px-4`} href="/sobre-mi">Sobre mi</a>
						</Link>
					</li>
				</ul>
				<a href='https://calendly.com/goyeselcoca/30min' target='_blank' rel="noreferrer" className='hidden lg:block'>
					<button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Platica conmigo</button>
				</a>
			</div>
		</div>
		<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
	</nav>
    )
}