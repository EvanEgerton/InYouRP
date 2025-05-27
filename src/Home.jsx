import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-center neon-text">
          InYou RP
        </h1>
        <p className="mt-6 text-lg text-center text-gray-300 max-w-2xl mx-auto">
          Добро пожаловать в мир, где каждый может быть собой. InYou RP — это
          свободное, креативное и инклюзивное пространство для ролевой игры в GTA V.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg neon-button"
          >
            Начать игру
          </a>
        </div>
        <div className="mt-24 text-center text-sm text-gray-500">
          © 2025 InYou RP. Все права защищены.
        </div>
      </div>
    </main>
  );
}