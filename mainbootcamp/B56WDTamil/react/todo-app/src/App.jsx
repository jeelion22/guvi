import { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
// import "./App.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  const [FormData, setFormData] = useState([]);
  const [editData, seteditData] = useState({});

  let getFormData = (formData) => {
    formData = { ...formData, id: Math.random(), status: "Not Completed" };

    setFormData([...FormData, formData]);
  };

  let deleteToDo = (FormDataId) => {
    setFormData(FormData.filter((data) => data.id !== FormDataId));
  };

  let editToDo = (data) => {
    seteditData(data);
    console.log(editData);
  };

  return (
    <div className="homepage">
      <Header getFormData={getFormData} editData={editData} />

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
