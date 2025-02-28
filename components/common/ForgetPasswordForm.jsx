"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useForgetPasswordMutation } from "@/redux/queries";
import toast from "react-hot-toast";
import Spinner from "../spinner/Spinner";
import { useRouter, useSearchParams } from "next/navigation";

const ForgetPasswordForm = () => {
  const router = useRouter()
  const [mutate] = useForgetPasswordMutation();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Reset Password Request", values);

      try {
        await mutate(values).unwrap();
        toast.success("Reset password email sent successfully. Please check your mailbox.");
        setTimeout(() => {
          router.push("/")
        }, 2000);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <form className="row y-gap-20" onSubmit={formik.handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Reset your password</h1>
        <p className="mt-10">
          Remember your password?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
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
              Send Reset Link <div className="icon-arrow-top-right ml-15" />
            </>
          )}
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ForgetPasswordForm;
