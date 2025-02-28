"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useLoginMutation } from "@/redux/queries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../spinner/Spinner";
import { useState } from "react";
import Cookies from "universal-cookie";
import { setToken } from "@/utils/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [backendError, setBackendError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mutate] = useLoginMutation();
  const router = useRouter();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setBackendError("");
      console.log("Form Submitted", values);

      try {
        const response = await mutate(values).unwrap();
        toast.success("Login successfully");
        setToken(response.token.access.token);
        router.push("/dashboard/db-dashboard");
      } catch (error) {
        setBackendError(error.message);
      }
    },
  });

  return (
    <form className="row y-gap-20" onSubmit={formik.handleSubmit}>
      {backendError && (
        <div className="col-12">
          <div className="alert alert-danger">{backendError}</div>
        </div>
      )}

      <div className="col-12">
        <h1 className="text-22 fw-500">Log in to your account</h1>
        <p className="mt-10">
          Don't have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

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
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-1 mt-5">{formik.errors.email}</div>
        )}
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

      <Link href="/forget-password" className="text-blue-1">
        Forgot Password ?
      </Link>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <Spinner />
          ) : (
            <>
              Log In <div className="icon-arrow-top-right ml-15" />
            </>
          )}
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
