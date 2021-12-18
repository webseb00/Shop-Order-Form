import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: summary;
`;

export const OrderPart = styled.div`
  margin: 2.4rem 0 1.4rem;
`;

export const OrderTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1.4rem;
`;

export const Thumbnail = styled.div`
  width: 12rem;
  height: 6rem;
  background: black;
  margin-right: 1rem; 
`;

export const Product = styled.div`

  .product_details {
    display: flex;
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .product_name {
    margin-right: 15px;
  }

  .product_price {
    margin-right: 5px;
  }

  .product_input {
    margin-left: 10px;
    width: 50px;
    padding: 6px;
    border: 1px solid #cecece;
    border-radius: 5px;
    outline: none;
  }

`;

export const OrderBottom = styled.div`
  padding: 1.4rem 0;
  border-top: 1px dashed #a89f8f;
  border-bottom: 1px dashed #a89f8f;

  .price_top,
  .price_bottom {
    display: flex;

    p:last-child {
      margin-left: auto;
    }
  }

  .price_bottom {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 0.8rem;
  }
`;

export const CTAPart = styled.div`
  label {
    font-size: 1.4rem;
  }

  button {
    margin-top: 2rem;
    padding: 3rem 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0;
  }
`;