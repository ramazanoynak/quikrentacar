"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import SearchBoxContent from "../../hero/hero-8/SearchBoxContent";
import MobileMenu from "../MobileMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import { useTranslation } from "react-i18next";


const Header1 = () => {
  const { t } = useTranslation();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, []);
 
  return (
    <>
      {" "}
      {/* <header className={`header   ${navbar ? "is-sticky bg-white" : ""}`}> */}
      <header className={`header  is-sticky bg-white`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-50">
                <h3>QuikRentaCar</h3>
                </Link>
                {/* End
                  <img src="/img/general/logo-dark-2.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark-2.svg" alt="logo icon" /> logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    {/* <MainMenu style="text-dark-1" /> */}
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* <div className="mr-15 xxl:d-none">
                  <button
                    className="text-26 text-dark-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    <div className="icon-search"></div>
                  </button>
                </div> */}
                {/* End Search Icon */}

                <div
                  className="offcanvas offcanvas-top vh-100"
                  tabIndex={-1}
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div className="offcanvas-header position-absolute top-0 end-0">
                    <button
                      type="button"
                      className="btn-close text-reset "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  {/* End header */}
                  <SearchBoxContent />
                </div>

                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <div className="row x-gap-20 items-center xxl:d-none"></div>

                  <div className="d-flex items-center">
                    <div className="row x-gap-20 items-center xxl:d-none">
                      <CurrenctyMegaMenu textClass="text-dark-1" />
                      {/* End Megamenu for Currencty */}

                      {/* Start vertical devider*/}
                      <div className="col-auto">
                        <div className="w-1 h-20 bg-white-20" />
                      </div>
                      {/* End vertical devider*/}

                      <LanguageMegaMenu textClass="text-dark-1" />
                      {/* End Megamenu for Language */}
                    </div>
                    {/* End language and currency selector */}

                    {/* Start btn-group */}
                    <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                      <Link
                        href="/login"
                        className="button px-30 fw-400 text-14 -blue-1 bg-dark-1 h-50 text-white"
                      >
                      {t("home:navbar.list_your_cars")}

                      </Link>
                      <Link
                        href="/signup"
                        className="button px-30 fw-400 text-14 border-dark-1 -blue-1 h-50 text-dark-1 ml-20"
                      >
                      {t("home:navbar.sign_in")} / {t("home:navbar.register")}

                      </Link>
                    </div>
                    {/* End btn-group */}
                  </div>
                </div>
                {/* End btn-group */} 

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30">
                  {/* <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div> */}
                  <div>
                    {/* <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    /> */}

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Header1;
