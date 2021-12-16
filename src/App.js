import { useState } from 'react';
// Import main component files
import ClientData from './components/ClientData/ClientData';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';
import { Layout, OrderMethods } from './components/Layout/Layout';
// use react hook form library for handling form
import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit, formState } = useForm();
  
  const [state, handleState] = useState({
    delivery: {
      method: null,
      price: null
    },
    payment: null,
    form: {
      
    }
  });

  const onSubmit = data => handleState({ ...state, form: data });

  const setDelivery = (method, price) => {
    handleState({ ...state, delivery: { method, price }});
  };
  const setPayment = payment => handleState({ ...state, payment });

  const formValidation = () => {
    console.log('submit form');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Layout>
        <ClientData 
          form={state.form}
          register={register}
          errors={formState.errors}
        />
        <OrderMethods>
          <Delivery 
            handleDelivery={setDelivery} 
          />
          <Payment 
            handlePayment={setPayment} 
            delivery={state.delivery} 
          />
        </OrderMethods>
        <Summary validate={formValidation} />
      </Layout>
    </form>
  );
}

export default App;
