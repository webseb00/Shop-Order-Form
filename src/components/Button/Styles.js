import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  width: ${props => props.width || '100%'};
  padding: ${props => props.padding || '1.5rem'};
  border-radius: .5rem;
  font-size: ${props => props.fontSize || `1.8rem`};
  font-weight: 500;
  letter-spacing: .3px;
  transition: all .4s ease-in;
  cursor: pointer;

  ${(props) => {
    if(props.disabled) {
      return css`
        opacity: .7;
        cursor: none;
        color: #e54444 !important;
        background: #ffffff !important;
      `;
    }
  }}

  ${(props) => {
    switch (props.mode) {
      case "primary-outlined":
        return css`
          background: transparent;
          border: 2px solid #e54444;
          color: #e54444;

          &:hover {
            background: #e54444;
            color: #ffffff;
          }
        `;
      case "secondary-outlined":
        return css`
          background: transparent;
          border: 2px solid #a89f8f;
          color: #a89f8f;

          &:hover {
            background: #a89f8f;
            color: #ffffff;
          }
        `;
      default:
        return css`
          background: #e54444;
          border: 2px solid #e54444;
          color: #ffffff;

          &:hover {
            background: transparent;
            color: #e54444;
          }
        `;
    }
  }}
`;