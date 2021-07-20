import { useRouter } from "next/router";
import { books } from "../../database/books";
import { CardList } from "../../components/CardList";
import { toFirstLetterUpperCase } from "../../utils/helper";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const { genre } = router.query;

  return (
    <section className=" py-5 h-screen bg-gradient-to-r from-green-400 to-blue-500 ...">
      <header className="py-3 text-3xl mx-auto rounded-md text-center bg-black text-white w-1/3 h-auto">
        {toFirstLetterUpperCase(genre)} Books 📚
      </header>
      <CardList genre={genre} books={books[genre]} showControls={false} />
      <div className="p-40 flex justify-center">
        <Link href="/">
          <button className="bg-black hover:bg-red-500 text-white  font-bold py-2 px-4 rounded-full">
            &lArr; Go Back
          </button>
        </Link>
      </div>
    </section>
  );
};
