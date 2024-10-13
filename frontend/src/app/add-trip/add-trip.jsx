import React, { useState } from "react";
import Form from "../../forms/add-trip-form";

const AddTripComponent = () => {
  // Initialize state for form data
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

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    setSubmitted(true);

    // Simple validation check
    if (Object.values(addForm).some((field) => field === "")) {
      alert("All fields are required!");
      return;
    }

    // Proceed with form submission logic (e.g., send data to an API)
    console.log("Form submitted:", addForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {addForm.code && (
        <AddTripForm
          formData={addForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </Form>
  );
};

export default AddTripComponent;
