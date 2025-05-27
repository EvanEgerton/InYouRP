import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-5xl font-bold mb-4 neon-text">Добро пожаловать в InYou RP</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Здесь начинается твоя история. Это не просто RP-сервер — это реальность, где каждый может быть собой.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-xl shadow-lg transition-all"
          >
            Присоединиться
          </a>
        </div>
      </div>
    </main>
  );
}