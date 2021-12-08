import styled from 'styled-components';

export const Label = styled.label`
  margin: 2.4rem 0;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
  width: 2rem;
  height: 2rem;
`; 

export const InputWrapper = styled.div``;

export const Input = styled.input`
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 5px;
  padding: 1.4rem;
  border: 1px solid #cecece;
  margin-bottom: 10px;
  outline: none;

  &:focus,
  &:focus-visible,
  &:active {
    border: 1px solid #cecece;
    background: #e5eefe;
  }
`;

export const Select = styled.select`
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 1.4rem;
    font-size: 1.5rem;
    outline: none;
`;

export const Option = styled.option``;

