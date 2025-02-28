"use client";
import { useSubscribeMutation } from "@/redux/queries";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const Subscribe = () => {
  const { t } = useTranslation();
  const [mutate, { isLoading }] = useSubscribeMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Submitted", values);
      try {
        const response = await mutate(values).unwrap();
        toast.success("Subscribed successfully");
        resetForm();
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <form className="single-field relative d-flex justify-end items-center mb-30">
      <input
        className="bg-white rounded-8"
        type="email"
        placeholder="Your Email"
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="email"
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <div className="text-red-1">{formik.errors.email}</div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        onClick={formik.handleSubmit}
        className="absolute px-20 h-full text-15 fw-500 underline  button bg-blue-1 text-white"
      >
        {t("home:footer.subscribe")}
      </button>
    </form>
  );
};

export default Subscribe;
