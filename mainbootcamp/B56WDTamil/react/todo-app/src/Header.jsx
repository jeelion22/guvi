import Title from "./Title";
import Form from "./Form";

function Header({ getFormData, editData }) {
  return (
    <div className="container text-center">
      <Title />
      <Form getFormData={getFormData} editData={editData} />
    </div>
  );
}

export default Header;
