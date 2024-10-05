import "./App.css";
import ConfirmTransaction from "./components/ConfirmTransaction/ConfirmTransaction";
import SendTokens from "./components/SendTokens/SendTokens";
import { Main } from "./components/Main/Main";
import { Transaction } from "./components/TransactionDetails/Transaction";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <section className="artboard phone-1 min-w-full min-h-full flex items-center flex-col">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sendTokens" element={<SendTokens />} />
          <Route path="/confirmTransaction" element={<ConfirmTransaction />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
