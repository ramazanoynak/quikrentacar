"use client";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import PickUpLocation from "./PickUpLocation";
import DropOffLocation from "./DropOffLocation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { DateObject } from "react-multi-date-picker";
import { useTranslation } from "react-i18next";
 
const MainFilterSearchBox = ({ isSearchPage = false, userQuery }) => {
  const { t } = useTranslation();

  const [dropOffAtDifferentLocation, setDropOffAtDifferentLocation] =
    useState(false);
  const router = useRouter();
  const [over30DriverAge, setover30DriverAge] = useState(true);
  const [driverAge, setDriverAge] = useState(18);
  const today = new DateObject();

  const formik = useFormik({
    initialValues: isSearchPage
      ? userQuery
      : {
          pickUpLocation: "",
          dropOffLocation: "",
          pickUpDate: "",
          dropOffDate: "",
          pickUpTime: "11:00",
          dropOffTime: "11:00",
          differentDropOffLocation: false,
        },
    validationSchema: Yup.object({
      pickUpLocation: Yup.string().required("Pick up location is required"),
      dropOffLocation: Yup.string().when("differentDropOffLocation", {
        is: (value) => value === true, // Conditional check
        then: () => Yup.string().required("Drop off location is required"),
        otherwise: () => Yup.string(), // Optional if differentDropOffLocation is true
      }),
      pickUpDate: Yup.string().required("Pick up date is required"),
      dropOffDate: Yup.string().required("Drop off date is required"),
      pickUpTime: Yup.string().required("Pick up time is required"),
      dropOffTime: Yup.string().required("Drop off time is required"),
    }),
    onSubmit: (values) => {
      const {
        pickUpDate,
        differentDropOffLocation,
        dropOffDate,
        pickUpLocation,
        dropOffLocation,
        pickUpTime,
        dropOffTime,
      } = values;
      const searchQuery = {
        pickUpDate: moment(pickUpDate.unix, "X").format("YYYY-MM-DD"),
        dropOffDate: moment(dropOffDate.unix, "X").format("YYYY-MM-DD"),
        pickup_location: pickUpLocation,
        dropoff_location: differentDropOffLocation
          ? dropOffLocation
          : pickUpLocation,
        pickUpTime,
        dropOffTime,
        differentDropOffLocation,
      };

      const encodedQuery = new URLSearchParams(searchQuery).toString();
      router.push(`/search-results?${encodedQuery}`);
    },
  });

  useEffect(() => {
    const today = moment().startOf("day").toDate();
    const pickUpDate = formik.values.pickUpDate
      ? moment(formik.values.pickUpDate.unix, "X").format("YYYY-MM-DD")
      : null;
    const dropOffDate = formik.values.dropOffDate
      ? moment(formik.values.dropOffDate.unix, "X").format("YYYY-MM-DD")
      : null;

    // console.log(pickUpDate, "pickUpDate");
    // console.log(dropOffDate, "dropOffDate");

    // Ensure pickUpDate is not in the past
    if (!pickUpDate) {
      formik.setFieldValue("pickUpDate", today, false);
    } else if (pickUpDate && dropOffDate && pickUpDate > dropOffDate) {
      console.log("pickUpDate > dropOffDate");
      formik.setFieldValue("pickUpDate", dropOffDate, false);
    }

    // Ensure dropOffDate is valid compared to pickUpDate
    if (dropOffDate && dropOffDate < pickUpDate) {
      formik.setFieldValue("dropOffDate", pickUpDate, false);
    }
  }, [formik.values.pickUpDate, formik.values.dropOffDate]);

  return (
    <>
      <div
        className={`mainSearch -col-5 ${
          !isSearchPage && "-w-1070"
        } mx-auto bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1`}
      >
        <div className="button-grid items-center">
          <PickUpLocation formik={formik} />
          {/* End Pickup Location */}
          {dropOffAtDifferentLocation && <DropOffLocation formik={formik} />}
          {/* End Drop off location  */}
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16"> 
              {t("home:hero.searchBar.pickup_date")}</h4>
              <DateSearch
                fieldName={"pickUpDate"}
                formik={formik}
                minDate={today}
                placeholder={today.format("MMMM DD")}
                maxDate={formik.values.dropOffDate}
              />
            </div>
          </div>
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16"> {t("home:hero.searchBar.dropoff_date")}</h4>
              <DateSearch
                fieldName={"dropOffDate"}
                formik={formik}
                minDate={formik.values.pickUpDate || today}
                placeholder={
                  formik.values.pickUpDate
                    ? today.format("MMMM DD")
                    : today.format("MMMM DD")
                }
              />
            </div>
          </div>
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16"> {t("home:hero.searchBar.pickup_time")}</h4>
              <select
                name="pickUpTime"
                value={formik.values.pickUpTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {Array.from({ length: 48 }).map((_, index) => {
                  const hours = Math.floor(index / 2);
                  const minutes = index % 2 === 0 ? "00" : "30";
                  const time = `${String(hours).padStart(2, "0")}:${minutes}`;
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>
              {formik.errors.pickUpTime && formik.touched.pickUpTime && (
                <div className="text-danger">{formik.errors.pickUpTime}</div>
              )}
            </div>
          </div>
          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">{t("home:hero.searchBar.dropoff_time")}</h4>
              <select
                name="dropOffTime"
                value={formik.values.dropOffTime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {Array.from({ length: 48 }).map((_, index) => {
                  const hours = Math.floor(index / 2);
                  const minutes = index % 2 === 0 ? "00" : "30";
                  const time = `${String(hours).padStart(2, "0")}:${minutes}`;
                  return (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  );
                })}
              </select>
              {formik.errors.dropOffTime && formik.touched.dropOffTime && (
                <div className="text-danger">{formik.errors.dropOffTime}</div>
              )}
            </div>
          </div>
          {/* EndDrop off Date */}
          {/* <GuestSearch /> */}
          {/* End guest */}
          <div className="button-item">
            <button
              className="mainSearch__submit button  py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 -blue-1 text-white"
              onClick={formik.handleSubmit}
              type="button"
            >
              <i className="icon-search text-20 mr-10" />
              {t("home:hero.searchBar.search")}
            </button>
          </div>
          {/* End search button_item */}
        </div>
        <div className="px-30 lg:py-20 lg:px-0">
          <div className="row">
            <div className="col">
              <div className="d-flex items-center gap-3">
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    name="dropOffAtDifferentLocation"
                    onChange={(e) => {
                      setDropOffAtDifferentLocation(e.target.checked);
                      formik.setFieldValue(
                        "differentDropOffLocation",
                        e.target.checked
                      );
                    }}
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 ml-10">
                  {t("home:hero.searchBar.dropoff_at_different_location")}
                  </div>
                </div>
                <div className="form-checkbox d-flex items-center">
                  <input
                    type="checkbox"
                    value={over30DriverAge}
                    checked={over30DriverAge}
                    onChange={(e) => setover30DriverAge(e.target.checked)}
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 ml-10">
                  {t("home:hero.searchBar.driver_age_between")}
                  </div>
                </div>
                <div>
                  {!over30DriverAge && (
                    <>
                      <div>
                        <input
                          className="form-input w-50 border-light rounded-4"
                          type="number"
                          value={driverAge}
                          onChange={(e) => setDriverAge(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
