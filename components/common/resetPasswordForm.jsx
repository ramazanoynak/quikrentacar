"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useResetPasswordMutation } from "@/redux/queries";
import toast from "react-hot-toast";
import Spinner from "../spinner/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ResetPasswordForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [redirectTimer, setRedirectTimer] = useState(0);
  const [mutate] = useResetPasswordMutation();

  useEffect(() => {
    if (redirectTimer > 0) {
      const timer = setInterval(() => {
        setRedirectTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [redirectTimer]);

  // Validation schema using Yup
  const validationSchema = Yup.object({
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
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Reset Password Request", values);

      try {
        await mutate({
          password: values.password,
          token: params.get("token"),
        }).unwrap();
        setRedirectTimer(5)
        setTimeout(() => {
          router.push("/login");
        }, 5000);

      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <form className="row y-gap-20" onSubmit={formik.handleSubmit}>
      {redirectTimer > 0 && (
        <div className="col-12 mt-20">
          <div className="alert alert-success text-center">
            Your password has been reset successfully. Redirecting to login in{" "}
            {redirectTimer} seconds...
          </div>
        </div>
      )}
      <div className="col-12">
        <h1 className="text-22 fw-500">Reset your password</h1>
        <p className="mt-10">
          Go back to{" "}
          <a href="/login" className="text-blue-1">
            login
          </a>
        </p>
      </div>
      {/* End .col */}

      {/* New Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">New Password</label>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-1 mt-5">{formik.errors.password}</div>
        )}
      </div>

      {/* Confirm Password */}
      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-1 mt-5">{formik.errors.confirmPassword}</div>
        )}
      </div>

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
              Reset Password <div className="icon-arrow-top-right ml-15" />
            </>
          )}
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ResetPasswordForm;
