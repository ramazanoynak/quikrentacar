import { Elements } from "@stripe/react-stripe-js";
import React, { use, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useCreatePaymentIntentMutation } from "@/redux/queries/stripe";
import toast from "react-hot-toast";

const Checkout = ({
  createBookingLoading,
  formik,
  bookingData,
  setCurrentStep,
}) => {
  const [clientSecret, setClientSecret] = useState("");
  const [mutate] = useCreatePaymentIntentMutation();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPaymentIntentSecretKey() {
      try {
        const res = await mutate({
          amount: bookingData.price,
          currency: "usd",
        }); // Example amount: $10.00
        setClientSecret(res.data.client_secret);
      } catch (error) {
        console.error(error);
        toast.error("Failed to create payment intent. Please try again.");
        setError(error);
      }
    }

    getPaymentIntentSecretKey();
  }, [mutate]);

  console.log(clientSecret);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            bookingData={bookingData}
            formik={formik}
            clientSecret={clientSecret ? clientSecret : ""}
            createBookingLoading={createBookingLoading}
            setCurrentStep={setCurrentStep}
          />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
