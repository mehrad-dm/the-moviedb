import { Card, CardImg, CardTitle } from 'components/MovieCard/styled';

function MovieCard({ title, poster }) {
  return (
    <Card>
      <CardImg alt={title} src={`https://image.tmdb.org/t/p/w500/${poster}`} />
      <CardTitle>title: {title}</CardTitle>
    </Card>
  );
}

export default MovieCard;
