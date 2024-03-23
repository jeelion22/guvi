import { useState } from "react";

import "/node_modules/bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [values, setValues] = useState({ todoName: "", todoDescription: "" });
  const [FormData, setFormData] = useState([]);

  let getFormData = (formData) => {
    if (formData.id) {
      FormData.map((data) => {
        if (data.id === formData.id) {
          data.todoDescription = formData.todoDescription;
          data.todoName = formData.todoName;
        }
      });
    } else {
      formData = {
        ...formData,
        id: FormData.length + 1,
        status: "Not Completed",
      };

      setFormData([...FormData, formData]);
    }
  };

  let deleteToDo = (FormDataId) => {
    setFormData(FormData.filter((data) => data.id !== FormDataId));
  };

  let editToDo = (data) => {
    setValues(data);
    console.log(data);
  };

  return (
    <div className="homepage">
      <Header getFormData={getFormData} values={values} setValues={setValues} />

      <div>
        <Navbar />
        <div className="row">
          {FormData.length > 0 ? (
            <>
              {FormData.map((obj, index) => {
                return (
                  <Card
                    key={index}
                    FormData={obj}
                    deleteToDo={deleteToDo}
                    editToDo={editToDo}
                  />
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
