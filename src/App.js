import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { id: 1, title: "my name is souvik" },
    { id: 2, title: "my name is soumi" },
    { id: 3, title: "I am a good boy" },
  ]);

  console.log(showModal);

  function closeModal() {
    setShowModal(false);
  }

  function showModalFunc() {
    setShowModal(true);
  }

  const handleClick = (id) => {
    console.log(id);
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id; // for removing the element in lists
      });
    });
  };

  return (
    <div className="App">
      <Title text="This is the title " subtext="this is the subtitle" />
      <button onClick={showModalFunc}>Show Modal</button>
      <hr />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal closeModal={closeModal} isSalesModal={true}>
          <div>
            <h2>Terms and Conditions</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              itaque et ipsum perspiciatis atque consectetur? Quae consequatur
              magnam ipsam reiciendis!
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
