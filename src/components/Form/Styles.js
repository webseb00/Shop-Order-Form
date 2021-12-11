import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: form;
`;

export const InfoPart = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

export const InfoText = styled.span`
  display: inline-block;
  font-size: 1.34rem;
  font-weight: 400;
  margin-top: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;

  & :first-child {
    margin-right: 1rem;
  }
`;