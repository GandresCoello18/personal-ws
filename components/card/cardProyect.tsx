/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Proyecto } from '../../interfaces/proyecto';

type Props = {
    data: Proyecto
}

export const CardProyect = ({data}: Props) => {
    return (
        <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
            <img className="aspect-video w-96 rounded-t-2xl object-cover object-center" src={`/proyectos/${data.imagen_proy}`} />
            <div className="p-4">
            <small className="text-blue-400 text-xs">Automobile company</small>
            <h1 className="text-2xl font-medium text-slate-600 pb-2">{data.titulo_proy}</h1>
            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{data.descripcion_proy}</p>
            </div>
        </div>
    )
}