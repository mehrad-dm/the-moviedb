import MovieCard from 'components/MovieCard';
import { Wrapper } from 'components/MovieCardList/styled';

function MovieCardList({ options }) {
  return (
    <Wrapper>
      {options.map((data) => {
        return (
          <MovieCard
            key={data.id.toString()}
            title={data.title}
            poster={data.poster_path}
          />
        );
      })}
    </Wrapper>
  );
}

export default MovieCardList;
