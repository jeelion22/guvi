function Form({ getFormData, editData }) {
  return (
    <div className="d-flex form-data justify-content-center">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let todoName = event.target["todo-name"].value;
          let todoDes = event.target["todo-descripion"].value;

          getFormData({ name: todoName, desc: todoDes });
          event.target["todo-name"].value = "";
          event.target["todo-descripion"].value = "";
        }}
        action=""
        className="d-flex gap-1"
      >
        <div>
          <input
            type="text"
            name="todo-name"
            id="todo-name"
            placeholder="ToDo Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="todo-descripion"
            id="todo-descripion"
            placeholder="ToDo Descripion"
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
