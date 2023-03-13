import React, { useState } from 'react';
import { MdPersonAdd, MdPersonRemove } from 'react-icons/md';
import axios from 'axios';

export default function RSVPForm({ handleSubmitOk }) {
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
    rsvp: 'coming',
    note: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: ''
  });
  const [people, setPeople] = useState([{ person: '', otherRsvp: `coming` }]);

  const handleChange = (key) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [key]: value }));
    };
  };

  // People Handler
  const handlePersonChange = (index, field, event) => {
    let data = [...people];
    data[index][field] = event.target.value;
    setPeople(data);
  };

  const addPerson = () => {
    let newfield = { person: '', otherRsvp: 'coming' };
    setPeople([...people, newfield]);
  };

  const removePerson = (index) => {
    let data = [...people];
    data.splice(index, 1);
    setPeople(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitData = { ...values, people };
    console.log(submitData);
    try {
      const result = await axios.post('https://hanaandspencer-backend.onrender.com/rsvp', submitData);
      if (result.status === 200) {
        handleSubmitOk(true);
        console.log(result);
      }
    } catch (error) {
      handleSubmitOk(false, error.response.data.errors)
    }
  };

  return (
    <>
      <div className="formContainer">
        <form id="rsvp-form">
          <fieldset>
            <legend>Personal Information</legend>
            <label className="top">
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
            <label className="top">
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
            <label className="top">
              RSVP:
              <select onChange={handleChange('rsvp')}>
                <option value={`coming`}>Coming</option>
                <option value={`unsure`}>Not Sure</option>
                <option value={`not coming`}>Not Coming</option>
              </select>
            </label>
            <label className="top">
              Phone:
              <input
                type={`text`}
                placeholder="Enter your phone"
                name="phone"
                value={values.phone}
                onChange={handleChange('phone')}
              ></input>
            </label>
            <label className="top">
              Email:
              <input
                type={`text`}
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
              ></input>
            </label>
            <label className="top">
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
            <label className="top">
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
            <label className="top">
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
            <label className="top">
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
            <label className="top">
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
          </fieldset>
          <fieldset>
            <legend>Others</legend>
            <p>
              We cannot assure the invitation for all other people due to the event venue. That's
              why we appreciate you for RSVP'ing to help us.
            </p>
            <button type="button" onClick={addPerson}>
              <MdPersonAdd /> Add Person
            </button>
            {people.map((item, index) => {
              return (
                <div className="form-dynamic" key={index}>
                  <label>
                    Name:
                    <input
                      name="people"
                      type="text"
                      placeholder="Enter people"
                      value={item.person}
                      onChange={(event) => handlePersonChange(index, 'person', event)}
                    ></input>
                  </label>
                  <label>
                    RSVP:
                    <select onChange={(event) => handlePersonChange(index, 'otherRsvp', event)}>
                      <option value={`coming`}>Coming</option>
                      <option value={`unsure`}>Not Sure</option>
                      <option value={`not coming`}>Not Coming</option>
                    </select>
                  </label>
                  <button type="button" onClick={() => removePerson(index)}>
                    <MdPersonRemove /> Remove
                  </button>
                </div>
              );
            })}
          </fieldset>
          <fieldset>
            <legend>Send us a note!</legend>
            <label className="top">
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
          </fieldset>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
