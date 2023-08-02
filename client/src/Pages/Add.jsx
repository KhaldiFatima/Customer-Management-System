import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Add() {
  const [customer, setCustomer] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: null,
    status: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/customers', customer);
      navigate('/');
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };
  console.log(customer);

  return (
    <div className='form'>
      <h1>Add New Customer</h1>
      <div className='add-container'>
        <div>
          <label htmlFor='first_name'>First Name : </label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='First Name'
            name='first_name'
          />
        </div>
        <div>
          <label htmlFor='last_name'>Last Name : </label>
          <input
            onChange={handleChange}
            type='text'
            placeholder='Last Name'
            name='last_name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email : </label>
          <input
            onChange={handleChange}
            type='email'
            placeholder='Email'
            name='email'
          />
        </div>
        <div>
          <label htmlFor='mobile'>Mobile : </label>
          <input
            onChange={handleChange}
            type='number'
            placeholder='Mobile'
            name='mobile'
            max='2139999999'
          />
        </div>

        <p>Status:</p>
        <div>
          <div>
            <input
              onChange={handleChange}
              type='radio'
              name='status'
              value='Active'
              id='active'
            />
            <label htmlFor='active'>Active</label>
          </div>
        </div>
        <div>
          <div>
            <input
              onChange={handleChange}
              type='radio'
              name='status'
              value='Inactive'
              id='inactive'
            />
            <label htmlFor='inactive'>Inactive</label>
          </div>
        </div>
        <p>Gender :</p>
        <div>
          <div>
            <input
              onChange={handleChange}
              type='radio'
              name='gender'
              value='Female'
              id='female'
            />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <div>
          <div>
            <input
              onChange={handleChange}
              type='radio'
              name='gender'
              value='Male'
              id='male'
            />
            <label htmlFor='male'>Male</label>
          </div>
        </div>
      </div>
      <div className='btn'>
        <button onClick={handleClick} className='add'>
          Add Customer
        </button>
        <button className='back'>
          <Link to='/'>Back Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Add;
