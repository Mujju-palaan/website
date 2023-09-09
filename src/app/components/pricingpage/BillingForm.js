import React from "react";
import styles from "./PricingForm.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import countrydata from "./Country_state_data.json";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const BillingForm = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    building: "",
    city: "",
    pincode: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // *************Country code ***************************
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);
  };
  // const handleSubmit=(e)=>{
  // e.preventDefault();
  // alert("Get Country id"+countryid+ " And "+ stateid);
  // }
  // *************Country code ***************************

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <div className={styles.contact_form}>
          <div style={{paddingBottom:'1.5rem'}}>
            <label htmlFor="username" className={styles.label} style={{fontSize:'1rem'}}>
              Country/Region
              <select
                name="country"
                // className={mulish.className}
                className={styles.option}
                onChange={(e) => handlecounty(e)}
              >
                <option value="" className={mulish.className}>
                  --Select Country--
                </option>
                {countrydata.map((getcountry, index) => (
                  <option value={getcountry.country_id} key={index}>
                    {getcountry.country_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <div className={styles.input_field}>
              <label htmlFor="firstname" className={styles.label}>
                {/* Enter your name */}
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className={mulish.className}
                  value={user.firstname}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label htmlFor="lastname" className={styles.label}>
                {/* Enter your name */}
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className={mulish.className}
                  value={user.lastname}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.input_field}>
            <label htmlFor="address" className={styles.label}>
              {/* Enter your name */}
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className={mulish.className}
                value={user.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.input_field}>
            <label htmlFor="building" className={styles.label}>
              {/* Enter your name */}
              <input
                type="text"
                name="building"
                id="building"
                placeholder="Apt, floor, building. etc."
                className={mulish.className}
                value={user.building}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div style={{ display: "flex", gap: "2rem" }}>
            <div className={styles.input_field}>
              <label htmlFor="city" className={styles.label}>
                {/* Enter your name */}
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City/Town"
                  className={mulish.className}
                  value={user.city}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className={styles.input_field}>
              <label htmlFor="pincode" className={styles.label}>
                {/* Enter your name */}
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pin code"
                  className={mulish.className}
                  value={user.pincode}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          <div className="text-dark">
            <select
              name="states"
            //   className="form-control"
              className={styles.option}
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
              className={styles.option}
              value={user.states}
              onChange={handleChange}
              required
              >--Select State--
              </option>
              {state.map((getstate, index) => (
                <option value={getstate.state_id} key={index}>
                  {getstate.state_name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-dark">
            <select
              name="states"
            //   className="form-control"
              className={styles.option}
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
              className={styles.option}
              value={user.states}
              onChange={handleChange}
              required
              >--Select plan--
              </option>             
                <option value='Basic Plan'>Basic Plan <p style={{color:'gray'}}></p></option>
                <option value='Basic Plan'>Family Plan</option>
                <option value='Basic Plan'>Corporate Plan</option>
            </select>
          </div>
        </div>
        
        <div style={{ display: "flex", gap: "2rem" , paddingTop:'1.5rem'}}>
        <div className="text-dark">
            <select
              name="states"
            //   className="form-control"
              className={styles.option}
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
              className={styles.option}
              value={user.states}
              onChange={handleChange}
              required
              >Select Kit (Apple/Samsung)
              </option>             
                <option value='Basic Plan'>Apple Kit</option>
                <option value='Basic Plan'>Samsung Kit</option>
            </select>
          </div>
        </div>


        </div>
      </form>
    </div>
  );
};

export default BillingForm;
