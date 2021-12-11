import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: delivery;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 1.5rem;
  }

  span {
    display: flex;
    align-items: center;
  }

  img {
    width: 70px;
    margin: 0 1.2rem;
  }
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;