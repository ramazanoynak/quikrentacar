"use client";
import { useRespondToBookingMutation } from "@/redux/queries/booking";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const page = () => {
  const [mutate, { isLoading, error }] = useRespondToBookingMutation();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  //   if (!query) {
  //     return null;
  //   }

  useEffect(() => {
    async function respondToBooking() {
      try {
        await mutate(query).unwrap();
      } catch (error) {
        toast.error(error.message);
      }
    }

    respondToBooking();
  }, []);
  return (
    <div>
      <h1>
        {isLoading ? <ClipLoader /> : error ? "Session expired...." : "Sucesss"}
      </h1>
    </div>
  );
};

export default page;
