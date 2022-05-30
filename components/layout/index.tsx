import React from 'react';
import { Nav } from './nav';
import { Footer } from './footer';

type Props = {
    children: React.ReactNode;
    className?: string;
}

export const Layout = ({children, className}: Props) => {
    return (
        <div className={className}>
            <Nav />
                {children}
            <Footer />
        </div>
    )
}