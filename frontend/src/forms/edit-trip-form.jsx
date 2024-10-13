import React from 'react';

const EditTripForm = ({ form, errors, submitted, handleChange, handleSubmit }) => {
  return (
    <div className="col-md-8 offset-md-2">
      <h2 className="text-center">Edit Trip</h2>
      <form onSubmit={handleSubmit}>
        {/* Code Field */}
        <div className="form-group">
          <label>Code:</label>
          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            placeholder="Code"
            className={`form-control ${submitted && errors.code ? 'is-invalid' : ''}`}
          />
          {submitted && errors.code && <div className="invalid-feedback">{errors.code}</div>}
        </div>

        {/* Name Field */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className={`form-control ${submitted && errors.name ? 'is-invalid' : ''}`}
          />
          {submitted && errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Repeat for other fields... */}
        {/* Length Field */}
        <div className="form-group">
          <label>Length:</label>
          <input
            type="text"
            name="length"
            value={form.length}
            onChange={handleChange}
            placeholder="Length"
            className={`form-control ${submitted && errors.length ? 'is-invalid' : ''}`}
          />
          {submitted && errors.length && <div className="invalid-feedback">{errors.length}</div>}
        </div>

        {/* Start Field */}
        <div className="form-group">
          <label>Start:</label>
          <input
            type="date"
            name="start"
            value={form.start}
            onChange={handleChange}
            placeholder="Start"
            className={`form-control ${submitted && errors.start ? 'is-invalid' : ''}`}
          />
          {submitted && errors.start && <div className="invalid-feedback">{errors.start}</div>}
        </div>

        {/* Resort Field */}
        <div className="form-group">
          <label>Resort:</label>
          <input
            type="text"
            name="resort"
            value={form.resort}
            onChange={handleChange}
            placeholder="Resort"
            className={`form-control ${submitted && errors.resort ? 'is-invalid' : ''}`}
          />
          {submitted && errors.resort && <div className="invalid-feedback">{errors.resort}</div>}
        </div>

        {/* Per Person Field */}
        <div className="form-group">
          <label>Per Person:</label>
          <input
            type="number"
            name="perPerson"
            value={form.perPerson}
            onChange={handleChange}
            placeholder="Per Person"
            className={`form-control ${submitted && errors.perPerson ? 'is-invalid' : ''}`}
          />
          {submitted && errors.perPerson && <div className="invalid-feedback">{errors.perPerson}</div>}
        </div>

        {/* Image Name Field */}
        <div className="form-group">
          <label>Image Name:</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image Name"
            className={`form-control ${submitted && errors.image ? 'is-invalid' : ''}`}
          />
          {submitted && errors.image && <div className="invalid-feedback">{errors.image}</div>}
        </div>

        {/* Description Field */}
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className={`form-control ${submitted && errors.description ? 'is-invalid' : ''}`}
          />
          {submitted && errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>

        <button type="submit" className="btn btn-info">Save</button>
      </form>
    </div>
  );
};

export default EditTripForm;
