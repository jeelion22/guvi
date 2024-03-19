function Card({ FormData, deleteToDo, editToDo }) {
  return (
    <div className="card" style={{ width: "25rem", height: "12rem" }}>
      <div className="card-body p-2">
        <h5 className="card-title">Name: {FormData.name}</h5>

        <p className="card-text">Description: {FormData.desc}</p>
        <div className="status-check b-5">
          <label htmlFor="status">
            Status:
            <select
              className="status m-2"
              name="status"
              id=""
              defaultValue={"Not Completed"}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="">Completed</option>
            </select>
          </label>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
          <button
            onClick={() => {
              editToDo(FormData);
            }}
            className="btn btn-primary me-md-2 border-0"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteToDo(FormData.id);
            }}
            className="btn btn-primary bg-danger border-0"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
