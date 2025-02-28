import {
  useCreatePaymentIntentMutation,
  useSaveTransactionMutation,
} from "@/redux/queries/stripe";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({
  formik,
  setCurrentStep,
  bookingData,
  clientSecret,
}) => {
  const [mutateTransaction] = useSaveTransactionMutation();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again.");
      setIsLoading(false);
      return;
    }

    const { error } = elements.submit();
    if (error) {
      console.error(error);
      toast.error(error.message);
      setError(error);
      setIsLoading(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        // Optional: Redirect URL after successful payment
        return_url: `${window.location.origin}/success`,
      },
      redirect: "if_required", // Avoid redirecting if not required
    });

    if (result.error) {
      console.error(result.error);
      toast.error(result.error.message);
      setError(result.error);
      setIsLoading(false);
    } else if (
      result.paymentIntent &&
      result.paymentIntent.status === "succeeded"
    ) {
      console.log("Payment succeeded!", result.paymentIntent);
      try {
        const transactionPayload = {
          bookingId: bookingData?.id,
          transactionId: result.paymentIntent.id,
          supplierId: bookingData?.supplierId,
          amount: result.paymentIntent?.amount,
          currency: result.paymentIntent?.currency,
          userId: bookingData?.userId,
        };

        await mutateTransaction(transactionPayload);
        setIsLoading(false);
        setCurrentStep(2);
      } catch (error) {
        console.error(error);
        toast.error("Failed to save transaction. Please try again.");
        setError(error);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      toast.success("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
      {clientSecret ? (
        <>
          <PaymentElement />
          {error && <p className="text-danger mt-3">{error.message}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className={`btn btn-primary w-100 mt-4 ${
              isLoading ? "disabled" : ""
            }`}
            style={{
              backgroundColor: "#007bff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              opacity: isLoading ? 0.7 : 1,
              transition: "opacity 0.3s ease",
            }}
          >
            {isLoading ? "Processing..." : "Book Now"}
          </button>
        </>
      ) : (
        <p>Loading payment details...</p>
      )}
    </form>
  );
};

export default CheckoutForm;
