import React, { useState } from 'react';
import { ErrorMessage, Formik, Form } from 'formik';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import { login } from '../services/login';

function LoginForm(props) {
    const [errorMsg, setErrorMsg] = useState(null)

    const validate = Yup.object({
        email: Yup.string()
            .email('Must be a valid e-mail')
            .required("Email is required"),
        password: Yup.string()
            .min(8,'Password must be at least 8 characters')
            .required("Password is required"),
    })

      const handleLogin = async (event) => {
        try{
            const user = await login(
                props)
            
        }catch(e){
            setErrorMsg('Wrong credentials')
            setTimeout(()=>{
                setErrorMsg(null)
            }, 5000)
        }
    }  
    
    return (
        <div >
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }
                onSubmit={ (values) => {
                   login(values)
                }}
                validationSchema={validate}
                >
                {
                  ({ errors, touched, formik }) => (
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <Form>
                                    <h1 className="my-4 font-weight-bold-display-4">Login</h1>
                                    <TextField className="fadeIn second" id="wa" label="E-mail" name="email" type="text" />
                                    {errors.Email && touched.email ? (<div>{errors.email}</div>) : null}
                                    <ErrorMessage name="email" />

                                    <TextField className="fadeIn third" id="wa" label="Password" name="password" type="password" />
                                    {errors.Password && touched.password ? (<div>{errors.password}</div>) : null}
                                    <div>
                                        <ErrorMessage name="password" />
                                    </div>

                                    <button className="fadeIn fourth btn btn-dark m-2" type="submit">Login</button>
                                    <button className="btn btn-danger" type="reset">Reset</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                    )
                }
            </Formik>
        </div>
    )
}


export default LoginForm;