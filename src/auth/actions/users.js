import { login } from "../../services/login";
import { sessionService } from "redux-react-session";

export const loginUser = (credentials, history, setSubmitting) => {
  return () => {
    login(credentials)
      .then((response) => {
        const { data } = response;
        const { statusText } = response;

        if (statusText === "OK") {
          const userData = credentials.email;
          const token = data.token;

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
        setSubmitting(false);
      })
      .catch((err) => console.error("err"));
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push("/login");
  };
};
