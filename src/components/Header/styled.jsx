import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #222;
  position: sticky;
  top: 0;
  padding: 20px;
  a {
    color: #fff;
    font-size: 16px;
    &::hover,
    :focus {
      color: #f5f5f5;
    }
  }
`;

export default Wrapper;
