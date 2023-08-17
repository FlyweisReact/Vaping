/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { RegisterUser } from "../../Repository/User/Authentication";

const CreateAccount = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [courtesyTitle, setCourtesyTitle] = useState(null);
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [company, setCompany] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [vatUsed, setVatUsed] = useState("false");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [address, setAddress] = useState("");
  const [addressComplement, setAddressCompliment] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState("");
  const [addressCountry, setAddressCountry] = useState("");

  const [inputType, setInputType] = useState(false);

  const payload =
    vatUsed === "true"
      ? {
          firstName,
          lastName,
          email,
          password,
          dob,
          courtesyTitle,
          company,
          country,
          phone,
          vatUsed,
          vatNumber,
          registrationNo,
          address,
          addressComplement,
          city,
          pincode,
          addressCountry,
        }
      : {
          firstName,
          lastName,
          email,
          password,
          dob,
          courtesyTitle,
          company,
          country,
          phone,
          vatUsed,
          registrationNo,
          address,
          addressComplement,
          city,
          pincode,
          addressCountry,
        };

  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterUser(payload, navigate);
  };

  function InputHandler() {
    setInputType(!inputType);
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb title={"Create an account"} />
      <div className="container-width">
        <div className="block-form-login">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Registration Number"
                  required
                  onChange={(e) => setRegistrationNo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Buisness Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Buisness Address Complement"
                  required
                  onChange={(e) => setAddressCompliment(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Pincode"
                  required
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Country"
                  required
                  onChange={(e) => setAddressCountry(e.target.value)}
                />
              </div>

              <button type="submit">Register </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
