import React from "react";
import { Label, Select } from "flowbite-react";
import background from '../images/bg-pattern.jpg'; //imports background


const AddTripForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="bg-fixed min-h-screen bg-cover" style={{ backgroundImage: `url(${background})`, zIndex: 0 }}>
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-Code" value="Code" />
        </div>
        <Select id="input-Code" required name="code" value={formData.code} onChange={handleChange}>
          <option value="">Select Code</option>
          <option value="Code1">Code1</option>
          <option value="Code2">Code2</option>
          <option value="Code3">Code3</option>
          <option value="Code4">Code4</option>
        </Select>
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-Resort" value="Resort" />
        </div>
        <Select id="input-Resort" required name="resort" value={formData.resort} onChange={handleChange}>
          <option value="">Select Resort</option>
          <option value="Emerald Bay">Emerald Bay</option>
          <option value="Blue Lagoon">Blue Lagoon</option>
          <option value="Coral Sands">Coral Sands</option>
          <option value="Coral lagoon">Coral Lagoon</option>
        </Select>
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-Length" value="Length" />
        </div>
        <Select id="input-Length" required name="length" value={formData.length} onChange={handleChange}>
          <option value="">Select Length</option>
          <option value="3 days">3 days</option>
          <option value="5 days">5 days</option>
          <option value="7 days">7 days</option>
        </Select>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-Price" value="Price" />
        </div>
        <Select id="input-Price" required name="perPerson" value={formData.perPerson} onChange={handleChange}>
          <option value="">Select Price</option>
          <option value="499">$499</option>
          <option value="799">$799</option>
          <option value="1199">$1199</option>
        </Select>
      </div>
    </div>
    </div>
  );
};

export default AddTripForm;
