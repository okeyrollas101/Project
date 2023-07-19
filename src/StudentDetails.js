import React, { useState } from "react";
import "./StudentDetails.css";
import axios from "axios";
import student from './assets/education.avif';
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';




const StudentDetails = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const [{user}] = useStateValue();

    const handlePhoneNumberChange = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setPhone(formattedPhoneNumber);
      };

      const formatPhoneNumber = (value) => {
        // Remove all non-digit characters from the input using reg expression
        const cleanedValue = value.replace(/\D/g, '');
    
        // Apply your desired format
        const match = cleanedValue.match(/^(\d{3})(\d{3})(\d{5})$/);
        if (match) {
          return `(${match[1]}) ${match[2]} ${match[3]}`;
        }
    
        return cleanedValue;
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const studentData = {
           name,
           dob,
           gender,
           year,
           email,
           phone,
           department
        };

        try {
           const response = await axios.post('http://localhost:3001/studentDetails', studentData);
           console.log(response.data) // Assuming the json server returns the saved student object
           // Reset the form fields
           setName('');
           setDob('');
           setGender('');
           setYear('');
           setEmail('');
           setPhone('');
           setDepartment('');
           setShowAlert(true);
        } catch (error) {
            console.error('Error saving student', error);
        }
        showAlert &&  setTimeout(() => alert('Student info saved'), 2000)
    };

    const handleAuthen = () => {
        if (user) {
            auth.signOut()
                          .then(() => {
                              console.log('user successfully signed out');
                              navigate('/');
                          })
                          .catch((error) => {
                             console.error('Error signing out', error);
                          });
        }
    };

    return (
        <div className="details">
            <div className="details__button">
                <button onClick={handleAuthen}>Sign out</button>
            </div>

            <img className="login__logo" src={student} alt="" />

            <div className="details__entry">
                <strong>Hello, {user?.email}</strong>
            </div>

            <div className="details__container">
                <h1>Student Details</h1>

                <form onSubmit={handleSubmit}>
                   <label>Full Name:</label>
                   <input type="text" name="name" value={name} placeholder="Surname  Name" onChange={(e) => setName(e.target.value)} /><br />

                   <label>Date Of Birth:</label>
                   <InputMask mask="9999-99-99" type="text" name="dob" value={dob} placeholder="YYYY-MM-DD" onChange={(e) => setDob(e.target.value)} /><br />

                   <label>Gender:</label>
                   <input type="text" name="gender" value={gender} placeholder="M/F" onChange={(e) => setGender(e.target.value)} /><br />

                   <label>Year:</label>
                   <input type="number" name="year" value={year} placeholder="1-7" min="1" max="5" onChange={(e) => setYear(e.target.value)} /><br />

                   <label>Email:</label>
                   <input type="email" name="email" value={email} placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} /><br />

                   <label>Phone:</label>
                   <input type="text" name="phone" value={phone} placeholder="(xxx) xxx xxxxx" onChange={handlePhoneNumberChange} /><br />

                   <label>Department:</label>
                   <input type="text" name="department" value={department} placeholder="eg.Zoology" onChange={(e) => setDepartment(e.target.value)} /><br />

                   <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}
 
export default StudentDetails;