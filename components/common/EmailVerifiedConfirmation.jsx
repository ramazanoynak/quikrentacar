"use client";
import { useVerifyEmailMutation } from "@/redux/queries";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EmailVerifiedConfirmation = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    router.push("/");
    return null;
  }

  const [mutate, { isLoading }] = useVerifyEmailMutation();

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        try {
          await mutate(token).unwrap();
          setMessage(
            "Your email has been successfully verified. You can now safely close this tab."
          );
        } catch (error) {
          setError(
            error.data?.message || "An error occurred during verification."
          );
        }
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="row y-gap-20">
      <div className="col-12">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className="text-22 fw-500 text-center">Email Verified</h1>
            <p className="mt-10 text-center">
              {message && (
                <>
                  <div className="alert alert-success">{message}</div>
                </>
              )}

              {error && (
                <>
                  <div className="alert alert-danger">{error}</div>
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerifiedConfirmation;
