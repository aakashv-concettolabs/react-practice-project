import * as Yup from "yup";

export const singUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).max(12).required("Enter password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"),null],"password must be same")
})