"use client";

import { useTranslation } from "react-i18next";

const SpecificationsFilter = ({ filters, handleFilters }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">With air conditioning</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
        </div>
      </div> */}
      {/* End .row */}
      {/* <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Automatic transmission</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">45</div>
        </div>
      </div> */}
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "fuel_type",
                  e.target.checked ? "petrol" : "petrol"
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.petrol")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">21</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "fuel_type",
                  e.target.checked ? "diesel" : "diesel"
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.diesel")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">78</div>
        </div>
      </div>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "fuel_type",
                  e.target.checked ? "electric" : "electric"
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.electric")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">78</div>
        </div>
      </div>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "fuel_type",
                  e.target.checked ? "hybrid" : "hybrid"
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.hybrid")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">78</div>
        </div>
      </div>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters("doors", e.target.checked ? 4 : null)
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">
              {t("search:filters.four_doors")}
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">679</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default SpecificationsFilter;
