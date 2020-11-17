import Wrapper from 'components/Header/styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;
