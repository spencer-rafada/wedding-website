import React, { useState } from 'react';

export default function RSVPForm() {
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // rsvp: { type: Boolean, required: true },
  // note: { type: String },
  // people: [{ person: String, rsvp: Boolean }],
  // address: { type: String, required: true },
  // city: { type: String, required: true },
  // state: { type: String, required: true },
  // zip: { type: Number, required: true },
  // country: { type: String, required: true },
  // phone: { type: Number },
  // email: { type: String }
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    rsvp: false,
    note: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: ''
  });
  const [people, setPeople] = useState([{ person: '', rsvp: false }]);

  const handleChange = (key) => {
    return ({ target: { value } }) => {
      if (key === 'rsvp') {
        setValues((oldValues) => ({ ...oldValues, [key]: !oldValues.rsvp }));
      } else setValues((oldValues) => ({ ...oldValues, [key]: value }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="form">
        <form id="rsvp-form">
          <fieldset>
            <legend>RSVP for our wedding now!</legend>
            <label>
              First Name:
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange('firstName')}
                required
              ></input>
            </label>
            <label>
              Last Name:
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange('lastName')}
                required
              ></input>
            </label>
            <label>
              RSVP:
              <input
                type="checkbox"
                checked={values.rsvp}
                name="rsvp"
                onChange={handleChange('rsvp')}
              ></input>
            </label>
            <label>
              Address:
              <input
                type={`text`}
                placeholder="Enter your address"
                name="address"
                value={values.address}
                onChange={handleChange('address')}
                required
              ></input>
            </label>
            <label>
              City:
              <input
                type={`text`}
                placeholder="Enter your city"
                name="city"
                value={values.city}
                onChange={handleChange('city')}
                required
              ></input>
            </label>
            <label>
              State:
              <input
                type={`text`}
                placeholder="Enter your state"
                name="state"
                value={values.state}
                onChange={handleChange('state')}
                required
              ></input>
            </label>
            <label>
              Zip:
              <input
                type={`text`}
                placeholder="Enter your zip"
                name="zip"
                value={values.zip}
                onChange={handleChange('zip')}
                required
              ></input>
            </label>
            <label>
              Country:
              <input
                type={`text`}
                placeholder="Enter your country"
                name="country"
                value={values.country}
                onChange={handleChange('country')}
                required
              ></input>
            </label>
            <label>
              Phone:
              <input
                type={`text`}
                placeholder="Enter your phone"
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
              ></input>
            </label>
            <label>
              Email:
              <input
                type={`text`}
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
              ></input>
            </label>
            <div>
              
            </div>
            <label>
              Enter note:
              <textarea
                name="note"
                rows={4}
                cols={50}
                placeholder="We're looking forward to meet be with you for our special day."
                form="rsvp-form"
                value={values.note}
                onChange={handleChange('note')}
              ></textarea>
            </label>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
