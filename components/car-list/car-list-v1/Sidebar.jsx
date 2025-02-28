"use client";
import Map from "../sidebar/Map";
import LocationFilters from "../sidebar/LocationFilters";
import PirceSlider from "../sidebar/PirceSlider";
import CategorieFilters from "../sidebar/CategorieFilters";
import SupplierFilters from "../sidebar/SupplierFilters";
import SpecificationsFilter from "../sidebar/SpecificationsFilter";
import MileageFilter from "../sidebar/MileageFilter";
import TransmissionFilter from "../sidebar/TransmissionFilter";
import FuelPolicyFilter from "../sidebar/FuelPolicyFilter";
import { useTranslation } from "react-i18next";

const Sidebar = ({ filters, handleFilters }) => {
  const { t, ready } = useTranslation("search", { useSuspense: false });

  if (!ready) {
    return null;
  }

  return (
    <>
      {/* <div className="sidebar__item -no-border position-relative">
        <Map />
      </div> */}
      {/* End find map */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Location (Heathrow Airport)</h5>
        <div className="sidebar-checkbox">
          <LocationFilters />
        </div>
      </div> */}
      {/* End Location filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Car Category</h5>
        <div className="sidebar-checkbox">
          <CategorieFilters />
        </div>
      </div> */}
      {/* End Category filter */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div> */}
      {/* End Price filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">
          {t("search:filters.car_specifications")}
        </h5>
        <div className="sidebar-checkbox">
          <SpecificationsFilter
            filters={filters}
            handleFilters={handleFilters}
          />
        </div>
      </div>
      {/* End Specifications filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">
          {t("search:filters.mileage")}/{t("search:filters.kilometers")}
        </h5>
        <div className="sidebar-checkbox">
          <MileageFilter filters={filters} handleFilters={handleFilters} />
        </div>
      </div>
      {/* End Kilometres filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">
          {t("search:filters.transmission")}
        </h5>
        <div className="sidebar-checkbox">
          <TransmissionFilter filters={filters} handleFilters={handleFilters} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Transmission filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">
          {t("search:filters.fuel_policy")}
        </h5>
        <div className="sidebar-checkbox">
          <FuelPolicyFilter filters={filters} handleFilters={handleFilters} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Fuel Policy filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">{t("search:filters.supplier")}</h5>
        <div className="sidebar-checkbox">
          <SupplierFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Supplier filter */}
    </>
  );
};

export default Sidebar;
