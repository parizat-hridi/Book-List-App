import React, { useState } from "react";
import { Card } from "./Card";
import Link from "next/link";
import { toFirstLetterUpperCase } from "../utils/helper";

export const CardList = ({
  books = [],
  genre,
  showControls = true,
  bgColor = "bg-gradient-to-r from-green-400 to-blue-500 ...",
}) => {
  const [showCards, setShowCards] = useState(true);

  console.log({ books, genre });

  return (
    <div className={`${bgColor} my-5  rounded-md text-center`}>
      {showControls && (
        <div>
          <header>
            <Link href={`/book/${genre}`}>
              <span className="font-bold text-2xl">
                {toFirstLetterUpperCase(genre)} Books 📚
              </span>
            </Link>
          </header>
          <button
            className="bg-green-700 hover:bg-red-700 text-white font-bold py-1 px-10 rounded-full"
            onClick={() => setShowCards(!showCards)}
          >
            {showCards ? "Hide" : "Show"}
          </button>
        </div>
      )}
      {showCards && (
        <div className="flex justify-around">
          {books.map((book) => (
            <Card key={book.name} {...book} />
          ))}
        </div>
      )}
    </div>
  );
};
