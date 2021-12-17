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

  // set errors for payment and delivery methods
  const [errors, setErrors] = useState({
    deliveryErr: null,
    paymentErr: null
  });

  const onSubmit = (data, e) => {
    // prevent submit form when payment and delivery methods are not checked
    if(!state.delivery.method) {
      setErrors({ ...errors, deliveryErr: true });
      e.preventDefault();
    } else if(!state.payment) {
      setErrors({ ...errors, paymentErr: true });
      e.preventDefault();
    } 
    
    handleState({ ...state, form: data });
  };

  const setDelivery = (method, price) => {
    handleState({ ...state, delivery: { method, price }});
    // when user select delivery method, remove message error
    setErrors({ ...errors, deliveryErr: null });
  };

  const setPayment = payment => {
    handleState({ ...state, payment });
    // when user select payment method, remove message error
    setErrors({ ...errors, paymentErr: null });
  }

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
            error={errors.deliveryErr}
          />
          <Payment 
            handlePayment={setPayment} 
            delivery={state.delivery} 
            error={errors.paymentErr}
          />
        </OrderMethods>
        <Summary validate={formValidation} />
      </Layout>
    </form>
  );
}

export default App;
