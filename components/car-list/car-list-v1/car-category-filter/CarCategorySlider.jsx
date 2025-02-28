"use client";

import React, { useState } from "react";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation'; // If you want navigation buttons
// import { Navigation } from 'swiper';
//import { carCategories } from '../data/carCategories';
// Example category data (mimics your HTML)

// Import the carousel CSS (important!)

import styles from "./CarCategory.scss"; // Create a CSS Module for styling

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CUSTOM ARROWS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const CarCategorySlider = ({ filters, handleFilters }) => {
  const { t } = useTranslation();
  const carCategories = [
    {
      id: "idBoxMINI",
      title: t("search:categories.small"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_C47.jpg",
      price: "49.41 €",
      filterKey: "mini",
    },
    {
      id: "idBoxCOMP",
      title: t("search:categories.medium_cars"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_C04.jpg",
      price: "46.49 €",
      filterKey: "comp",
    },
    {
      id: "idBoxFAMI",
      title: t("search:categories.large_cars"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_F02.jpg",
      price: "48.46 €",
      filterKey: "fami",
    },
    {
      id: "idBoxESTA",
      title: t("search:categories.estate_cars"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_S01.jpg",
      price: "85.60 €",
      filterKey: "esta",
    },
    {
      id: "idBoxSUVS",
      title: t("search:categories.suv"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_F24.jpg",
      price: "64.84 €",
      filterKey: "suvs",
    },
    {
      id: "idBoxVANS",
      title: t("search:categories.people_carriers"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_M05.jpg",
      price: "229.49 €",
      filterKey: "vans",
    },
    {
      id: "idBoxAUTO",
      title: t("search:categories.automatic"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_A32.jpg",
      price: "46.49 €",
      filterKey: "auto",
    },
    {
      id: "idBoxLUXU",
      title: t("search:categories.premium"),
      imgUrl:
        "https://quikrentacar.s3.eu-central-1.amazonaws.com/cars/car_J25.jpg",
      price: "163.26 €",
      filterKey: "luxu",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (filterKey) => {
    setActiveCategory(filterKey);
    handleFilters("category", filterKey);
  };

  function SampleNextArrow(props) {
    const { className, onClick, style } = props;
    return (
      <button
        className={`${className} custom-arrow next-arrow`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "14px",
          cursor: "pointer",
          zIndex: 2, // Ensure it's above content
        }}
        onClick={onClick}
        aria-label="Next"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick, style } = props;
    return (
      <button
        className={`${className} custom-arrow prev-arrow`}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "14px",
          cursor: "pointer",
          zIndex: 2, // Ensure it's above content
        }}
        onClick={onClick}
        aria-label="Previous"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  }

  // react-slick settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className=" jcarousel-wrapper float_box">
      <Slider {...sliderSettings}>
        {carCategories.map((car) => (
          <div key={car.id} style={{ cursor: "pointer" }}>
            <div
              className={`smallBoxContainer ${
                activeCategory === car.filterKey ? "active" : ""
              }`}
              onClick={() => handleClick(car.filterKey)}
            >
              <div className="carDest">
                <h3>{car.title}</h3>
                <div className="thbCarDest">
                  <img src={car.imgUrl} alt={car.title} />
                </div>
              </div>
              <div className="nfoDest">
                from <span className="nfoPriceDest">{car.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarCategorySlider;
