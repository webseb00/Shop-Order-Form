import { useState } from 'react';
// Import main component files
import Form from './components/Form/Form';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';

import { Layout, OrderMethods } from './components/Layout/Layout';

function App() {

  const [state, handleState] = useState({
    delivery: null,
    payment: null
  });

  const setDelivery = delivery => handleState({ ...state, delivery });
  const setPayment = payment => handleState({ ...state, payment });

  return (
    <Layout>
      <Form />
      <OrderMethods>
        <Delivery 
          handleDelivery={setDelivery} 
        />
        <Payment 
          handlePayment={setPayment} 
          delivery={state.delivery} 
        />
      </OrderMethods>
      <Summary />
    </Layout>
  );
}

export default App;
