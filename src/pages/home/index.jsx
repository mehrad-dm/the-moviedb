import { useEffect, useState } from 'react';
import CategoryList from 'components/CategoryList';
import { HomeTitle, HomeCategory } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getGenreList } from 'redux/genres/actions';
import GenresTagList from 'components/GenresTagList';
import { getMovieList as getMovieListRequest } from 'api/movies';
import MovieCardList from 'components/MovieCardList';
import InfiniteScroll from 'react-infinite-scroller';

function Home() {
  const [selectedGenresTag, setSelectedGenresTag] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [hasMoreItem, setHasMoreItem] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { list, isFetched } = useSelector((state) => state.genres);

  const handleGenreTagChange = (event, selectedItem) => {
    let _selectedGenresTag = [...selectedGenresTag];

    if (_selectedGenresTag.includes(selectedItem.id)) {
      _selectedGenresTag = _selectedGenresTag.filter(
        (genreTagId) => genreTagId !== selectedItem.id
      );
    } else {
      _selectedGenresTag.push(selectedItem.id);
    }

    setSelectedGenresTag(_selectedGenresTag);
  };

  const loadMovieItems = (
    currentPage,
    _selectedGenresTag = selectedGenresTag
  ) => {
    getMovieListRequest(_selectedGenresTag, currentPage).then((data) => {
      if (currentPage === 1) {
        setMovieList(data.data.results);
      } else {
        setMovieList(movieList.concat(data.data.results));
      }

      if (
        currentPage === data.data.total_pages ||
        data.data.total_pages === 0
      ) {
        setHasMoreItem(false);
      } else {
        setHasMoreItem(true);
      }
    });
  };

  useEffect(() => {
    if (!isFetched) {
      dispatch(getGenreList());
    }
  }, []);

  useEffect(() => {
    setHasMoreItem(false);
    setMovieList([]);
    setPage(1);
    loadMovieItems(1, selectedGenresTag);
  }, [selectedGenresTag]);

  return (
    <>
      <GenresTagList options={list} onChange={handleGenreTagChange} />

      <HomeTitle>Welcome</HomeTitle>
      <HomeCategory>
        <CategoryList />
      </HomeCategory>

      <InfiniteScroll
        pageStart={page}
        loadMore={loadMovieItems}
        hasMore={hasMoreItem}
        loader={<div key={0}>loading...</div>}
      >
        <MovieCardList options={movieList} />
      </InfiniteScroll>
    </>
  );
}

export default Home;
