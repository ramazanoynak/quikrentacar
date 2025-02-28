"use client";

// import carsData from "../../../data/cars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { useSearchCarsQuery } from "@/redux/queries/cars";
import { useSearchParams } from "next/navigation";
import { ClipLoader, GridLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faCircleInfo, faDoorClosed,faSnowflake,faGasPump } from "@fortawesome/free-solid-svg-icons";
import CarTermsPopup from "./CarTermsPopup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { convertCurrency } from "@/utils/currencyConverter";
 import CarDoorIcon from './icons/CarDoorIcon';

const CarPropertes = ({ carsData, isFetching, query }) => {
  const [show, setShow] = useState(false);
  const [supplierId, setSupplierId] = useState("");
  const router = useRouter();
  const { t } = useTranslation();

  const totalDays =
    (new Date(query.dropOffDate) - new Date(query.pickUpDate)) / 86400000;
  console.log(query);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {show && (
        <CarTermsPopup
          handleShow={handleShow}
          handleClose={handleClose}
          supplierId={supplierId}
        />
      )}
      {isFetching ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader />
        </div>
      ) : (
        carsData?.results?.map((item) => (
          <div className="col-12" key={item?.id}>
            <div className="border-light p-4">
              <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="relative d-flex">
                    <div className="cardImage w-250 md:w-1/1 rounded-4 border-light">
                      <div className="custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                          {/* {item?.slideImg?.map((slide, i) => ( */}
                          <SwiperSlide>
                            <div className="ratio ratio-1:1">
                              <div className="cardImage__content">
                                <Image
                                  width={250}
                                  height={250}
                                  className="rounded-4 col-12 js-lazy object-fit-contain border-none"
                                  src={item?.vehicle_info.image_url}
                                  priority
                                  alt="image"
                                />
                              </div>
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12"></i>
                                </button>
                              </div>
                            </div>
                          </SwiperSlide>
                          {/* ))} */}
                        </Swiper>
                      </div>

                      {/* End image */}
                    </div>
                    {/* End image ratio */}
                  </div>
                  {/* End relative */}
                </div>
                {/* End .col */}

                <div className="col-md">
                  <div className="d-flex flex-column h-full justify-between">
                    <div>
                      <div className="row x-gap-5 items-center">
                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            {item?.location}
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="text-18 fw-bold d-flex align-items-baseline justify-center gap-1">
                            <div> {item?.vehicle_info.name}</div>
                            <h3 className="text-18 fw-500">
                              {/* Mercedes-Benz E-Class{" "} */}
                              <span className="text-16 text-light-1">
                               or similar | {item?.vehicle_info.transmission === "automatic"
                                  ? "Automatic"
                                  : "Manual"}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mt-20">
                      <div className="row y-gap-5">
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                            <i className="icon-user-2" />
                            <div className="text-15 ml-10">
                              <strong>
                                {t("search:car.seats")}:{" "}
                                {item?.vehicle_info.seats}
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                            <i className="icon-luggage" />
                            <div className="text-15 ml-10">
                              <strong>{t("search:car.baggage")}: 1</strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                           <CarDoorIcon width={16} height={16} fill="black" />
                            <div className="text-15 ml-10">
                              <strong>
                                {t("search:car.doors")}:{" "}
                                {item?.vehicle_info?.doors}
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                            <i className="icon-transmission" />
                            <div className="text-15 ml-10">
                              <strong>
                                {" "}
                                {item?.vehicle_info.transmission === "automatic"
                                  ? `${t("search:car.automatic")}`
                                  : t("search:car.manual")}
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                            <i className="icon-speedometer" />
                            <div className="text-15 ml-10">
                              <strong>
                                {item?.vehicle_info?.mileage_policy ===
                                "unlimited"
                                  ? t("search:car.unlimited")
                                  : t("search:car.limited")}
                              </strong>
                            </div>
                          </div>
                        </div>
                        {item?.vehicle_info?.air_conditioner && (
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                             <FontAwesomeIcon icon={faSnowflake}  />
                              <div className="text-15 ml-10">
                                <strong> Air conditioning</strong>
                              </div>
                            </div>
                          </div>
                        )}
                        {item?.vehicle_info?.fuel_policy === "full_to_full" && (
                          <div className="col-sm-6">
                            <div className="d-flex items-center">
                            <FontAwesomeIcon icon={faGasPump}  />
                              <div className="text-15 ml-10">
                                <strong>Full to full</strong>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="col-sm-6">
                          <div className="d-flex items-center">
                            <i className="icon-speedometer" />
                            <div className="text-15 ml-10">
                              <strong>
                                {toCapitalize(item?.vehicle_info?.fuel_type)}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-20">
                      <div className="d-flex gap-4">
                        <div className="d-flex items-center">
                          <i className="icon-check text-10" />
                          <div className="text-14 fw-500 ml-10">
                            {t("search:car.free_amendments")}
                          </div>
                        </div>
                        <div className="d-flex items-center mt-5">
                          <i className="icon-check text-10" />
                          <div className="text-14 fw-500 text-green-2 ml-10">
                            {t("search:car.free_cancellation")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-md */}

                <div className="col-md-auto text-right md:text-left">
                  {/* <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Exceptional</div>
                      <div className="text-14 lh-14 text-light-1">
                        {item?.numberOfReviews} reviews
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">
                        {item?.ratings}
                      </div>
                    </div>
                  </div> */}
                  {/* End .row */}

                  <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">
                    <div className="text-14 text-light-1 mb-2">
                      {t("search:car.price_for")} {totalDays}{" "}
                      {t("search:car.days")}
                    </div>
                    {JSON.parse(localStorage.getItem("user_prefer_currency"))}{" "}
                    {convertCurrency(
                      item.pricing_info?.price_per_day *
                        (totalDays > 0 ? totalDays : 1)
                    )}
                    <div className="text-14 text-light-1 mt-5">
                      {t("search:car.price_per_day")}:{" "}
                      {convertCurrency(item?.pricing_info?.price_per_day)}
                    </div>
                  </div>
                </div>
                {/* End col-md-auto */}

                <div className="row d-flex align-items-center">
                  <div className="col-md-6 d-flex align-items-center gap-2">
                    <img
                      style={{ width: "50px" }}
                      className="border-light p-1"
                      src={item?.supplier_id?.companyLogo}
                      alt=""
                    />
                    <button
                      onClick={() => {
                        setSupplierId(item.supplier_id?.id);
                        setShow(true);
                      }}
                      style={{
                        color: "#999",
                      }}
                      className="border-0"
                    >
                      <FontAwesomeIcon icon={faCircleInfo} /> Ts & Cs
                    </button>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <button
                      onClick={() => {
                        query.car_id = item.id;
                        query.supplierId = item.supplier_id?.id;
                        query.car_price = item?.pricing_info?.price_per_day;
                        const encodedQyery = new URLSearchParams(
                          query
                        ).toString();
                        router.push(`/booking-page?${encodedQyery}`);
                      }}
                    className="button h-50 px-24 rounded-4 bg-dark-1 -blue-1 text-white">
                      {t("search:car.book_now")}{" "}
                    </button>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CarPropertes;


// "use client";

// // import carsData from "../../../data/cars";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchCarsQuery } from "@/redux/queries/cars";
// import { useSearchParams } from "next/navigation";
// import { ClipLoader, GridLoader } from "react-spinners";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleInfo, faDoorClosed,faSnowflake,faGasPump } from "@fortawesome/free-solid-svg-icons";
// import CarTermsPopup from "./CarTermsPopup";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import CarDoorIcon from './icons/CarDoorIcon';

// const CarPropertes = ({ carsData, isFetching, query }) => {
//   const [show, setShow] = useState(false);
//   const [supplierId, setSupplierId] = useState("");
//   const router = useRouter();

//   const totalDays =
//     (new Date(query.dropOffDate) - new Date(query.pickUpDate)) / 86400000;
//   console.log(query);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const toCapitalize = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   return (
//     <>
//       {show && (
//         <CarTermsPopup
//           handleShow={handleShow}
//           handleClose={handleClose}
//           supplierId={supplierId}
//         />
//       )}
//       {isFetching ? (
//         <div className="d-flex justify-content-center align-items-center">
//           <ClipLoader />
//         </div>
//       ) : (
//         carsData?.results?.map((item) => (
//           <div className="col-12" key={item?.id}>
//             <div className="border-light p-4">
//               <div className="row x-gap-20 y-gap-20">
//                 <div className="col-md-auto">
//                   <div className="relative d-flex">
//                     <div className="cardImage w-250 md:w-1/1 rounded-4 border-light">
//                       <div className="custom_inside-slider">
//                         <Swiper
//                           className="mySwiper"
//                           modules={[Pagination, Navigation]}
//                           pagination={{
//                             clickable: true,
//                           }}
//                           navigation={true}
//                         >
//                           {/* {item?.slideImg?.map((slide, i) => ( */}
//                           <SwiperSlide>
//                             <div className="ratio ratio-1:1">
//                               <div className="cardImage__content">
//                                 <Image
//                                   width={250}
//                                   height={250}
//                                   className="rounded-4 col-12 js-lazy object-fit-contain border-none"
//                                   src={item?.vehicle_info.image_url}
//                                   priority
//                                   alt="image"
//                                 />
//                               </div>
//                               <div className="cardImage__wishlist">
//                                 <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
//                                   <i className="icon-heart text-12"></i>
//                                 </button>
//                               </div>
//                             </div>
//                           </SwiperSlide>
//                           {/* ))} */}
//                         </Swiper>
//                       </div>

//                       {/* End image */}
//                     </div>
//                     {/* End image ratio */}
//                   </div>
//                   {/* End relative */}
//                 </div>
//                 {/* End .col */}

//                 <div className="col-md">
//                   <div className="d-flex flex-column h-full justify-between">
//                     <div>
//                       <div className="row x-gap-5 items-center">
//                         <div className="col-auto">
//                           <div className="text-14 text-light-1">
//                             {item?.location}
//                           </div>
//                         </div>
//                         <div className="col-auto">
//                           <div className="text-18 fw-bold d-flex align-items-baseline justify-center gap-1">
//                             <div> {item?.vehicle_info.name}</div>
//                             <h3 className="text-18 fw-500">
//                               {/* Mercedes-Benz E-Class{" "} */}
//                               <span className="text-16 text-light-1">
//                                 or similar | {item?.vehicle_info.transmission === "automatic"
//                                   ? "Automatic"
//                                   : "Manual"}
//                               </span>
//                             </h3>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-8 mt-20">
//                       <div className="row y-gap-5">
//                         <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                             <i className="icon-user-2" />
//                             <div className="text-15 ml-10">
//                               <strong>Seats: {item?.vehicle_info.seats}</strong>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                             <i className="icon-luggage" />
//                             <div className="text-15 ml-10">
//                               <strong>Baggage: 1</strong>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                            <CarDoorIcon width={16} height={16} fill="black" />

//                             <div className="text-15 ml-10">
//                               <strong>
//                                 Doors: {item?.vehicle_info?.doors}
//                               </strong>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                             <i className="icon-transmission" />
//                             <div className="text-15 ml-10">
//                               <strong>
//                                 {" "}
//                                 {item?.vehicle_info.transmission === "automatic"
//                                   ? "Automatic"
//                                   : "Manual"}
//                               </strong>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                             <i className="icon-speedometer" />
//                             <div className="text-15 ml-10">
//                               <strong>
//                                 {item?.vehicle_info?.mileage_policy ===
//                                 "unlimited"
//                                   ? "Unlimited Mileage"
//                                   : "Limited Mileage"}
//                               </strong>
//                             </div>
//                           </div>
//                         </div>
//                         {item?.vehicle_info?.air_conditioner && (
//                           <div className="col-sm-6">
//                             <div className="d-flex items-center">
//                             <FontAwesomeIcon icon={faSnowflake}  />
//                               {/* <i className="icon-transmission" /> */}
//                               <div className="text-15 ml-10">
//                                 <strong> Air conditioning</strong>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                         {item?.vehicle_info?.fuel_policy === "full_to_full" && (
//                           <div className="col-sm-6">
//                             <div className="d-flex items-center">
//                             <FontAwesomeIcon icon={faGasPump}  />
//                               <div className="text-15 ml-10">
//                                 <strong>Full to full</strong>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                         {/* <div className="col-sm-6">
//                           <div className="d-flex items-center">
//                             <i className="icon-speedometer" />
//                             <div className="text-15 ml-10">
//                               <strong>
//                                 {toCapitalize(item?.vehicle_info?.fuel_type)}
//                               </strong>
//                             </div>
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                     <div className="mt-20">
//                       <div className="d-flex gap-4">
//                         <div className="d-flex items-center">
//                           <i className="icon-check text-10" />
//                           <div className="text-15 fw-500 ml-10">
//                             Free Amendments
//                           </div>
//                         </div>
//                         <div className="d-flex items-center mt-5">
//                           <i className="icon-check text-10" />
//                           <div className="text-15 fw-500 text-green-2 ml-10">
//                             Free Cancellation
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* End col-md */}

//                 <div className="col-md-auto text-right md:text-left">
//                   {/* <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
//                     <div className="col-auto">
//                       <div className="text-14 lh-14 fw-500">Exceptional</div>
//                       <div className="text-14 lh-14 text-light-1">
//                         {item?.numberOfReviews} reviews
//                       </div>
//                     </div>
//                     <div className="col-auto">
//                       <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">
//                         {item?.ratings}
//                       </div>
//                     </div>
//                   </div> */}
//                   {/* End .row */}

//                   <div className="text-22 lh-12 fw-600 mt-70 md:mt-20">
//                     <div className="text-15 text-light-1 mb-2">
//                       Price for {totalDays} days
//                     </div>
//                     {item?.pricing_info?.currency}
//                     {item.pricing_info?.price_per_day *
//                       (totalDays > 0 ? totalDays : 1)}
//                     <div className="text-15 text-light-1 mt-5">
//                       Price per day: {item?.pricing_info?.price_per_day}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End col-md-auto */}

//                 <div className="row d-flex align-items-center">
//                   <div className="col-md-6 d-flex align-items-center gap-2">
//                     <img
//                       style={{ width: "50px" }}
//                       className="border-light p-1"
//                       src={item?.supplier_id?.companyLogo}
//                       alt=""
//                     />
//                     <button
//                       onClick={() => {
//                         setSupplierId(item.supplier_id?.id);
//                         setShow(true);
//                       }}
//                       style={{
//                         color: "#999",
//                       }}
//                       className="border-0"
//                     >
//                       <FontAwesomeIcon icon={faCircleInfo} /> Ts & Cs
//                     </button>
//                   </div>
//                   <div className="col-md-6 d-flex align-items-center justify-content-end">
//                     <button
//                       onClick={() => {
//                         query.car_id = item.id;
//                         query.supplierId = item.supplier_id?.id;
//                         query.car_price = item?.pricing_info?.price_per_day;
//                         const encodedQyery = new URLSearchParams(
//                           query
//                         ).toString();
//                         router.push(`/booking-page?${encodedQyery}`);
//                       }}
//                       className="button h-50 px-24 rounded-4 bg-dark-1 -blue-1 text-white"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* End .row  <div className="icon-arrow-top-right ml-15" />*/}
//             </div>
//           </div>
//         ))
//       )}
//     </>
//   );
// };

// export default CarPropertes;
