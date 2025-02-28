"use client";
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
    }
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
  

  export default SupplierListUI;
