import React, { useState } from "react";
import myImage from "../../assets/brcm_logo_big.png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    semester: "",
    batch: "",
    dob: "",
    father: "",
    registrationNo: "",
    rollNo: "",
    userMail: "",
    userPass: "",
    phoneNo: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = () => {
    console.log("Form Data:", formData);
    // Handle form submission logic here
    // Add your API calls or other logic for form submission
  };

  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="max-w-screen-md mx-auto bg-white p-2 rounded shadow">
        <div id="main" className="relative">
          <div id="upperSection" className="flex flex-row justify-between mb-3">
            <div className="relative w-2/5">
              <img
                id="imgStudent"
                className="w-150 h-150 mx-auto"
                src={myImage}
                alt="Student"
              />
              <button
                id="imgUploadBtn"
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
              >
                Upload Photo
              </button>
            </div>

            <div className="relative w-3/5 bg-white elevation-1 p-5 mr-5">
              <input
                id="txtName"
                className="w-full h-60 px-10 border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <select
                id="txtBranch"
                className="w-full h-60 px-5 border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500"
                value={formData.branch}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Branch
                </option>
              </select>

              <select
                id="txtSemester"
                className="w-full h-60 px-5 border-b-2 border-gray-300 mb-4 focus:outline-none focus:border-blue-500"
                value={formData.semester}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select Semester
                </option>
              </select>
            </div>
          </div>

          <div id="middleSection" className="bg-white elevation-1 p-2 mb-2">
            <div id="Batch" className="flex items-center mb-4">
              <img
                id="imgcalender"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Calendar"
              />
              <input
                id="txtbatch"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Batch or Year"
                value={formData.batch}
                onChange={handleInputChange}
              />
            </div>

            <div id="DOB" className="flex items-center mb-4">
              <img
                id="imgDOB"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="DOB"
              />
              <input
                id="txtDOB"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Your DOB (Y-M-D)"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>

            <div id="Father" className="flex items-center mb-4">
              <img
                id="imgFather"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Father"
              />
              <input
                id="txtFather"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Your Father Name"
                value={formData.father}
                onChange={handleInputChange}
              />
            </div>

            <div id="Registration" className="flex items-center mb-4">
              <img
                id="imgPerson"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Registration"
              />
              <input
                id="txtRegistrationNo"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Registration no."
                value={formData.registrationNo}
                onChange={handleInputChange}
              />
            </div>

            <div id="RollNo" className="flex items-center mb-4">
              <img
                id="imgRoll"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Roll No"
              />
              <input
                id="txtRollNo"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Roll No"
                value={formData.rollNo}
                onChange={handleInputChange}
              />
            </div>

            <div id="Mail" className="flex items-center mb-4">
              <img
                id="imgmail"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Mail"
              />
              <input
                id="txtUserMail"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="user@gmail.com"
                value={formData.userMail}
                onChange={handleInputChange}
              />
            </div>

            <div id="Pass" className="flex items-center mb-4">
              <img
                id="passMail"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Password"
              />
              <input
                id="txtUserPass"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Your Strong Password"
                value={formData.userPass}
                onChange={handleInputChange}
              />
            </div>

            <div id="Mobile" className="flex items-center mb-4">
              <img
                id="imgphone"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Mobile"
              />
              {/* <CountryCodePicker
                                    id="countryCode"
                                    className="w-120"
                                // Add necessary props for CountryCodePicker component
                                /> */}
              <input
                id="txtPhoneNo"
                className="w-full h-60 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Phone Number"
                value={formData.phoneNo}
                onChange={handleInputChange}
              />
            </div>

            <div id="bottomSection" className="flex items-center mb-4">
              <img
                id="imghome"
                className="w-10 h-10 mr-2"
                src={myImage}
                alt="Home"
              />
              <textarea
                id="txtAddress"
                className="w-full h-150 px-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            id="btnUpdateDetails"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
