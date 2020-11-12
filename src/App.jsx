import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

import './App.css';

function App() {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
