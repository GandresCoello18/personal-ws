/* eslint-disable @next/next/no-img-element */
import { Resumen } from '../../interfaces/resume';

type Props = {
    data: Resumen;
}

export const CardResumen = ({ data }: Props) => {
    return (
        <div className="flex items-center justify-center mb-2">
            <div className="relative flex flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full border border-white bg-white">
                <div
                    className={`w-28 bg-white grid place-items-center`}
                >
                    <img src={`./${data.imgagen}`} alt={data.title} className="rounded-xl" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3x1 text-xl">{data.title}</h3>
                    <p className="flex md:text-lg text-gray-500 text-base">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}