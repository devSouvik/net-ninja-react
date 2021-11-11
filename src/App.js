import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    closeModal();
  };

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
      <button onClick={showModalFunc}>Add New Event</button>
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
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
