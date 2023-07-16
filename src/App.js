import Accordion, { faqs } from "./components/accordion/Accordion";
function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
