import { HeaderTitle } from '../HeaderTitle/HeaderTitle';
import { BsClipboardData } from "react-icons/bs";
import { Wrapper, OrderPart, OrderTop, Thumbnail, Product, OrderBottom, CTAPart } from './Styles';
import { TextareaInput, CheckboxItem } from '../InputElements/InputElements';
import { Button } from '../Button/Button';

function Summary() {
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
            <p className="product_quantity">Ilość: 1</p>
          </Product>
        </OrderTop>
        <OrderBottom>
          <div className="price_top">
            <p>Suma częściowa</p>
            <p>115,00 zł</p>
          </div>
          <div className="price_bottom">
            <p>Łącznie</p>
            <p>115,00 zł</p>
          </div>
        </OrderBottom>
      </OrderPart>
      <CTAPart>
        <TextareaInput 
          name="order_comment"
          placeholder="Komentarz"
        />
        <CheckboxItem 
          label="Zapisz się, aby otrzymywać newsletter"
        />
        <CheckboxItem 
          label="Zapoznałem/am się z Regulaminem zakupów"
        />
        <Button 
          title="Potwierdź zamówienie"
          fontSize="1.55rem"
        />
      </CTAPart>
    </Wrapper>
  )
}

export default Summary;