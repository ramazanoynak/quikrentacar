"use client";
import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-8";
import DefaultFooter from "@/components/footer/footer-6";
import StepperBooking from "@/components/booking-page/stepper-booking";
import { useSearchParams } from "next/navigation";
import { useGetCarQuery } from "@/redux/queries/cars";

// export const metadata = {
//   title: "Hotel Booking Page || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const index = () => {

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
