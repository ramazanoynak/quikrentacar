import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faTachometerAlt,
  faShieldAlt,
  faUserShield,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { useGetCarTermsBySupplierQuery } from "@/redux/queries/carTerms";
import { ClipLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const CarTermsPopup = ({ handleShow, handleClose, supplierId }) => {
  const { data, isLoading } = useGetCarTermsBySupplierQuery(supplierId);
  const { t } = useTranslation();

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {t("search:car.general_conditions")}
                {/* {t("search.car.general_conditions")} */}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              {isLoading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <ClipLoader />
                </div>
              ) : (
                <div className="accordion" id="carTermsAccordion">
                  {/* Fuel Policy */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="fuelPolicyHeading">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fuelPolicy"
                        aria-expanded="true"
                        aria-controls="fuelPolicy"
                      >
                        <FontAwesomeIcon icon={faGasPump} className="me-2" />{" "}
                        Fuel Policy
                        <br />
                        <small className="text-muted d-block px-2">
                          {data?.fuel_policy === "full_to_full"
                            ? "Full to full"
                            : "Full to empty"}
                        </small>
                      </button>
                    </h2>
                    <div
                      id="fuelPolicy"
                      className="accordion-collapse collapse show"
                      aria-labelledby="fuelPolicyHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        <strong>
                          {" "}
                          {data?.fuel_policy === "full_to_full"
                            ? "Full to full"
                            : "Full to empty"}
                        </strong>
                        .
                      </div>
                    </div>
                  </div>

                  {/* Mileage Policy */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="mileagePolicyHeading">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mileagePolicy"
                        aria-expanded="false"
                        aria-controls="mileagePolicy"
                      >
                        <FontAwesomeIcon
                          icon={faTachometerAlt}
                          className="me-2"
                        />{" "}
                        Mileage Policy
                        <br />
                        <small className="text-muted d-block px-2">
                          {data?.mileage_policy}
                        </small>
                      </button>
                    </h2>
                    <div
                      id="mileagePolicy"
                      className="accordion-collapse collapse"
                      aria-labelledby="mileagePolicyHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        {/* <strong>{data?.mileage_policy}</strong>. */}
                      </div>
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="insuranceHeading">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#insurance"
                        aria-expanded="false"
                        aria-controls="insurance"
                      >
                        <FontAwesomeIcon icon={faShieldAlt} className="me-2" />{" "}
                        Insurance
                        <br />
                        <small className="text-muted d-block px-2">
                          CDW:{" "}
                          {data?.insurance.collision_damage_waiver.included
                            ? "Yes"
                            : "No"}
                        </small>
                      </button>
                    </h2>
                    <div
                      id="insurance"
                      className="accordion-collapse collapse"
                      aria-labelledby="insuranceHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        Collision Damage Waiver included with an excess of $500.
                        Super Collision Damage Waiver available for $20/day.
                      </div>
                    </div>
                  </div>

                  {/* Additional Fees */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="additionalFeesHeading">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#additionalFees"
                        aria-expanded="false"
                        aria-controls="additionalFees"
                      >
                        <FontAwesomeIcon
                          icon={faMoneyBillWave}
                          className="me-2"
                        />{" "}
                        Additional Fees
                        <br />
                        <small className="text-muted d-block px-2">
                          Driver Fee:{" "}
                          {data?.additional_fees.additional_driver.fee_per_day}{" "}
                          {data?.additional_fees.additional_driver.currency}
                        </small>
                      </button>
                    </h2>
                    <div
                      id="additionalFees"
                      className="accordion-collapse collapse"
                      aria-labelledby="additionalFeesHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        Additional driver fee: $10/day. Out-of-hours fee: $100.
                        Snow chains available for $30/day.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="securityDepositHeading"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#securityDeposit"
                        aria-expanded="false"
                        aria-controls="securityDeposit"
                      >
                        <FontAwesomeIcon icon={faShieldAlt} className="me-2" />{" "}
                        Security Deposit on Pickup
                        <br />
                        <small className="text-muted d-block px-2">
                          {data?.security_deposit} USD
                        </small>
                      </button>
                    </h2>
                    <div
                      id="securityDeposit"
                      className="accordion-collapse collapse"
                      aria-labelledby="securityDepositHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        The security deposit includes a collision damage waiver
                        with an excess amount of {data?.security_deposit} USD.
                        Please ensure you meet the requirements for coverage.
                      </div>
                    </div>
                  </div>

                  {/* Driver Requirements */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="driverRequirementsHeading"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#driverRequirements"
                        aria-expanded="false"
                        aria-controls="driverRequirements"
                      >
                        <FontAwesomeIcon icon={faUserShield} className="me-2" />{" "}
                        Driver Requirements
                        <br />
                        <small className="text-muted d-block px-2">
                          Documents:{" "}
                          {data?.driver_requirements.documents_required.join(
                            ", "
                          )}
                        </small>
                      </button>
                    </h2>
                    <div
                      id="driverRequirements"
                      className="accordion-collapse collapse"
                      aria-labelledby="driverRequirementsHeading"
                      data-bs-parent="#carTermsAccordion"
                    >
                      <div className="accordion-body">
                        Required documents: Passport, Driving License.
                        International license is not required.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                {t("search:car.close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTermsPopup;
