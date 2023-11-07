import { type MovieType } from "@/app/movies/page";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import Link from "next/link";
// id: 11,
//     title: "Fellowship of the Ring",
//     year: 2001,
//     genre: ["Adventure", "Drama", "Fantasy"],
//     rating: 8,
//     director: "Peter Jackson",
//     writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens, Peter Jackson",
//     cast: ["Elijah Wood", "Ian McKellen"],
//     summary:
//       "A young hobbit, Frodo, who has found the One Ring, begins his journey to Mount Doom, where he can destroy it.",
//     imageURL:
export const MovieCard: React.FC<MovieType> = ({
  id,
  imageURL,
  title,
  summary,
}) => {
  console.log(imageURL);
  return (
    <div className={styles.card}>
      <Image
        src={imageURL}
        alt={title}
        width={100}
        height={50}
        className={styles.movieImg}
      />
      <div className={styles.movieInfo}>
        <h3>{title}</h3>
        <p>{summary.substring(0, 30)}...</p>
        <Link href={`/movies/${id}`}>
          <button className={styles.readMoreBtn}>Read more</button>
        </Link>
      </div>
    </div>
  );
};
