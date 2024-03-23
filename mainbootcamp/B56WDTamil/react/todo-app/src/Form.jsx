import { useState } from "react";

function Form({ getFormData, values, setValues }) {
  // const [values, setValues] = useState({ todoName: "", todoDescription: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getFormData(values);
    setValues({ todoName: "", todoDescription: "" });
  };

  return (
    <div className="d-flex form-data justify-content-center">
      <form onSubmit={handleSubmit} className="d-flex gap-1">
        <div>
          <input
            type="text"
            name="todoName"
            id="todoName"
            placeholder="ToDo Name"
            value={values.todoName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="todoDescription"
            id="todoDescription"
            placeholder="ToDo Descripion"
            value={values.todoDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Add ToDo" />
        </div>
      </form>
    </div>
  );
}

export default Form;
