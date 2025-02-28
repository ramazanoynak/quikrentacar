"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";
// import {SupplierListUI } from "./SupplierListUI";
import styles from "./hero8.scss"; // Create a CSS Module for styling
import { useTranslation } from "react-i18next";

const SUPPLIERS = [
  {
    name: "Sixt",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/sixt.webp",
    link: "/suppliers/sixt",
  },
  {
    name: "Europcar",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/europcar.svg",
    link: "/suppliers/europcar",
  },
  {
    name: "Hertz",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/hertz.svg",
    link: "/suppliers/hertz",
  },
  {
    name: "Avis",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/avis.svg",
    link: "/suppliers/avis",
  },
  {
    name: "Enterprise",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/enterprise.svg",
    link: "/suppliers/enterprise",
  },
  {
    name: "Thrifty",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/thrifty.svg",
    link: "/suppliers/thrifty",
  },
  {
    name: "Alamo",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/alamo.svg",
    link: "/suppliers/alamo",
  },
  {
    name: "Dollar",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/dollar.svg",
    link: "/suppliers/dollar",
  },
  {
    name: "Greenmotion",
    logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/greenMotion.svg",
    link: "/suppliers/Greenmotion",
  },
  // { name: "Budget", logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/budget.svg",     link: "/suppliers/budget" },
  // { name: "GoldCar",     logo: "https://quikrentacar.s3.eu-central-1.amazonaws.com/suppliers/goldCar.svg",     link: "/suppliers/goldcar" },
];

const SupplierListUI = () => {
  const { t } = useTranslation();

  return (
    <section className="supplier-list-section">
      <div className="container">
        <div className="supplier-list-header">
          <h2>
          {t("home:hero.searchBar.we_connect_you")} <mark> {t("home:hero.searchBar.trusted_companies")}</mark>
          </h2>
          {/* <a href="/suppliers" className="view-all-suppliers">
            View all suppliers 
            <i className="icon-arrow-right" />
          </a> */}
        </div>

        <div className="supplier-list-logos">
          {/* Option A: Simple flex row (wrap) */}
          {SUPPLIERS.map((supplier) => (
            <a
              key={supplier.name}
              href="#"
              className="supplier-logo-item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={supplier.logo} alt={supplier.name} />
            </a>
          ))}

          {/* 
            OR Option B: Use Swiper for a carousel of logos:
            <Swiper slidesPerView={4} loop={true} spaceBetween={20} navigation>
              {SUPPLIERS.map((supplier) => (
                <SwiperSlide key={supplier.name}>
                  <a href={supplier.link} className="supplier-logo-item">
                    <img src={supplier.logo} alt={supplier.name} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          */}
        </div>

        <div className="supplier-list-footer">
          {/* <a href="/suppliers" className="view-all-suppliers">
            View all suppliers 
            <i className="icon-arrow-right" />
          </a> */}
        </div>
      </div>
    </section>
  );
};
const index = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="masthead -type-8">
        <div className="masthead__bg">
          {/* <img
            src="/img/masthead/8/bg.png"
            alt="image"
            className="col-12 h-full object-cover"
          /> */}
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-10">
              <div className="text-center">
                <h1
                  className="text-60 lg:text-40 md:text-30 text-white-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                   {t("home:hero.title")}
                </h1>
                <p
                  className="text-white-1 mt-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                {t("home:hero.subtitle")}
                </p>
              </div>

              {/* -- FEATURE LIST START -- */}
              <div
                className="feature-list-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <ul className="feature-list">
                  <li>
                    <i className="icon-check"></i>
                    {t("home:hero.no_hidden_fee")}
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    {t("home:hero.fee_cancellation")}
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    {t("home:hero.24_hours_support")}
                  </li>
                  <li>
                    <i className="icon-check"></i>
                    {t("home:hero.manage_booking_easily")}
                  </li>
                </ul>
              </div>
              {/* -- FEATURE LIST END -- */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div
          className="masthead-bottom mt-80 md:mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <MainFilterSearchBox />
          {/* End Search filter box */}

          <div className="masthead-slider overflow-hidden js-masthead-slider-8">
            <SupplierListUI />

            {/* <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{
                nextEl: ".hero8-next-active",
                prevEl: ".hero8-prev-active",
              }}
            >
              <SwiperSlide>

                <img src="/img/masthead/8/1.png" alt="image" />
              </SwiperSlide>
            </Swiper> */}

            {/* Start Slider Prev and Next */}
            <div className="masthead-slider__nav -prev">
              <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-prev-active">
                <i className="icon-arrow-left" />
              </button>
            </div>

            <div className="masthead-slider__nav -next">
              <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-next-active">
                <i className="icon-arrow-right" />
              </button>
            </div>
            {/* End Slider Prev and Next */}
          </div>
          {/* End image slider */}
        </div>
        {/* End masthead bottom slider */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
