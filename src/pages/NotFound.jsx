import React from "react";

const NotFound = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-9xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
            404
          </h1>

          <p className="mb-4 text-3xl tracking-tight font-bold text-blue-600">
            Что-то пошло не так
          </p>
          <p className="mb-4 text-lg font-light text-blue-500">
            Извините, но мы не смогли найти эту страницу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
