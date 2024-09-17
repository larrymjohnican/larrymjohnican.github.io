import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Form } from '@hooks/use-form';
import { TripDataService } from '../services/trip-data.service';

//This component will edit a trip
const EditTripComponent = () => {
  const history = useHistory();
  const [trip, setTrip] = useState(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //Use the useForm hook to create a form with validation
  const { editForm } = useForm({
    _id: '',
    code: ['', Validators.required],
    name: ['', Validators.required],
    length: ['', Validators.required],
    start: ['', Validators.required],
    resort: ['', Validators.required],
    perPerson: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required]
  });

  //Retrieve the stashed trip ID
  useEffect(() => {
    const tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      history.push('/');
      return;
    }
    console.log('EditTripComponent::useEffect');
    console.log('tripcode:' + tripCode);

    //Use the TripDataService to get the trip by code
    TripDataService.getTrip(tripCode)
      .then((response) => {
        setTrip(response);
        editForm.patchValues(response[0]); // Populate the form with the retrieved trip data
        setMessage(`Trip ${tripCode} retrieved`);
      })
      .catch((error) => {
        console.log('Error: ' + error);
        setMessage('No trip Retrieved!');
      });
  }, []);

  //Handle the form submission
  const onSubmit = () => {
    setSubmitted(true);
    if (editForm.valid) {
      TripDataService.updateTrip(editForm.value)
        .then((response) => {
          console.log(response);
          history.push('/');
        })
        .catch((error) => {
          console.log('Error: ' + error);
        });
    }
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        state={editForm}
        validator={
          Validators.compose([
            Validators.required(),
            Validators.email()
          ])
        }
      >
        {/* Add your form template here */}
        // Form fields go here
      </Form>
    </div>
  );
};

export default EditTripComponent;
