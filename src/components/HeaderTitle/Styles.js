import styled from 'styled-components';

export const Header = styled.div`
  background: #a89f8f;
  border-radius: .5rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.span`
  color: #ffffff;
  font-size: 2.2rem;
  margin-right: 1rem;

  & > svg {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
  }
`;

export const Title = styled.h5`
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.8rem;
`;