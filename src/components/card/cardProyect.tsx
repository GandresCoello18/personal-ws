/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Proyecto } from '../../interfaces/proyect';

type Props = {
  data: Proyecto;
  isAnimate?: boolean;
};

export const CardProyect = ({ data, isAnimate }: Props) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className={`mx-auto mb-4 flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 ${isAnimate ? 'transition duration-300 transform hover:scale-105' : ''}`}
    >
      <img
        className="aspect-video w-96 rounded-t-2xl object-cover object-center"
        src={`./${data.imgagen}`}
      />
      <div className="p-4">
        <small className="text-blue-400 text-xs">
          {data.tag.map((item) => (
            <span key={item}>#{item} </span>
          ))}
        </small>
        <h1 className="text-2xl font-medium text-slate-600 pb-2">
          {data.title}
        </h1>
        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
          {data.description}
        </p>
      </div>
    </a>
  );
};
