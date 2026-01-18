//TODO: Set up a form to collect users' data
import { useState } from "react";

export default function Form() {
  //STORE FORM DATA IN STATE
  //- one state for our form values
  const [formValues, setFormValues] = useState({
    recipe_name: "",
    ingredients: "",
    recipe_time: "",
    method: "",
    image_link: "",
  });

  //HANDLE THE INPUT CHANGES --> we need to tell React when the changes in the data are happening, as they happen
  //event --> onChange
  //- use spread (...) operator to merge objects
  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    //here, we will send the form data to the server
    //-fetch the server POST route
    //-declare the headers (body) --> method, content type, body (and the body value is your state)
    fetch("http://localhost:8080/add-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  }
  return (
    <>
      <h1>Staff Form</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="recipe_name">Recipe name: </label>
        <input
          type="text"
          name="recipe_name"
          value={formValues.recipe_name}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          name="ingredients"
          value={formValues.ingredients}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="recipe_time">Recipe time: </label>
        <input
          type="number"
          name="recipe_time"
          value={formValues.recipe_time}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="method">Method: </label>
        <input
          type="text"
          name="method"
          value={formValues.method}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="image_link">Image link: </label>
        <input
          type="url"
          name="image_link"
          value={formValues.image_link}
          required
          onChange={handleInputChange}
        />

        <button type="Submit">SUBMIT</button>
      </form>
    </>
  );
}
