// Import main component files
import Form from './components/Form/Form';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello react!
        <Form />
        <Delivery />
        <Payment />
        <Summary />
      </header>
    </div>
  );
}

export default App;
