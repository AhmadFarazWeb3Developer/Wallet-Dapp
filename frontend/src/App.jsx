import "./App.css";
import ConfirmTransaction from "./components/ConfirmTransaction/ConfirmTransaction";
import SendTokens from "./components/SendTokens/SendTokens";
import { Main } from "./components/Main/Main";
import { Transaction } from "./components/TransactionDetails/Transaction";
function App() {
  return (
    <>
      <section className="artboard phone-1 min-w-full min-h-full flex items-center flex-col">
        {/* <Main /> */}

        {/* <SendTokens /> */}
        {/* <ConfirmTransaction /> */}
        <Transaction />
      </section>
    </>
  );
}

export default App;
