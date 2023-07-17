// import StepMessage from "./components/steps/StepMessage";
// import Steps from "./components/steps/Steps";

import Accordion, { faqs } from "./components/accordion/Accordion";
function App() {
  return (
    <div>
      {/* <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😍</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>React children prop</p>
        <p>🤩</p>
      </StepMessage> */}
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
