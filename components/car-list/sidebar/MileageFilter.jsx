"use client";

import { useTranslation } from "react-i18next";

const MileageFilter = ({ filters, handleFilters }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "mileage_policy",
                  e.target.checked ? "limited" : null
                )
              }
              disabled={filters?.mileage_policy === "unlimited"}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.limited")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
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
                  "mileage_policy",
                  e.target.checked ? "unlimited" : null
                )
              }
              disabled={filters?.mileage_policy === "limited"}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.unlimited")}</div>
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

export default MileageFilter;
