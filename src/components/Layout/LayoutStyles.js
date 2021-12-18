import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  max-width: 1100px;
  width: 100%;
  padding: 0 15px;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(34rem, 42rem);
  grid-template-areas:
  "form"
  "methods"
  "summary";
  justify-content: center;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(34rem, 42rem));
    grid-template-areas:
    "form methods"
    ". summary";
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "form methods summary";
  }
`;

export const Content = styled.div`
  grid-area: methods;
`;