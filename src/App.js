import { useState, useEffect } from 'react';
// Import main component files
import ClientData from './components/ClientData/ClientData';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';
import { Layout, OrderMethods } from './components/Layout/Layout';
// use react hook form library for handling form
import { useForm } from "react-hook-form";
import axios from 'axios';

function App() {
  // react hook form
  const { register, handleSubmit, formState } = useForm();
  // main app state
  const [state, handleState] = useState({
    delivery: {
      method: null,
      price: null
    },
    product: {
      price: 115,
      name: "Produkt testowy",
      quantity: 1
    },
    payment: null,
    form: null,
    orderAccept: false,
    submitFormStatus: 'Złóż zamówienie',
    sendFormStatus: false
  });

  
  // set errors for payment and delivery methods
  const [errors, setErrors] = useState({
    deliveryErr: null,
    paymentErr: null,
    orderAcceptErr: null
  });
  
  const handleMethodError = (obj, e) => {
    setErrors({ ...errors, ...obj });
    e.preventDefault();
  }

  const setProductQuantity = quantity => handleState({ ...state, product: { ...state.product, quantity } });
  
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

  const setOrderAccepted = () => {
    handleState({ ...state, orderAccept: !state.orderAccept });
    setErrors({ ...errors, orderAcceptErr: null });
  };

  const onSubmit = (data, e) => {
    // allow send form only when user accepts order
    if(state.orderAccept) {
      if(state.delivery.method === "DPD - pobranie" && state.payment !== "pobranie") {
        handleMethodError({ paymentErr: true }, e);
        return false;
      }
      // prevent submit form when payment and delivery methods are not checked
      if(!state.delivery.method) {
        handleMethodError({ deliveryErr: true }, e);
        return false;
      }
  
      if(!state.payment) {
        handleMethodError({ paymentErr: true }, e);
        return false;
      } 
      
      handleState({ ...state, form: data, submitFormStatus: true });

    } else {
      handleMethodError({ orderAcceptErr: true }, e);
      return false;
    }
  };

  useEffect(() => {
    if(state.form) {
      sendOrderData();
    }
  }, [state.form])

  const sendOrderData = async () => {
    handleState({ ...state, submitFormStatus: 'Wysyłanie zamówienia...' });
    
    const order = {
      client: state.form,
      delivery: state.delivery,
      method: state.payment
    }

    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost/shop-order-form/`,
        headers: { 'content-type': 'application/json' },
        data: order
      });

      if(response.data.success) {
        // delay sending order only for demonstration purposes!
        setTimeout(() => {
          handleState({ ...state, submitFormStatus: 'Zamówienie wysłane!', sendFormStatus: true })
        }, 3000);
      }
    } catch(error) {
      console.error(error);
    }
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
            delivery={state.delivery.method} 
            error={errors.paymentErr}
          />
        </OrderMethods>
        <Summary 
          deliveryPrice={state.delivery.price}
          productPrice={state.product.price}
          setQuantity={setProductQuantity}
          productQuantity={state.product.quantity}
          orderAccept={state.orderAccept}
          setOrderAccepted={setOrderAccepted}
          orderAcceptError={errors.orderAcceptErr}
          submitStatus={state.submitFormStatus}
          register={register}
          sendFormStatus={state.sendFormStatus}
        />
      </Layout>
    </form>
  );
}

export default App;
