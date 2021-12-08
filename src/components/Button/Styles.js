import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: #e54444;
  border-radius: .5rem;
  border: 2px solid #e54444;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: .3px;
  transition: all .4s ease-in;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #e54444;
  }
`;
