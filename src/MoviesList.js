import { Movies } from './Movies';

export function MoviesList({movies}) {
  

  return (
    <div className="Movies">
      {movies.map(({ name, poster, rating, summary }) => (
        <Movies name={name}
          poster={poster}
          rating={rating}
          summary={summary} />))}
    </div>);
}
