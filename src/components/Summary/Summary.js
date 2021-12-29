import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsClipboardData } from "react-icons/bs";
import { Wrapper, OrderPart, OrderTop, Thumbnail, Product, OrderBottom, CTAPart } from './Styles';
import { TextareaInput, CheckboxItem } from '../InputElements/InputElements';
import { Button } from '../Button/Button';
import { Message } from '../Message/Message';

function Summary({ deliveryPrice, productPrice, setQuantity, productQuantity, orderAccept, setOrderAccepted, orderAcceptError, submitStatus, register, sendFormStatus }) {
  
  const showDeliveryPrice = () => {
    return (
      <div className="price_top">
        <p>Koszta wysyłki</p>
        <p>{numberToString(deliveryPrice)} zł</p>
      </div>
    )
  }

  const handleQuantity = e => setQuantity(Number(e.target.value));
  const numberToString = number => number.toFixed(2); 
  const handleOrderAccept = () => setOrderAccepted();
  const finalPrice = deliveryPrice ? (deliveryPrice + productPrice * productQuantity) : productPrice;
  
  return (
    <Wrapper>
      <HeaderTitle 
        icon={<BsClipboardData />}
        title="4. Podsumowanie"
      />
      <OrderPart>
        <OrderTop>
          <Thumbnail>&nbsp;</Thumbnail>
          <Product>
            <div className="product_details">
              <p className="product_name">Produkt Testowy</p>
              <p className="product_price">115,00 zł</p>
            </div>
            <p className="product_quantity">Ilość: 
              <input 
                className="product_input"
                type="number" 
                min="1" 
                max="10" 
                name="product_quantity"
                value={productQuantity} 
                onChange={handleQuantity}
              />
            </p>
          </Product>
        </OrderTop>
        <OrderBottom>
          <div className="price_top">
            <p>Suma częściowa</p>
            <p>{numberToString(productQuantity * productPrice)} zł</p>
          </div>
          {deliveryPrice && showDeliveryPrice()}
          <div className="price_bottom">
            <p>Łącznie</p>
            <p>{numberToString(finalPrice)} zł</p>
          </div>
        </OrderBottom>
      </OrderPart>
      <CTAPart>
        <TextareaInput 
          name="order_comment"
          placeholder="Komentarz"
          refs={register("order_comment")}
        />
        <CheckboxItem 
          label="Zapisz się, aby otrzymywać newsletter"
        />
        <CheckboxItem 
          label="Zapoznałem/am się z Regulaminem zakupów"
          checked={orderAccept}
          handler={handleOrderAccept}
        />
        {orderAcceptError && <Message type="danger" text="Proszę zaakceptować regulamin zakupów!" />}
        <Button 
          type="submit"
          title={submitStatus}
          fontSize="1.55rem"
          disabled={sendFormStatus}
        />
      </CTAPart>
    </Wrapper>
  )
}

export default Summary;