"use client";

import { useTranslation } from "react-i18next";

const TransmissionFilter = ({ filters, handleFilters }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              disabled={filters?.transmission === "manual"}
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "transmission",
                  e.target.checked ? "automatic" : null
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.automatic")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
        </div>
      </div>
      {/* End .row */}
      <div className="row y-gap-10 items-center justify-between disbaled-fade">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              className={`form-check-input ${
                filters?.transmission === "automatic" ? "disabled-fade" : ""
              }`}
              disabled={filters?.transmission === "automatic"}
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "transmission",
                  e.target.checked ? "manual" : null
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.manual")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">45</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default TransmissionFilter;
