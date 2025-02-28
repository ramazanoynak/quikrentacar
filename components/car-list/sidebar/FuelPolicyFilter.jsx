'use client'

import { useTranslation } from "react-i18next";

const FuelPolicyFilter = ({ filters, handleFilters }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilters(
                  "fuel_policy",
                  e.target.checked ? "full_to_full" : null
                )
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{t("search:filters.full_to_full")}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">92</div>
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default FuelPolicyFilter;
