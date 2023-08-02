import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:8800/customers');
        setCustomers(res.data);
      } catch (error) {
        console.log(`Error : ${error.message}`);
      }
    };
    getData();
  }, []);

  const handelDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/customers/' + id);
      window.location.reload();
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  return (
    <>
      <div className='container'>
        <h1>Customers Management System</h1>
        <div className='search'>
          <h3>Customers </h3>
          <div className='add-search'>
            <div>
              <input type='search' placeholder='Search' name='search' />
              <button type='submit'>
                Search <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>
            <button>
              <Link to='/add'>Add New Customer</Link>
            </button>
          </div>
        </div>
        <div className='customers-container'></div>
        <div className='row'>
          <div>
            <table className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.first_name}</td>
                      <td>{customer.last_name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile}</td>
                      <td>{customer.status}</td>
                      <td>{customer.gender}</td>
                      <td>
                        <div className='btn'>
                          <button className='edit'>
                            <Link to={`/update/${customer.id}`}>Edit</Link>
                          </button>
                          <button
                            className='delete'
                            onClick={() => handelDelete(customer.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
