import React from "react";
import NavBar from "../components/NavBar";
import { createPost } from "../services/posts";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";
import * as Yup from "yup";

const NewPost = () => {
  const validate = Yup.object({
    title: Yup.string().required("Title is required"),
    body: Yup.string().required("Body is required"),
  });

  return (
    <div>
      <NavBar />
      <div className="container py-5">
        <div className="text-center">
          <h1 className="display-7">Create new post</h1>
        </div>
        <div className="col-lg-7 mx-auto">
          <div className="card shadow mb-4">
            <div className="card-body p-5">
              <Formik
                initialValues={{
                  title: "",
                  body: "",
                }}
                onSubmit={(values) => {
                  createPost(values);
                }}
                validationSchema={validate}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <TextField
                        className="form-control"
                        label="Title"
                        name="title"
                        type="text"
                      />
                      {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <TextField
                        textarea
                        rows="5"
                        className="form-control"
                        label="Body"
                        name="body"
                      />
                      {errors.body && touched.body ? (
                        <div>{errors.body}</div>
                      ) : null}
                    </div>

                    <button className="btn btn-primary m-2" type="submit">
                      Post
                    </button>
                    <button className="btn btn-default" type="reset">
                      Reset
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
