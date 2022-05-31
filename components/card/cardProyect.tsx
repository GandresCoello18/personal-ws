/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const CardProyect = () => {
    return (
        <a href='#' target='_blank' rel="noreferrer" className="mx-auto mb-4 flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
            <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src='https://images.pexels.com/photos/8725754/pexels-photo-8725754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <div className="p-4">
            <small className="text-blue-400 text-xs">Automobile company</small>
            <h1 className="text-2xl font-medium text-slate-600 pb-2">fewfg</h1>
            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">ffefefe</p>
            </div>
        </a>
    )
}