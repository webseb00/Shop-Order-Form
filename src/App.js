// Import main component files
import Form from './components/Form/Form';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';

import { Layout, OrderMethods } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Form />
      <OrderMethods>
        <Delivery />
        <Payment />
      </OrderMethods>
      <Summary />
    </Layout>
  );
}

export default App;
