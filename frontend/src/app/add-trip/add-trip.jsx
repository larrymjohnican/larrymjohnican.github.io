import React, { useState } from "react";
import AddTripForm from "../../forms/add-trip-form";

const tripData = {
  Code1: {
    resort: "Emerald Bay",
    length: "5 days",
    perPerson: "499"
  },
  Code2: {
    resort: "Blue Lagoon",
    length: "7 days",
    perPerson: "799"
  },
  Code3: {
    resort: "Coral Sands",
    length: "3 days",
    perPerson: "1199"
  },
  Code4: {
    resort: "Coral Lagoon",
    length: "5 days",
    perPerson: "799"
  }
};

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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "code" && tripData[value]) {
      // When a code is selected, automatically populate the form fields
      const selectedTrip = tripData[value];
      setAddForm((prevData) => ({
        ...prevData,
        code: value,
        resort: selectedTrip.resort,
        length: selectedTrip.length,
        perPerson: selectedTrip.perPerson
      }));
    } else {
      // Handle normal form changes
      setAddForm((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", addForm);
  };

  return (
    <div>
      <h1 className="text-center">Add Trip Form</h1>
      <form onSubmit={handleSubmit}>
        <AddTripForm formData={addForm} handleChange={handleChange} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default AddTripComponent;
