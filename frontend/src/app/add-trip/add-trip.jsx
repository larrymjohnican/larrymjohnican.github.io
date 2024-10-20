import React, { useState } from "react";
import AddTripForm from "../../forms/add-trip-form";

const AddTripComponent = () => {
  const [addForm, setAddForm] = useState({
    _id: "",
    code: "",
    name: "",
    length: "",
    start: "",
    resort: "",
    perPerson: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", addForm);
  };

  return (
    <div>
      <h1>Add Trip Form</h1>
      <form onSubmit={handleSubmit}>
        <AddTripForm formData={addForm} handleChange={handleChange} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default AddTripComponent;