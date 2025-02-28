"use client";

import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { useSearchParams } from "next/navigation";
import { useGetCarQuery } from "@/redux/queries/cars";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateBookingMutation } from "@/redux/queries/booking";
import toast from "react-hot-toast";
import Spinner from "@/components/spinner/Spinner";
import { setToken } from "@/utils/cookies";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [bookingData, setBookingData] = useState(null);
  const [
    mutate,
    { isLoading: createBookingLoading, data: booking, isSuccess },
  ] = useCreateBookingMutation();

  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const pickupLocation = JSON.parse(query.pickup_location);

  const totalDays =
    (new Date(query.dropOffDate) - new Date(query.pickUpDate)) / 86400000;
  const price = query.car_price * (totalDays > 0 ? totalDays : 1);
  query.price = price;

  const handleBooking = async (values, { resetForm, setSubmitting }) => {
    try {
      let payload = {
        car_id: query.car_id,
        supplierId: query.supplierId,
        pickupLocation: pickupLocation.name,
        dropoffLocation: query.differentDropOffLocation
          ? JSON.parse(query.dropoff_location).name
          : pickupLocation.name,
        contactInfo: values,
        pickupDate: query.pickUpDate,
        dropoffDate: query.dropOffDate,
        pickupTime: query.pickUpTime,
        dropoffTime: query.dropOffTime,
        price,
      };
      const res = await mutate(payload);
      setBookingData(res.data);
      setToken(res.data?.tokens?.access.token);
      resetForm();
      setSubmitting(false);
      setCurrentStep(1);
    } catch (error) {
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone_number: Yup.string().required("Phone number is required"),
    }),
    onSubmit: handleBooking,
  });

  // steps validations
  const isStep1Valid =
    formik.values.first_name &&
    formik.values.last_name &&
    formik.values.email &&
    formik.values.phone_number;

  const { data, isLoading } = useGetCarQuery(query?.car_id);

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: t("booking:personal_details"),
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo formik={formik} />,
    },
    {
      title: t("booking:payment_details"),
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <PaymentInfo
          bookingData={bookingData?.newBooking}
          setCurrentStep={setCurrentStep}
          query={query}
        />
      ),
    },
    {
      title: t("booking:final_step"),
      stepNo: "3",
      stepBar: "",
      content: <OrderSubmittedInfo booking={booking?.newBooking} />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                // onClick={() => {
                //   if (!isStep1Valid && index === 0) {
                //     return;
                //   }
                //   setCurrentStep(index);
                // }}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            {t("booking:previous")}
          </button>
        </div>
        {/* End prvious btn */}

        {currentStep === 0 && (
          <div className="col-auto">
            <button
              className="button h-60 px-24 -blue-1 bg-blue-1 text-white"
              onClick={formik.handleSubmit}
              disabled={formik.isSubmitting}
              type="submit"
            >
              {createBookingLoading ? "processing..." : t("booking:next")}
            </button>
          </div>
        )}
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
