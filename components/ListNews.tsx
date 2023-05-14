import Image from "next/image";
import { INew } from "../interfaces/INew";

interface ListNewsProps {
  news: INew[];
}

export default function ListNews({ news }: ListNewsProps) {
  if (!news) return null;

  const renderedNews = news.map((n, i) => {
    const indexLabel = String(i + 1).padStart(2, "0");
    return (
      <div key={n.title} className="p-2 flex gap-4 min-h-[150px]">
        <div className="h-full flex-1 relative overflow-hidden">
          <Image
            src={n.image}
            alt={n.title}
            loader={({ src }) => src}
            fill={true}
            sizes="(max-width: 1100px) 33vw, 15vw"
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 flex-[2]">
          <div className="font-extrabold text-5xl opacity-50">{indexLabel}</div>
          <a href={n.url} target="_blank">
            <h3 className="font-bold text-lg hover:text-blue-500">{n.title}</h3>
          </a>
        </div>
      </div>
    );
  });

  return <div className="my-6 grid gap-4 xl:grid-cols-3">{renderedNews}</div>;
}
