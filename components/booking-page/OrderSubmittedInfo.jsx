import moment from "moment";
import { useTranslation } from "react-i18next";

const OrderSubmittedInfo = ({ booking }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-xl-8 col-lg-8">
        <div className="order-completed-wrapper">
          <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
            <div className="size-80 flex-center rounded-full bg-dark-3">
              <i className="icon-check text-30 text-white" />
            </div>
            <div>
              <button
                onClick={() => window.print()}
                className="button -dark-1 py-15 px-40 mt-20 col-12 rounded-4 bg-blue-1 text-white"
              >
                <i className="icon-download text-20 mr-10" />
                {t("booking:print")}
              </button>
            </div>
            <div className="text-30 lh-1 fw-600 mt-20">
              {booking?.contactInfo?.first_name},{" "}
              {t("booking:your_booking_was_submitted_successfully")}
            </div>
            <div className="text-15 text-light-1 mt-10">
              {t("booking:booking_details_sent")}: {booking?.contactInfo?.email}
            </div>
          </div>
          {/* End header */}

          <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="text-15 lh-12">{t("booking:order_number")}</div>
                <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                  {booking?.bookingRef.toUpperCase()}
                </div>
              </div>
              {/* End .col */}
              <div className="col-lg-3 col-md-6">
                <div className="text-15 lh-12">{t("booking:date")}</div>
                <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                  {moment(booking?.pickupDate).format("DD MMM YYYY")}
                </div>
              </div>
              {/* End .col */}
              <div className="col-lg-3 col-md-6">
                <div className="text-15 lh-12">{t("booking:total")}</div>
                <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                  AED {booking?.price}
                </div>
              </div>
              {/* End .col */}
              <div className="col-lg-3 col-md-6">
                <div className="text-15 lh-12">
                  {t("booking:payment_method")}
                </div>
                <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                  {t("booking:direct_bank_transfer")}
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* order price info */}

          <div className="border-light rounded-8 px-50 py-40 mt-40">
            <h4 className="text-20 fw-500 mb-30">
              {t("booking:your_information")}
            </h4>
            <div className="row y-gap-10">
              <div className="col-12">
                <div className="d-flex justify-between ">
                  <div className="text-15 lh-16">{t("booking:first_name")}</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.first_name}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">{t("booking:last_name")}</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.last_name}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">{t("booking:email")}</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.email}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">{t("booking:phone")}</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.phone_number}
                  </div>
                </div>
              </div>
              {/* End .col */}
              {/* <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Address</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.address}
                  </div>
                </div>
              </div> */}
              {/* End .col */}
              {/* <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">City</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.city}
                  </div>
                </div>
              </div> */}
              {/* End .col */}
              <div className="col-12">
                {/* <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">State/Province/Region</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1" >
                    {booking?.contactInfo?.state}
                  </div>
                </div> */}
              </div>
              {/* End .col */}
              {/* <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">ZIP code/Postal code</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.zip_code}
                  </div>
                </div>
              </div> */}
              {/* End .col */}
              <div className="col-12">
                {/* <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Country</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {booking?.contactInfo?.country}
                  </div>
                </div> */}
              </div>
              {/* End .col */}
              {/* <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Special Requirements</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1" />
                </div>
              </div> */}
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End order information */}
        </div>
      </div>
    </>
  );
};

export default OrderSubmittedInfo;
