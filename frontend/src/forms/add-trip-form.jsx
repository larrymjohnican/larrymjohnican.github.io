import React from "react";
import { Label, Select, Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import background from '../images/bg-pattern.jpg'; //imports background

const AddTripForm = ({ formData, handleChange }) => {
  const [openModal, setOpenModal] = useState(false); // Initially, modal is closed
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setOpenModal(true); // Open the modal after form submission
  };

  return (
    <div className="bg-fixed min-h-screen bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${background})`, zIndex: 0 }}>
      <div className="flex flex-col max-w-md gap-4 mx-auto">

        {/* Code Field */}
        <div>
          <div className="mb-2 block flex justify-center">
            <Label htmlFor="input-Code" value="Code" />
          </div>
          <Select id="input-Code" required name="code" value={formData.code} onChange={handleChange}>
            <option value="">Select Code</option>
            <option style={{ textAlign: 'center' }} value="Code1">Code1</option>
            <option style={{ textAlign: 'center' }} value="Code2">Code2</option>
            <option style={{ textAlign: 'center' }} value="Code3">Code3</option>
            <option style={{ textAlign: 'center' }} value="Code4">Code4</option>
          </Select>
        </div>

        {/* Resort Field */}
        <div>
          <div className="mb-2 block flex justify-center">
            <Label htmlFor="input-Resort" value="Resort" />
          </div>
          <Select id="input-Resort" required name="resort" value={formData.resort} onChange={handleChange} disabled>
            <option value="">Select Resort</option>
            <option style={{ textAlign: 'center' }} value="Emerald Bay">Emerald Bay</option>
            <option style={{ textAlign: 'center' }} value="Blue Lagoon">Blue Lagoon</option>
            <option style={{ textAlign: 'center' }} value="Coral Sands">Coral Sands</option>
            <option style={{ textAlign: 'center' }} value="Coral Lagoon">Coral Lagoon</option>
          </Select>
        </div>

        {/* Length Field */}
        <div>
          <div className="mb-2 block flex justify-center">
            <Label htmlFor="input-Length" value="Length" />
          </div>
          <Select id="input-Length" required name="length" value={formData.length} onChange={handleChange} disabled>
            <option style={{ textAlign: 'center' }} value="">Select Length</option>
            <option style={{ textAlign: 'center' }} value="3 days">3 days</option>
            <option style={{ textAlign: 'center' }} value="5 days">5 days</option>
            <option style={{ textAlign: 'center' }} value="7 days">7 days</option>
          </Select>
        </div>

        {/* Price Field */}
        <div>
          <div className="mb-2 block flex justify-center">
            <Label htmlFor="input-Price" value="Price" />
          </div>
          <Select id="input-Price" required name="perPerson" value={formData.perPerson} onChange={handleChange} disabled>
            <option style={{ textAlign: 'center' }} value="">Select Price</option>
            <option style={{ textAlign: 'center' }} value="499">$499</option>
            <option style={{ textAlign: 'center' }} value="799">$799</option>
            <option style={{ textAlign: 'center' }} value="1199">$1199</option>
          </Select>
        </div>

        {/* Submit Button and Modal */}
        <div className="mb-2 block flex justify-center">
          <Button color="gray" onClick={handleSubmit}>Submit</Button>
          <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to buy this product?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

      </div>
    </div>
  );
};

export default AddTripForm;
