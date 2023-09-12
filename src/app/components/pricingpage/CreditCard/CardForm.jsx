import './styles/CardForm.css'
// import './styles/dropdown.css'
import { Mulish } from "next/font/google";
import { useState } from "react";
import countrydata from '../Country_state_data.json'

export default function CardForm ({ setFormData, formData, animateSlider }) {
	const handleInput = (e) => {
		const { name, value } = e.target
    if (name === 'name') e.target.value = value.toString().replace(/[^a-z]/g, '').substring(0, 28)
		// if (name === 'number') e.target.value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
    if (name === 'number') e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 16)
		if (name === 'mm' || name === 'yy') e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2)
		if (name === 'mm' && value > 12) e.target.value = '12'
		if (name === 'cvc') e.target.value = e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 3)

		setFormData({ ...formData, [name]: e.target.value })
	}

	const handleError = (target, message = 'Error', type = 'add') => {
		if (type === 'add') {
			const submitBtn = document.querySelector('.btn-submit')
			submitBtn.classList.add('shake')
			submitBtn.addEventListener('animationend', () => submitBtn.classList.remove('shake'))
		}

		document.querySelector(`.label${target}`).nextElementSibling.innerHTML = message
		document.querySelector(`.label${target}`).nextElementSibling.classList[type === 'add' ? 'remove' : 'add']('info--hidden')
		document.querySelector(`[name="${target}"]`).classList[type]('input--error')
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		for (const i in formData) {
			if (!formData[i]) {
				handleError(i, 'Can`t be blank')
			} else handleError(i, '', 'remove')
		}

		if (formData.number) {
			if (formData.number.length < 16) {
				handleError('number', 'Number is too short')
			} else if (formData.number.match(/[^0-9\s]/g)) {
				handleError('number', 'Wrong format, numbers only')
			} else handleError('number', '', 'remove')
		}

		if (formData.cvc) {
			if (formData.cvc.length < 3) {
				handleError('cvc', 'CVC is too short')
			} else handleError('cvc', '', 'remove')
		}

		if (!formData.mm) handleError('mm', 'Can`t be blank')
		if (!formData.yy) handleError('yy', 'Can`t be blank')

		if (document.querySelectorAll('.input--error').length === 0) animateSlider(true)
	}
// ***************************************
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

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { Content_Type: "application/json" },
//       body: JSON.stringify({
//         username: user.username,
//         email: user.email,
//         phone: user.phone,
//         message: user.message,
//       }),
//     });
//     // Set the status based on the response from the API route
//     if (response.status === 200) {
//       setUser({
//         username: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//       setStatus("success");
//     } else {
//       setStatus("error");
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

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

	return (
		<form className='cardForm' onSubmit={handleSubmit}>
      <label htmlFor="username" style={{fontSize:'2rem'}}>
              Country/Region
              <select
                style={{height:'4rem',padding:'1rem'}}
                name="country"
                onChange={(e) => handlecounty(e)}
                
              >
                <option value="" style={{height:'4rem',padding:'1rem'}}>
                  --Select Country--
                </option >
                {countrydata.map((getcountry, index) => (
                  <option value={getcountry.country_id} key={index} style={{height:'4rem',padding:'1rem'}}>
                    {getcountry.country_name}
                  </option>
                ))}
              </select>
            </label>
      <div className='cvc-mmyy' style={{gap:'2rem'}}> 
				<input type='text' placeholder='First Name' onChange={handleInput} name='firstname' className='card-input' />
			  <p className='info info--hidden' aria-live='polite'></p>

        <input type='text' placeholder='Last Name' onChange={handleInput} name='lastname' className='card-input' />
			  <p className='info info--hidden' aria-live='polite'></p>
      </div>

      <label className='labelname'>
				{/* Cardholder Name */}
				<input type='text' placeholder='Address' onChange={handleInput} name='Address' className='card-input' />
			</label>
			<p className='info info--hidden' aria-live='polite'></p>

      <label className='labelname'>
				{/* Cardholder Name */}
				<input type='text' placeholder='Apt, Floor, Building. etc.' onChange={handleInput} name='Building' className='card-input' />
			</label>
			<p className='info info--hidden' aria-live='polite'></p>

      <div className='cvc-mmyy' style={{gap:'1rem'}}> 
				<input type='text' placeholder='City' onChange={handleInput} name='City' className='card-input' />
			  <p className='info info--hidden' aria-live='polite'></p>

        <input type='text' placeholder='Pincode' onChange={handleInput} name='Pincode' className='card-input' />
			  <p className='info info--hidden' aria-live='polite'></p>
      </div>
      <input type='text' placeholder='Phone No.' onChange={handleInput} name='number' className='card-input' />
			  <p className='info info--hidden' aria-live='polite'></p>
      
      <div style={{paddingBottom:'2rem'}}></div>
      <div style={{ display: "flex", gap: "2rem" }}>
          <div className="text-dark">
            <select
              name="states"
            //   className="form-control"
              // className={styles.option}
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
              // className={styles.option}
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
          
          {/* <div>
          <div class="select-group">

            <label for="button">Where did you find us?</label>
            <button id="button" class="button">
              <span id="select-label">- please select one -</span>
              <div id="arrow" class="arrow"></div>
            </button>

            <div class="dropdown hidden" id="dropdown">
              <input type="radio" id="select-internet" name="where" value="internet" class="option"></input>
              <label for="select-internet" class="select-item">Internet search</label>

              <input type="radio" id="select-family" name="where" value="family" class="option"></input>
              <label for="select-family" class="select-item">Friends & family</label>

              <input type="radio" id="select-existing" name="where" value="existing" class="option"></input>
              <label for="select-existing" class="select-item">Existing customer</label>
            </div>

            </div>
          </div> */}
          <div className="text-dark">
            <select
              name="states"
            //   className="form-control"
              // className={styles.option}
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
              // className={styles.option}
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
        
        <div style={{ display: "flex", gap: "2rem" , paddingTop:'1.5rem',paddingBottom:'1.5rem'}}>
        <div>
            <select
              name="states"
            //   className="form-control"
              onChange={(e) => handlestate(e)}
            >
              <option 
              type="option"
              name="states"
              id="states"
              placeholder="states"
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


{/* ******************** */}
			<label className='labelname'>
				{/* Cardholder Name */}
				<input type='text' placeholder='Cardholder Name' onChange={handleInput} name='name' className='card-input' />
			</label>
			<p className='info info--hidden' aria-live='polite'></p>

			<label className='labelnumber'>
				{/* Card Number */}
				<input type='text' placeholder='Card Number' onChange={handleInput} name='number' className='card-input' minLength={19} />
			</label>
			<p className='info info--hidden' aria-live='polite'></p>

			<div className='cvc-mmyy'>
				<label className='labelmm labelyy'>
					{/* Exp. Date (MM/YY) */}
					<div>
						<input type='text' placeholder='MM' onChange={handleInput} name='mm' className='card-input' />
						<input type='text' placeholder='YY' onChange={handleInput} name='yy' className='card-input' />
					</div>
				</label>
				<p className='info info--hidden' aria-live='polite'></p>

				<label className='labelcvc'>
					{/* CVC */}
					<input type='text' placeholder='CVV' onChange={handleInput} name='cvc' className='card-input' />
				</label>
				<p className='info info--hidden' aria-live='polite'></p>
			</div>

			<button  type='submit' className='btn-submit btn-primary'>Confirm</button>
		</form>
	)
}