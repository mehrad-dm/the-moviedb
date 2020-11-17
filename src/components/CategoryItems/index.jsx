import { useState } from 'react';
import { getMoviesBasedOnCategory } from 'api/movies';
import MovieCardList from 'components/MovieCardList';
import InfiniteScroll from 'react-infinite-scroller';

const CategoryItems = ({ categoryType }) => {
  const [movies, setMovies] = useState([]);
  const [hasMoreItem, setHasMoreItem] = useState(true);

  const loadMovieItems = (currentPage) => {
    getMoviesBasedOnCategory(categoryType, currentPage).then((data) => {
      setMovies(movies.concat(data.data.results));
      if (currentPage === data.data.total_pages) {
        setHasMoreItem(false);
      }
    });
  };

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMovieItems}
      hasMore={hasMoreItem}
      loader={<div key={0}>loading...</div>}
    >
      <MovieCardList options={movies} />
    </InfiniteScroll>
  );
};

export default CategoryItems;
