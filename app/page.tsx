import { fetchMovies } from "@/api/movies";
import Movies from "@/components/Movies/Movies";

import styles from "./page.module.css";

const Home = async () => {
  const movies = await fetchMovies();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Movies movies={movies} columns={5} />
      </main>
    </div>
  );
};

export default Home;
