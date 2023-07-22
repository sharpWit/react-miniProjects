// import UsePopcorn from "./components/usepopcorn/UsePopcorn";
// import StarRating from "./components/rating/StarRating";

import GetLocation from "./components/use-geolocation/GetLocation";

// import CurrConverter from "./components/currency-converter/CurrConverter";

// import TextExpand from "./components/text-expander/TextExpand";

// import Tabbed from "./components/tapped/Tabbed";
// import { content } from "./components/tapped/data";

function App() {
  return (
    <>
      {/* <Tabbed content={content} /> */}
      {/* <TextExpand /> */}
      {/* <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating size={24} color="red" className="test" defaultValue={1} /> */}
      {/* <UsePopcorn /> */}
      {/* <CurrConverter /> */}
      <GetLocation />
    </>
  );
}

export default App;
