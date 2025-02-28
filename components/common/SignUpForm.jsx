"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRegisterMutation } from "@/redux/queries";
import { useRouter } from "next/navigation";
import Spinner from "../spinner/Spinner";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const router = useRouter();
  const [mutate] = useRegisterMutation();
  const [backendError, setBackendError] = useState(""); // State to store backend errors
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(
        8,
        "Password must be at least 8 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character"
      )
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setBackendError(""); // Clear previous errors
      delete values.confirmPassword;

      try {
        const response = await mutate(values).unwrap();
        router.push("/login");
      } catch (error) {
        setBackendError(error.message); // Set backend error message
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="row y-gap-20" onSubmit={formik.handleSubmit}>
      {/* Display Backend Error */}
      {backendError && (
        <div className="col-12">
          <div className="alert alert-danger">{backendError}</div>
        </div>
      )}

      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>

      {/* First Name */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
        <div>
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-1 mt-5">{formik.errors.firstName}</div>
          )}
        </div>
      </div>

      {/* Last Name */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
        <div>
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-1 mt-5">{formik.errors.lastName}</div>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
        <div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-1 mt-5">{formik.errors.email}</div>
          )}
        </div>
      </div>

      {/* Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="password-toggle-icon"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        <div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-1 mt-5">{formik.errors.password}</div>
          )}
        </div>
      </div>

      {/* Confirm Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="password-toggle-icon"
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        <div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-1 mt-5">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
      </div>

      {/* Checkbox */}
      <div className="col-12">
        <div className="d-flex items-center gap-2">
          <div className="form-checkbox">
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={formik.values.termsAndConditions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div>
            I agree to the{" "}
            <Link href="/terms-and-conditions" className="text-blue-1 px-1">
              Terms and Conditions
            </Link>
            and{" "}
            <Link href="/privacy-policy" className="text-blue-1 px-1">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-red-1 mt-5">
          {formik.errors.termsAndConditions}
        </div>
      </div>

      <div className="col-12">
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          {formik.isSubmitting ? (
            <Spinner />
          ) : (
            <>
              Sign Up <div className="icon-arrow-top-right ml-15" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
