import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TripDataService } from '../services/trip-data';
import EditTripForm from '../../forms/edit-trip-form';

// This component will edit a trip
const EditTripComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Retrieve the stashed trip ID and populate the form
  useEffect(() => {
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Something went wrong; couldn't find the stashed tripCode!");
      navigate('/');
      return;
    }
    console.log('EditTripComponent::useEffect');
    console.log('tripCode:', tripCode);

    // Use the TripDataService to get the trip by code
    TripDataService.getTrip(tripCode)
      .then((response) => {
        if (response && response.length > 0) {
          setForm(response[0]); // Populate the form with the retrieved trip data
        } else {
          console.log('No trip data found.');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [navigate]);

  // Form validation logic
  const validateForm = () => {
    let newErrors = {};
    if (!form.code) newErrors.code = 'Trip Code is required';
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.length) newErrors.length = 'Length is required';
    if (!form.start) newErrors.start = 'Date is required';
    if (!form.resort) newErrors.resort = 'Resort is required';
    if (!form.perPerson) newErrors.perPerson = 'Per Person is required';
    if (!form.image) newErrors.image = 'Image Name is required';
    if (!form.description) newErrors.description = 'Description is required';
    return newErrors;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setSubmitted(true);

    if (Object.keys(newErrors).length === 0) {
      TripDataService.updateTrip(form)
        .then((response) => {
          console.log('Trip updated successfully:', response);
          navigate('/');
        })
        .catch((error) => {
          console.log('Error updating trip:', error);
        });
    }
  };

  return (
    <div>
      <EditTripForm
        form={form}
        errors={errors}
        submitted={submitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditTripComponent;
