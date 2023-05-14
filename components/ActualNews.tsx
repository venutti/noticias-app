import { INew } from "../interfaces/INew";

interface ActualNewsProps {
  news: INew[];
}

export default function ActualNews({ news }: ActualNewsProps) {
  const renderedNews = news.map((n, i) => {
    const isTheLast = i === news.length - 1;
    const className = isTheLast ? "" : " pb-6 border-b-2 border-b-white";
    return (
      <article key={n.title} className={"flex flex-col gap-2 pt-6" + className}>
        <h2 className="text-xl font-bold">{n.title}</h2>
        <p>{n.body.slice(0, 100)}...</p>
        <a href={n.url} target="_blank" className="underline">
          Seguir leyendo {">"}
        </a>
      </article>
    );
  });

  return (
    <div className="h-full bg-slate-900 text-white p-8">
      <h2 className="text-4xl font-bold text-yellow-300">Novedades</h2>
      {renderedNews}
    </div>
  );
}
