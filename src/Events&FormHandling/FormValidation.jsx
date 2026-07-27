import React, { useState } from "react";

const FormValidation = () => {
    // Form data state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""
    });

    // Error message state (initialized as an object)
    const [errormsg, setErrorMsg] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Regex patterns
    const nameRegex = /^[a-zA-Z ]{3,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%!?*&])[A-Za-z\d@$%!?*&]{8,}$/;

    // Validation logic
    const validate = () => {
        let newError = {};

        // Name
        if (!formData.name.trim()) {
            newError.name = "Name is Required";
        } else if (!nameRegex.test(formData.name)) {
            newError.name = "Name should contain 3-30 letters/spaces only";
        }

        // Email
        if (!formData.email.trim()) {
            newError.email = "Email is Required";
        } else if (!emailRegex.test(formData.email)) {
            newError.email = "Please enter a valid email address";
        }

        // Phone
        if (!formData.phone.trim()) {
            newError.phone = "Mobile Number is Required";
        } else if (!phoneRegex.test(formData.phone)) {
            newError.phone = "Phone number must be a valid 10-digit number starting with 6-9";
        }

        // Password
        if (!formData.password.trim()) {
            newError.password = "Password is Required";
        } else if (!passwordRegex.test(formData.password)) {
            newError.password = "Must contain 1 uppercase, 1 lowercase, 1 special character, and be at least 8 characters long";
        }

        // Confirm Password
        if (!formData.confirmpassword.trim()) {
            newError.confirmpassword = "Confirm Password is Required";
        } else if (formData.password !== formData.confirmpassword) {
            newError.confirmpassword = "Passwords do not match";
        }

        setErrorMsg(newError);

        // Return true if no errors exist
        return Object.keys(newError).length === 0;
    };

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Registration Successful!");

            // Reset Form
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmpassword: ""
            });

            setErrorMsg({});
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <p style={{ color: "red" }}>{errormsg.name}</p>
                </div>

                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <p style={{ color: "red" }}>{errormsg.email}</p>
                </div>

                <div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <p style={{ color: "red" }}>{errormsg.phone}</p>
                </div>

                <div>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    <p style={{ color: "red" }}>{errormsg.password}</p>
                </div>

                <div>
                    <input type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder="Confirm Password" />
                    <p style={{ color: "red" }}>{errormsg.confirmpassword}</p>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;