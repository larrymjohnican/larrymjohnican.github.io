import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const AddTripForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Label>Code</Form.Label>
        <FormControl
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Name</Form.Label>
        <FormControl
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Length</Form.Label>
        <FormControl
          type="text"
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Start Date</Form.Label>
        <FormControl
          type="date"
          name="start"
          value={formData.start}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Resort</Form.Label>
        <FormControl
          type="text"
          name="resort"
          value={formData.resort}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Form.Label>Cost Per Person</Form.Label>
        <FormControl
          type="number"
          name="perPerson"
          value={formData.perPerson}
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
          value={formData.description}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button type="submit">Add Trip</Button>
    </Form>
  );
};

export default AddTripForm;
