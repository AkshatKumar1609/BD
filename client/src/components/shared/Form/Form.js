import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>{
        if(formType === "login") return handleLogin(e,email,password,role);
        else if(formType === "register") return handleRegister(e,name,role,email,password,organizationName,hospitalName,website,address,phone);
      }}>
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        <div className="d-flex mb-3">
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={'donar'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="donarRadio">Donar</label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={'admin'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="adminRadio">Admin</label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={'hospital'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="hospitalRadio">Hospital</label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value={'organization'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="organizationRadio">Organization</label>
          </div>
        </div>

        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "donar" || role === "admin") && (
                    <InputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  )}
                  {role === 'organization' && (
                    <InputType
                    labelText={"Organization Name"}
                    labelFor={"forOrganizationName"}
                    inputType={"text"}
                    name={"organizationName"}
                    value={organizationName}
                    onChange={(e) => {
                      setOrganizationName(e.target.value);
                    }}
                  />
                  )}
                  {role === 'hospital' && (
                    <InputType
                    labelText={"Hospital Name"}
                    labelFor={"forHospitalName"}
                    inputType={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => {
                      setHospitalName(e.target.value);
                    }}
                  />
                  )}
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </>
              );
            }
            default: {
              return null;
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login"?(
            <p>
              Not registerd yet ? Register
              <Link to="/register"> Here ! </Link>
            </p>
          ):(
            <p>
              Already registerd ? Login
              <Link to="/login"> Login ! </Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
