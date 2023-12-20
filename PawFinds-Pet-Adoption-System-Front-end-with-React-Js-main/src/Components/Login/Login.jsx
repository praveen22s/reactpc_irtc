import React from "react";
import { useState, useEffect } from "react";
import './Login.css';
const Login= () => {
        
    
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        loginUsername: "",
        loginPassword: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = isLogin ? validateLogin(formValues) : validateSignup(formValues);

        setFormErrors(errors);
        setIsSubmit(true);

        setLoginSuccess(false);
        setSignupSuccess(false);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);

            if (isLogin) {
                setLoginSuccess(true);
            } else {
                setSignupSuccess(true);
            }
        }
    }, [formErrors, formValues, isSubmit, isLogin]);

    const validateSignup = (values) => {
        const errors = validateCommon(values);
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required!";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords don't match!";
        }
        return errors;
    };

    const validateLogin = (values) => {
        const errors = validateCommon(values);
        return errors;
    };

    const validateCommon = (values) => {
        const errors = {};
        if (!values.username && !values.email) {
            errors.username = "Username or Email is required!";
        }

        if (!values.password) {
            errors.password = "Password is required!";
        } else {
            errors.password = "";
        }

        return errors;
    };

    return (
        <>
                  
        <div className="bgImg"></div>
            <div className="container">
                {loginSuccess && (
                    <div className="ui message success">Logged in successfully</div>
                )}
                {signupSuccess && (
                    <div className="ui message success">Signed up successfully</div>
                )}

                <form onSubmit={handleSubmit}>
                    <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        {isLogin ? (
                            <>
                                <div className="field">
                                    <label>Username or Email</label>
                                    <input
                                        type="text"
                                        name="loginUsername"
                                        placeholder="Enter your username or email"
                                        value={formValues.loginUsername}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="field">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Choose a username"
                                        value={formValues.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.username}</p>
                                <div className="field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.email}</p>
                                <div className="field">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={formValues.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.confirmPassword}</p>
                            </>
                        )}

                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name={isLogin ? "loginPassword" : "password"}
                                placeholder="Password"
                                value={isLogin ? formValues.loginPassword : formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>

                        <button className="fluid ui button blue" type="submit">
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </div>
                </form>
                <div className="text">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <span onClick={() => setIsLogin(false)}>Sign Up</span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span onClick={() => setIsLogin(true)}>Login</span>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
export default Login;