export default function Loading() {
  // Devuelve un skeleton creado con Tailwind CSS
  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-6 px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-[2]">
          <div className="animate-pulse flex flex-col gap-6">
            <div className="h-96 bg-gray-300 rounded-lg"></div>
          </div>
        </section>
        <section className="flex-1">
          <div className="animate-pulse flex flex-col gap-6">
            <div className="h-96 bg-gray-300 rounded-lg"></div>
          </div>
        </section>
      </div>
      <section>
        <div className="animate-pulse flex flex-col gap-6">
          <div className="h-96 bg-gray-300 rounded-lg"></div>
          <div className="h-96 bg-gray-300 rounded-lg"></div>
          <div className="h-96 bg-gray-300 rounded-lg"></div>
          <div className="h-96 bg-gray-300 rounded-lg"></div>
        </div>
      </section>
    </main>
  );
}
