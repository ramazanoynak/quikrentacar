"use client";
import CallToActions from "@/components/common/CallToActions";
// import Header11 from "@/components/header/header-11";
import DefaultHeader from "@/components/header/header-8";
import DefaultFooter from "@/components/footer/footer-6";
import TopHeaderFilter from "@/components/car-list/car-list-v1/TopHeaderFilter";
import Pagination from "@/components/car-list/common/Pagination";
import Sidebar from "@/components/car-list/car-list-v1/Sidebar";
import CarPropertes from "@/components/car-list/car-list-v1/CarPropertes";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useSearchCarsQuery } from "@/redux/queries/cars";
import { GridLoader, HashLoader } from "react-spinners";
import Preloader from "@/components/suppliersLoader/Preloader";
import CarCategorySlider from "@/components/car-list/car-list-v1/car-category-filter/CarCategorySlider";
import MainFilterSearchBox from "@/components/hero/hero-8/MainFilterSearchBox";

const index = () => {
  
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    fuel_type: [],
  });

  const handleFilters = (key, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (!value && !Array.isArray(updatedFilters[key])) {
        // If the value is empty, remove the filter
        delete updatedFilters[key];
      } else {
        // Check if the filter key is already an array
        if (Array.isArray(updatedFilters[key])) {
          // If it's an array, add or remove the value accordingly
          if (value && !updatedFilters[key].includes(value)) {
            // Add value to the array if it's not null/falsy and not already in the array
            updatedFilters[key].push(value);
          } else if (updatedFilters[key].includes(value)) {
            // If value is falsy (null/empty), remove it from the array
            updatedFilters[key] = updatedFilters[key].filter(
              (item) => item !== value
            );
          }
        } else {
          // If it's not an array, just set the value (overwrite if exists)
          updatedFilters[key] = value;
        }
      }

      return updatedFilters;
    });
  };

  // Convert the searchParams object to a plain object
  const query = Object.fromEntries(searchParams.entries());

  const {
    data: carsData,
    isLoading,
    isFetching,
  } = useSearchCarsQuery({
    ...query,
    filter_criteria: JSON.stringify(filters),
  });
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}
      {/* Top SearchBanner */}

      {isLoading ? (
        <div className="p-5 d-flex flex-column justify-content-center items-center">
          <Preloader />
        </div>
      ) : (
        <>
          <section className="pt-60">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    {/* <h1 className="text-30 fw-600">Dubai Rental Cars</h1> */}
                  </div>
                  {/* End text-center */}
                  <MainFilterSearchBox isSearchPage={true} userQuery={query} />
                </div>
                {/* End col-12 */}
              </div>
            </div>
          </section>
          <section className="layout-pt-md layout-pb-lg">
            <div className="container">
              <div className="row y-gap-30">
                <div className="col-xl-3">
                  <aside className="sidebar y-gap-40 xl:d-none">
                    <Sidebar filters={filters} handleFilters={handleFilters} />
                  </aside>
                  {/* End sidebar for desktop */}

                  <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="listingSidebar"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasLabel">
                        Filter Hotels
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    {/* End offcanvas header */}

                    <div className="offcanvas-body">
                      <aside className="sidebar y-gap-40  xl:d-block">
                        <Sidebar
                          filters={filters}
                          handleFilters={handleFilters}
                        />
                      </aside>
                    </div>
                    {/* End offcanvas body */}
                  </div>
                  {/* End mobile menu sidebar */}
                </div>
                {/* End col */}

                <div className="col-xl-9 ">
                  <TopHeaderFilter
                    filters={filters}
                    handleFilters={handleFilters}
                  />
                  <div className="my-3">
                    <CarCategorySlider
                      filters={filters}
                      handleFilters={handleFilters}
                    />
                  </div>
                  <div className="mt-30"></div>
                  {/* End mt--30 */}
                  <div className="row y-gap-30">
                    <Suspense fallback={<div>Loading...</div>}>
                      <CarPropertes
                        query={query}
                        carsData={carsData}
                        isFetching={isFetching}
                      />
                    </Suspense>
                  </div>
                  {/* End .row */}
                  {/* <Pagination /> */}
                </div>
                {/* End .col for right content */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
        </>
      )}
      {/* End layout for listing sidebar and content */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
