import SlowComponent from "./SlowComponent";
import Counter from "./Counter";

export default function Test() {
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
