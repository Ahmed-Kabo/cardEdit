import Counters from "./components/counters";
import NavbarHeader from "./components/Nav";
function App() {
  return (
    <>
      <NavbarHeader />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
