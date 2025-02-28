"use client";
import { useState } from "react";

const TopHeaderFilter = ({ filters, handleFilters }) => {
  const [selectedSort, setSelectedSort] = useState(null);

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    handleFilters("sortBy", sortOption);
  };
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          {/* <div className="text-18">
            <span className="fw-500">3,269 properties</span> in Europe
          </div> */}
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-auto">
              <>
                <div className="dropdown">
                  <button
                    className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1 dropdown-toggle w-100"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon-up-down text-14 mr-10" />
                    Sort
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className={`dropdown-item ${
                          selectedSort === "lowest" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => handleSortChange("asc")}
                      >
                        Price (lowest first)
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${
                          selectedSort === "highest" ? "active" : ""
                        }`}
                        href="#"
                        onClick={() => handleSortChange("desc")}
                      >
                        Price (highest first)
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            </div>
            {/* End .col */}

            <div className="col-auto d-none xl:d-block">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
              >
                <i className="icon-up-down text-14 mr-10" />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
