"use client";
import dynamic from "next/dynamic";
import Footer6 from "@/components/footer/footer-6";
import Header8 from "@/components/header/header-8";
import Header2 from "@/components/header/header-2";
import Hero8 from "@/components/hero/hero-8";
import BlockGuide from "@/components/home/home-8/BlockGuide";
import Testimonial from "@/components/testimonial/Testimonial";
import CounterDark from "@/components/counter/CounterDark";
import Brand from "@/components/brand/Brand";
import PopularCars from "@/components/home/home-8/PopularCars";
import TopDestinations from "@/components/home/home-8/TopDestinations";
import Counter4 from "@/components/counter/Counter4";
import Faq from "@/components/faq/Faq";
import AppBanner from "@/components/home/home-8/AppBanner";
import Blog from "@/components/home/home-8/Blog";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./home8.scss"; 

// export const metadata = {
//   title: "Home-8 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const home_8 = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* End Page Title */}

      <Header8 />
      {/* End Header 8 */}

      <Hero8 />
      {/* End Hero 8 */}

      <section className="layout-pt-lg layout-pb-md why-choose-us-section">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  {t("home:hero.why_choose_us.title")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t("home:hero.why_choose_us.description")}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Coose Us */}

      {/* <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Explore Our Most Popular Cars — Perfect for Every Journey,
                  Anywhere You Go.
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <PopularCars />
          </div>
        </div>
      </section> */}
      {/* Popular Car Hire Sections */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations in UK</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div> */}
      {/* End .row */}

      {/* <div className="row y-gap-30 pt-40">
            <TopDestinations />
          </div> */}
      {/* End .row */}
      {/* </div> */}
      {/* End .container */}
      {/* </section> */}
      {/* Top Destinations Sections */}

      {/* <section className="layout-pt-lg layout-pb-lg bg-dark-1">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle text-white">
                <h2 className="sectionTitle__title">Customer Reviews</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>


          <div className="overflow-hidden pt-60 lg:pt-40 sm:pt-30">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <CounterDark />
            </div>

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
            
          </div>
          
        </div>

      </section> */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-5 col-lg-6">
              <h2 className="text-30 fw-600">
                GoTrip is a World Leading Car Hire Booking Platform
              </h2>
              <p className="mt-40 lg:mt-20">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>

              <div className="d-inline-block mt-40 lg:mt-20">
                <a href="#" className="button -md -blue-1 bg-dark-1 text-white">
                  Learn More <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="shadow-4">
                <div className="row border-center">
                  <Counter4 />
                </div>
              </div>
            </div>
           
          </div>

        </div>
        
      </section> */}
      {/* End testimonial section */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="/blog-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-dark-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>

          </div>
         

          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
         
        </div>
        
      </section> */}

      {/* <AppBanner /> */}
      {/* End AppBanner section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  {t("home:freqently_asked_questions.title")}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {t("home:freqently_asked_questions.description")}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <Footer6 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_8), { ssr: false });
