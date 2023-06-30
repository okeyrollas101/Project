import React, { useState } from "react";
import axios from "axios";



const StudentDetails = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [year, setYear] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [showAlert, setShowAlert] = useState(false);

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
        showAlert &&  setTimeout(() => alert('Student saved'), 2000)
    };

    return (
        <div className="details">
            <img className="login__logo" src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1336.jpg?w=740" alt="" />

            <div className="details__container">
                <h1>Student Details</h1>

                <form onSubmit={handleSubmit}>
                   <label>Full Name:</label>
                   <input type="text" name="name" value={name} placeholder="Surname  Name" onChange={(e) => setName(e.target.value)} />

                   <label>Date Of Birth:</label>
                   <input type="text" name="dob" value={dob} placeholder="YYYY-MM-DD" onChange={(e) => setDob(e.target.value)} />

                   <label>Gender:</label>
                   <input type="text" name="gender" value={gender} placeholder="M/F" onChange={(e) => setGender(e.target.value)} />

                   <label>Year:</label>
                   <input type="number" name="year" value={year} placeholder="1-5" min="1" max="5" onChange={(e) => setYear(e.target.value)} />

                   <label>Email:</label>
                   <input type="email" name="email" value={email} placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />

                   <label>Phone:</label>
                   <input type="text" name="phone" value={phone} placeholder="+234 xxx xxx xxxx" onChange={(e) => setPhone(e.target.value)} />

                   <label>Department:</label>
                   <input type="text" name="department" value={department} placeholder="eg.Zoology" onChange={(e) => setDepartment(e.target.value)} />

                   <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}
 
export default StudentDetails;