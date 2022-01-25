import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";

import CustomButton from "../customButton";
import { registration } from "../../http/userAPI";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const INITIAL_TOTAL_SCORE = 0;

  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const validationSchema = yup.object({
    firstName: yup.string().required("Пожалуйста, заполните данное поле"),
    secondName: yup.string().required("Пожалуйста, заполните данное поле"),
    email: yup
      .string()
      .email("Введите корректный адрес эл. почты")
      .required("Пожалуйста, заполните данное поле"),
    password: yup.string().required("Пожалуйста, заполните данное поле"),
    passwordConfirm: yup.string().required("Пожалуйста, заполните данное поле"),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values) => {
      if (values.password !== values.passwordConfirm) {
        return toast.error("Пароли не совпадают", {
          className: "toast-error",
          draggable: false,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }

      try {
        setLoading(true);
        const displayName = values.firstName + " " + values.secondName;
        try {
          await registration(
            displayName,
            values.email,
            values.password,
            INITIAL_TOTAL_SCORE
          );
        } finally {
        }
        toast.success("Вы успешно зарегистрировались", {
          className: "toast-success",
          position: toast.POSITION.BOTTOM_CENTER,
        });
        formik.resetForm();
        history.push("/signIn/login");
      } catch (e) {
        toast.error(e.response.data.message, {
          className: "toast-error",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
      setLoading(false);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="sign-up">
      <div className="title">Регистрация</div>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="secondName"
          name="secondName"
          label="Second Name"
          value={formik.values.secondName}
          onChange={formik.handleChange}
          error={formik.touched.secondName && Boolean(formik.errors.secondName)}
          helperText={formik.touched.secondName && formik.errors.secondName}
        />
        <TextField
          id="emailSignUp"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="passwordSignUp"
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirm &&
            Boolean(formik.errors.passwordConfirm)
          }
          helperText={
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
          }
          label="Confirm Password"
        />
        <div className="hint-for-login">
          Есть аккаунт?{" "}
          <NavLink className="login-link" to="/signIn/login">
            Войдите!
          </NavLink>
        </div>
        <CustomButton
          style={{ marginTop: 20 }}
          disabled={loading}
          type="submit"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
