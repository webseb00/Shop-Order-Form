import styled from 'styled-components';

export const Content = styled.p`
  color: ${props => props.type === "danger" ? '#e54444' : '#27ae60'};
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
`;