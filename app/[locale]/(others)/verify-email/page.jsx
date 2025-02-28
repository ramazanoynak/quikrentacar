import EmailVerifiedConfirmation from "@/components/common/EmailVerifiedConfirmation";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EmailVerifiedConfirmation />
      </Suspense>
    </div>
  );
};

export default page;
