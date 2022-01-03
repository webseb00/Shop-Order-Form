import { Modal } from './Modal';
import { IconSuccess } from './Styles';

export const OrderSummaryModal = ({ modal, orderDetails}) => {

  const { country, first_name, last_name, zip_code, street, city } = orderDetails?.customer;
  const { order_number, delivery_method, payment_method, total_cost } = orderDetails?.details;

  return (
    <Modal
      show={modal}
      hideClose={true}
    >
      <div className="order-summary_modal">
        <h5 className="order-summary_heading">Dziękujemy za złożenie zamówienia!</h5>
          <IconSuccess />
          Podsumowanie zamówienia:
          <table>
            <tr>
              <td><b>Numer zamówienia:</b></td>
              <td>{order_number}</td>
            </tr>
            <tr>
              <td><b>Adres zamawiającego:</b></td>
              <td>
                <p>ul. {street}</p>
                <p>{city} {zip_code}</p>
                <p>{first_name} {last_name}</p>
                <p>{country}</p>
              </td>
            </tr>
            <tr>
              <td><b>Dostawa:</b></td>
              <td>{delivery_method}</td>
            </tr>
            <tr>
              <td><b>Płatność:</b></td>
              <td>{payment_method}</td>
            </tr>
            <tr>
              <td><b>Do zapłaty:</b></td>
              <td>{total_cost} zł</td>
            </tr>
          </table>
        <a href="" className="order-summary_link">&gt;&gt;&gt; Wróć na stronę główną &gt;&gt;&gt;</a>
      </div>
    </Modal>
  )
}