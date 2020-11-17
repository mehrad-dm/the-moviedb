import { Link } from 'react-router-dom';
import { HomeSubtitle } from 'pages/home/styled';

const categories = [
  { name: 'now playing', path: '/categories/now-playing' },
  { name: 'Popular', path: '/categories/popular' },
  { name: 'Top rated', path: '/categories/top-rated' },
  { name: 'Upcoming', path: '/categories/upcoming' },
];

function CategoryList() {
  return (
    <div>
      <HomeSubtitle>Categories</HomeSubtitle>

      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
