import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 0 15px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "form methods summary";
  margin: 0 auto;
  grid-gap: 20px;
`;

export const Content = styled.div`
  grid-area: methods;
`;