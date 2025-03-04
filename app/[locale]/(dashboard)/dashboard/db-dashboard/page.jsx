import React, { Suspense } from "react";
import DashboardPage from "../../../../../components/dashboard/dashboard/db-dashboard";

export const metadata = {
  title: "Dashboard || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <DashboardPage />
      </Suspense>
    </>
  );
}
