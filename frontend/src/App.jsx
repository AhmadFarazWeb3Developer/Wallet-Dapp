import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <section className="artboard phone-1 min-w-full min-h-full flex items-center flex-col">
        <Header />
        <Home />
      </section>
    </>
  );
}

export default App;
