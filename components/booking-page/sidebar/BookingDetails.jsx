"use client";
import { useGetCarQuery } from "@/redux/queries/cars";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const BookingDetails = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const pickupLocation = JSON.parse(query.pickup_location);

  const { data, isLoading } = useGetCarQuery(query?.car_id);
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">
        {t("booking:your_booking_details")}
      </div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <Image
            width={140}
            height={140}
            src={data?.vehicle_info?.image_url}
            alt="image"
            className="size-140 rounded-4 object-contain"
          />
        </div>
        {/* End .col */}
        <div className="col">
          <div className="d-flex x-gap-5 pb-10">
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
          </div>
          {/* End ratings */}
          {/* <div className="lh-17 fw-500">
            Great Northern Hotel, a Tribute Portfolio Hotel, London
          </div> */}
          <div className="text-14 lh-15 mt-5">{data?.vehicle_info?.name}</div>
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-30 flex-center bg-blue-1 rounded-4">
                  <div className="text-12 fw-600 text-white">4.8</div>
                </div>
                <div className="text-14 fw-500 ml-10">
                  {t("booking:exceptional")}
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-14">3,014 reviews</div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">{t("booking:pickup")}</div>
          <div className="fw-500">{pickupLocation?.name}</div>
          <div className="text-15 text-light-1">{query?.pickUpDate}</div>
        </div>
        {/* <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div> */}
        <div className="col-auto">
          <div className="text-15">{t("booking:dropoff")}</div>
          <div className="fw-500">
            {query?.DifferentDropOffLocation
              ? JSON.parse(query?.dropoff_location).name
              : JSON.parse(query?.pickup_location).name}
          </div>
          <div className="text-15 text-light-1">{query?.dropOffDate}</div>
        </div>
      </div>
      {/* End row */}

      {/* <div className="border-top-light mt-30 mb-20" /> */}
      {/* <div>
        <div className="text-15">Total length of stay:</div>
        <div className="fw-500">9 nights</div>
        <a href="#" className="text-15 text-blue-1 underline">
          Travelling on different dates?
        </a>
      </div> */}

      {/* <div className="border-top-light mt-30 mb-20" /> */}
      {/* <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">You selected:</div>
          <div className="fw-500">Superior Double Studio</div>
          <a href="#" className="text-15 text-blue-1 underline">
            Change your selection
          </a>
        </div>
        <div className="col-auto">
          <div className="text-15">1 room, 4 adult</div>
        </div>
      </div> */}
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
