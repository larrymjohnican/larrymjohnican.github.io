import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap"; 

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

  const [submitted, setSubmitted] = useState(false); // keep track of form submission

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm({
      ...addForm,
      [name]: value
    });
  };

  // Handle form submission
  const onSubmit = (e) => {
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
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Form.Label>Code</Form.Label>
        <FormControl
          type="text"
          name="code"
          value={addForm.code}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Name</Form.Label>
        <FormControl
          type="text"
          name="name"
          value={addForm.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Length</Form.Label>
        <FormControl
          type="text"
          name="length"
          value={addForm.length}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <FormControl
          type="date"
          name="start"
          value={addForm.start}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Resort</Form.Label>
        <FormControl
          type="text"
          name="resort"
          value={addForm.resort}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Cost Per Person</Form.Label>
        <FormControl
          type="number"
          name="perPerson"
          value={addForm.perPerson}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Image</Form.Label>
        <FormControl
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Description</Form.Label>
        <FormControl
          as="textarea"
          name="description"
          value={addForm.description}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button type="submit">Add Trip</Button>
    </Form>
  );
};

export default AddTripComponent;
