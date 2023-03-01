import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import img from "../../image/register.jpg";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/bottons/customButton";


const Register = () => {
    const usersSchema = Yup.object().shape({
      name: Yup.string()
        .min(1, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
  
      address: Yup.string()
        .min(5, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
  
      email: Yup.string().email("Invalid email").required("Required"),
  
      phone: Yup.number().required("Required"),
  
      username: Yup.string()
        .min(5, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
  
      password: Yup.string()
        .min(5,"Password is too short - should be 5 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .required("Required"),
  
      confirmPassword: Yup.string()
        .min(5,"Password is too short - should be 5 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
  
      // role: Yup.string().required("Required"),
    });
    // const navigate = useNavigate();
    return (
      <>
        <div className="register">
        <div className="register-area">
            <div className="left-side">
              <h3>Create an account</h3>
              <Formik
                initialValues={{
                  name: "",
                  address: "",
                  email: "",
                  phone: "",
                  password: "",
                  confirmPassword: "",
                  
                }}
                validationSchema={usersSchema}
                onSubmit={async(values, { resetForm }) => {
                  const {confirmPassword, ...updatedValues} = values
                  const requestOption ={
                    method: "POST",
                    headers : { "Content-Type": "application/json"},
                    body : JSON.stringify(updatedValues),
                  };
                  try {
                    const response = await fetch("http://localhost:3001/register", requestOption)
                    const data = await response.json()
                } catch (err) {
                    alert(err);
                  }
                  
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div>
                      <Field name="name" placeholder="Name" />
                      {errors.name && touched.name ? (
                        <div className="validaton-message">{errors.name}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field name="address" placeholder="Address" />
                      {errors.address && touched.address ? (
                        <div className="validaton-message">{errors.address}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field name="email" placeholder="Email.." />
                      {errors.email && touched.email ? (
                        <div className="validaton-message">{errors.email}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field name="phone" placeholder="Phone.." />
                      {errors.phone && touched.phone ? (
                        <div className="validaton-message">{errors.phone}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field name="username" placeholder="Username " />
                      {errors.username && touched.username ? (
                        <div className="validaton-message">{errors.username}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                      {errors.password && touched.password ? (
                        <div className="validaton-message">{errors.password}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        name="confirmPassword"
                        placeholder="ConfirmPassword"
                        type="password"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className="validaton-message">
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                    </div>
                    {/* <button className="btn" type="submit">
                                          Submit
                                      </button> */}
                    <CustomButton name="Register" type="submit" /> 
                    {/* <button type="submit">Register</button> */}
                  </Form>
                )}
              </Formik>
            </div>
            <div className="right-side">
              <div className="img-box">
                <img src={img} alt="Logo" width={300}/>
                <div className="">
                  <span><Link to="/">Already have an account? Login.</Link></span>
                </div>
              </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  export default Register;