// import UsePopcorn from "./components/usepopcorn/UsePopcorn";
import StarRating from "./components/rating/StarRating";

function App() {
  return (
    <>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating size={24} color="red" className="test" defaultValue={1} />
      {/* <UsePopcorn /> */}
    </>
  );
}

export default App;
