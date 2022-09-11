import React, { useState, FC, ChangeEvent, MouseEvent } from "react";
import { Email_validation, User_Name_validation, Mobile_validation } from "./Validation";

// interface User {
// name: string;
// email: string;
// address:string;
// mobile: number;
// }

export const RegForm: FC = () => {
  const [isName, setName] = useState<string>('');
  const [isEmail, setEmail] = useState<string>('');
  const [isAddress, setAddress] = useState<string>('');
  const [isMobile, setMobile] = useState<number | undefined>(undefined);

  //Validation
  const [isError, setError] = useState<boolean>(false);
  const [isvalidName, setValidName] = useState<boolean>(false);
  const [isValidMobile, setValidMobile] = useState<boolean>(false)
  const [isValidEmail, setValidEmail] = useState<boolean>(false);


  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    Email_validation(e.target.value) ? setValidEmail(true) : setValidEmail(false)
  }

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    User_Name_validation(e.target.value) ? setValidName(true) : setValidName(false)
  }

  const handleMobile = (e: ChangeEvent<HTMLInputElement>) => {
    setMobile(parseInt(e.target.value))
    Mobile_validation((parseInt(e.target.value))) ? setValidMobile(true) : setValidMobile(false)
  }


  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isName === '' || isEmail === '' || isAddress === '' || isMobile === 0 || isMobile === undefined) {
      setError(true)
    }
    else {
      alert("You are successfully registered your details")
      setError(false);
      setName('');
      setEmail('');
      setMobile(0);
      setAddress('')
    }
  }

  return (
    <div className="grid h-screen bg-gray-100">
      <div className="place-self-center  w-1/4">
        <div className="text-lg font-bold text-center mb-2 text-gray-600">SIGN UP FORM</div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="label_font" >
              Username
            </label>
            <input className="inputText" id="username" value={isName} type="text" placeholder="Full Name" onChange={(e) => handleName(e)} />
            {isName !== '' && !isvalidName ? <div className="dangerText">User Name Should be atleast 8 character</div> : null}
          </div>
          <div className="mb-4">
            <label className="label_font" >
              Email Id
            </label>
            <input className="inputText" id="email" value={isEmail} type="text" placeholder="Email" onChange={(e) => handleEmail(e)} />
            {isEmail !== '' && !isValidEmail ? <div className="dangerText">Enter Valid email</div> : null}
          </div>
          <div className="mb-4">
            <label className="label_font" >
              Address
            </label>
            <input className="inputText" id="address" value={isAddress} type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="label_font" >
              Mobile Number
            </label>
            <input className="inputText" id="mobile" value={isMobile} max="10" onChange={(e) => { handleMobile(e) }} type="number" placeholder="Mobile Number" />
            {isMobile !== undefined && !isValidMobile ? <div className="dangerText">Enter Valid Mobile Number</div> : null}
          </div>

          {isError ? <div className="text-xs text-red-400"> *All fields are mandatory</div> : null}
          <div className="flex w-full">
            <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Sign In
            </button>

          </div>
        </form>

      </div>



    </div>
  );
};