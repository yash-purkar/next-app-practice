import Image from "next/image";
import { MovieType, movies } from "../page";
import styles from "./movieDetails.module.css";
import Link from "next/link";
const Page = ({ params }) => {
  const movie: MovieType | undefined = movies.find(
    (movie: MovieType) => movie.id === Number(params.movieID)
  );
  console.log({ movies, params });
  const { title, imageURL, summary } = movie || {};
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
        <Link href={`/movies`}>
          <button className={styles.goBackBtn}>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
