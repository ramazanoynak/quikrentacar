"use client";

import { useGetLocationSuggestionsQuery } from "@/redux/queries/location";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useTranslation } from "react-i18next";

const getTypeLabel = (item) => {
  // You can customize this based on the actual data returned
  if (item.type === "airport") return "Airport";
  if (item.type === "city") return "City";
  // ... any other mapping you want
  return "Place";
};

const PickUpLocation = ({ formik }) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [debouncedSearchValue] = useDebounce(searchValue, 300);

  const { data, isLoading } = useGetLocationSuggestionsQuery(
    debouncedSearchValue,
    {
      skip: !debouncedSearchValue.trim(),
    }
  );

  const locationSearchContent = data?.results;

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    formik.setFieldValue("pickUpLocation", JSON.stringify(item));
  };

  return (
    <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
      {/* The trigger area */}
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">
          {t("home:hero.searchBar.pickup_location")}
        </h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <input
            autoComplete="off"
            type="search"
            name="pickUpLocation"
            placeholder="City or Airport"
            className="js-search js-dd-focus"
            value={searchValue}
            onBlur={formik.handleBlur}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {/* Formik error display */}
        {formik.errors.pickUpLocation && formik.touched.pickUpLocation && (
          <div className="text-danger">{formik.errors.pickUpLocation}</div>
        )}
      </div>

      {/* The dropdown menu */}
      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          {/* ARIA: use role="listbox" */}
          <ul
            className="y-gap-5 js-results"
            role="listbox"
            aria-label="Pickup location suggestions"
          >
            {isLoading && <li className="px-20 py-15">Loading...</li>}
            {!isLoading &&
              locationSearchContent?.map((item) => {
                const isSelected = selectedItem && selectedItem.id === item.id;
                return (
                  <li
                    className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                      isSelected ? "active" : ""
                    }`}
                    key={item.id}
                    role="option"
                    aria-selected={isSelected ? "true" : "false"}
                    onClick={() => handleOptionClick(item)}
                  >
                    <div className="d-flex">
                      {/* Optional icon */}
                      <div className="icon-location-2 text-light-1 text-20 pt-4" />

                      <div className="ml-10">
                        {/* Badge row + name */}
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="badge px-2 py-1 text-12 fw-600 rounded-1"
                            style={{
                              backgroundColor:
                                item.type === "airport"
                                  ? "#EBF8FF"
                                  : item.type === "city"
                                  ? "#F0FFF4"
                                  : "#F3F0FF",
                              color:
                                item.type === "airport"
                                  ? "#3182CE"
                                  : item.placeType === "city"
                                  ? "#38A169"
                                  : "#6B46C1",
                            }}
                          >
                            {getTypeLabel(item)}
                          </span>
                          <div className="text-15 lh-12 fw-500 js-search-option-target">
                            {item.name}
                          </div>
                        </div>

                        {/* Subtext (e.g. address) */}
                        <div className="text-14 lh-12 text-light-1 mt-5">
                          {item.address}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PickUpLocation;


// "use client";

// import { useGetLocationSuggestionsQuery } from "@/redux/queries/location";
// import { useState } from "react";
// import { useDebounce } from "use-debounce";
// import { useTranslation } from "react-i18next";
// const PickUpLocation = ({ formik }) => {
//   const { t } = useTranslation();

//   const [searchValue, setSearchValue] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [debouncedSearchValue] = useDebounce(searchValue, 300);

//   const { data, isLoading } = useGetLocationSuggestionsQuery(
//     debouncedSearchValue,
//     {
//       skip: !debouncedSearchValue.trim(),
//     }
//   );

//   const locationSearchContent = data?.results;

//   const handleOptionClick = (item) => {
//     setSearchValue(item.name);
//     setSelectedItem(item);
//     formik.setFieldValue("pickUpLocation", JSON.stringify(item));
//   };
 
//   return (
//     <>
//       <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
//         <div
//           data-bs-toggle="dropdown"
//           data-bs-auto-close="true"
//           data-bs-offset="0,22"
//         >
//           <h4 className="text-15 fw-500 ls-2 lh-16">{t("home:hero.searchBar.pickup_location")}</h4>
//           <div className="text-15 text-light-1 ls-2 lh-16">
//             <input
//               autoComplete="off"
//               type="search"
//               name="pickUpLocation"
//               placeholder="City or Airport"
//               className="js-search js-dd-focus"
//               value={searchValue}
//               onBlur={formik.handleBlur}
//               onChange={(e) => setSearchValue(e.target.value)}
//             />
//           </div>
//           {formik.errors.pickUpLocation && formik.touched.pickUpLocation && (
//             <>
//               <div className="text-danger">{formik.errors.pickUpLocation}</div>
//             </>
//           )}
//         </div>

//         <div className="shadow-2 dropdown-menu min-width-400">
//           <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
//             <ul className="y-gap-5 js-results">
//               {isLoading
//                 ? "Loading..."
//                 : locationSearchContent?.map((item) => (
//                     <li
//                       className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
//                         selectedItem && selectedItem.id === item.id
//                           ? "active"
//                           : ""
//                       }`}
//                       key={item.id}
//                       role="button"
//                       onClick={() => handleOptionClick(item)}
//                     >
//                       <div className="d-flex">
//                         <div className="icon-location-2 text-light-1 text-20 pt-4" />
//                         <div className="ml-10">
//                           <div className="text-15 lh-12 fw-500 js-search-option-target">
//                             {item.name}
//                           </div>
//                           <div className="text-14 lh-12 text-light-1 mt-5">
//                             {item.address}
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//             </ul>
//           </div>
//         </div> 
//       </div>
//     </>
//   );
// };

// export default PickUpLocation;
