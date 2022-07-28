import { useState } from "react";

import { useMeetupsContext } from "../../context/MeetupsProvider";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const { addMeetup } = useMeetupsContext();

  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function submitHandler(event) {
    event.preventDefault();
    addMeetup(formValues);
    setFormValues({});
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            name="title"
            type="text"
            required
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            name="image"
            type="url"
            required
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            required
            id="address"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            required
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
