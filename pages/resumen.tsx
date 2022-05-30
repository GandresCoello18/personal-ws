import React from 'react';
import { CardResumen } from '../components/card/cardResumen';
import { Layout } from '../components/layout'

const PageResumen = () => {
    return (
        <Layout>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="md:p-4 p-2 gap-2 grid sm:grid-cols-1 md:grid-cols-2">
                <CardResumen />
                <CardResumen />
                <CardResumen />
                <CardResumen />
            </div>
            <br />
            <br />
            <br />
        </Layout>
    )
}

export default PageResumen;