import React from "react";
import { books } from "../database/books";
import { CardList } from "../components/CardList";

export default function index() {
  const genres = Object.keys(books);

  const colorsArray = ["bg-white", "bg-white", "bg-white", "bg-white"];

  const generesData = genres.map((genre, index) => ({
    name: genre,
    bgColor: colorsArray[index],
  }));

  return (
    <div className="py-2 h-screen bg-gradient-to-r from-green-400 to-blue-500 ...">
      <section>
        <header className="py-3 text-white text-center font-bold text-3xl">
          <span className="text-5xl font-serif text-red-600">B</span>ook📚
          <span className="text-black text-2xl">List</span>
        </header>
        <div className="h-auto w-3/5 mx-auto ">
          {/* Cardlist Section */}
          {generesData.length &&
            generesData.map((genre) => (
              <CardList
                key={genre.name}
                genre={genre.name}
                bgColor={genre.bgColor}
                books={books[genre.name]}
              />
            ))}
        </div>
      </section>
      <div className="flex justify-center text-white">
        <p className="bg-gray-800">
          Made with ❤️ by Parizat Binta Kabir
          <br />
          Copyright © 2020-2021. All rights reserved by Book📚List App
        </p>
      </div>
    </div>
  );
}
