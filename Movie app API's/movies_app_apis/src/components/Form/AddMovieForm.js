import React from "react";
import Input from "../UI/Input";

const Form = (props) => {
  const submithandler = (e) => {
    e.preventDefault();

    const movie = {
      id: Math.random(),
      title: e.target.title.value,
      openingText: e.target.text.value,
      releaseDate: e.target.date.value,
    };
    props.AddMovie(movie);
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <Input type="text" label="Title" name="title" />

        <Input type="text" label="Opening Text" name="text" classname="text" />

        <Input type="text" label="Release Date" name="date" />

        <button type="submit">Add Movie</button>
      </form>
    </>
  );
};
export default Form;
