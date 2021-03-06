import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };

    console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <p>
        Title : {title} , date: {date}
      </p>

      <button>Submit</button>
      <p
        onClick={resetForm}
        style={{
          padding: "10px",
          color: "#fff",
          backgroundColor: "grey",
          width: "70px",
          textAlign: "center",
          //   paddingLeft: "50%",
          marginLeft: "41%",
        }}
      >
        Reset Form
      </p>
    </form>
  );
}
