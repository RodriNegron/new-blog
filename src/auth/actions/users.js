import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  // Make checks and get some data

  return () => {

  axios
    .post(
        /* https://jsonplaceholder.typicode.com/posts */
      "https://whispering-headland-00232.herokuapp.com/user/signin", //api deployed en heroku - modificar y utulizar login service
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // check for specific error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.status === "SUCCESS") {   //editar api status (usando api deployed en heroku)
        const userData = data.data[0];

        const token = userData._id;

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                history.push("/");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }

      //complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));
}
};

export const logoutUser = (history) => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
        history.push('/login');
    }
};
