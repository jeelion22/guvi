import Title from "./Title";
import Form from "./Form";

function Header({ getFormData, values, setValues }) {
  return (
    <div className="container text-center">
      <Title />
      <Form getFormData={getFormData} values={values} setValues={setValues} />
    </div>
  );
}

export default Header;
