import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  margin: auto 0.2em;
`;

export const Label = styled.label`
  transition: 0.3s;
  padding: 8px;
  border: 1px solid #cccccc;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
`;

export const HiddenInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;

  &:checked + ${Label} {
    border: 1px solid blue;
    background-color: blue;
    color: white;
  }
`;
