import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: delivery;
  margin-bottom: 2rem;
`;

export const BoxWrapper = styled.div`
  margin: 0 .8rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.4rem 0;

  label {
    font-size: 1.5rem;
    margin: 0;
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