// import StepMessage from "./components/steps/StepMessage";
// import Steps from "./components/steps/Steps";

import { useState } from "react";
import Button from "./components/eat-n-split/Button";
import FormAddFriend from "./components/eat-n-split/FormAddFriend";
import FriendsList from "./components/eat-n-split/FriendsList";
import "./components/eat-n-split/index.css";
import FormSplitBill from "./components/tip-calculator/FormSplitBill";
import { initialFriends } from "./components/eat-n-split/data";

// import Accordion, { faqs } from "./components/accordion/Accordion";
// import TipCalculator from "./components/tip-calculator/TipCalculator";
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      {/* <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😍</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>React children prop</p>
        <p>🤩</p>
      </StepMessage> */}
      {/* <Accordion data={faqs} /> */}
      {/* <TipCalculator /> */}

      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
