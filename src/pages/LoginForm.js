import React from 'react';
import { ErrorMessage, Formik, Form } from 'formik';
import TextField from '../components/TextField';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser} from '../auth/actions/users';
import {useHistory} from 'react-router-dom';

function LoginForm({loginUser}) {

    const validate = Yup.object({
        email: Yup.string()
            .email('Must be a valid e-mail')
            .required("Email is required"),
        password: Yup.string()
            .min(4,'Password must be at least 4 characters')
            .required("Password is required"),
    })

    const history = useHistory();

    return (
        <div>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                   loginUser(values, history,
                     setFieldError, setSubmitting);
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


export default connect(null,{loginUser})(LoginForm);