import Image from "next/image";
import { INew } from "../interfaces/INew";

interface MainNewProps {
  mainNew: INew;
}

export default function MainNew({ mainNew }: MainNewProps) {
  if (!mainNew) {
    return null;
  }
  return (
    <article className="flex flex-col gap-6">
      <div className="relative overflow-hidden min-h-[400px]">
        <Image
          src={mainNew.image}
          alt={mainNew.title}
          loader={({ src }) => src}
          fill
          sizes="(max-width: 1100px) 100vw, 66vw"
          priority
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <h2 className="text-3xl font-semibold flex-[3]">{mainNew.title}</h2>
        <div className="flex flex-col items-start justify-between gap-2 flex-[4]">
          <p>{mainNew.body.slice(0, 700)}...</p>
          <a href={mainNew.url} target="_blank">
            <button className="bg-red-500 text-white uppercase px-6 py-2">
              Seguir leyendo
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}
