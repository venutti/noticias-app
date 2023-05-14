"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid place-content-center">
      <h3 className="text-3xl text-center">
        Hubo un error al traer las noticias
      </h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
