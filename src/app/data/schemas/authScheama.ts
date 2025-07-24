import * as Yup from "yup";

export const LoginSchema = () => Yup.object().shape({
    phone: Yup.string()
        .required("phone number is required")
        .matches(/^\+9639\d{8}$/,"phone number must start with +9639 and end with 8 numeric digits"),
    password: Yup.string()
        .required("password is required")
        .min(6, "password must be at least 6 charters long")
        .max(20, "password must be at max 20 charters long")
})