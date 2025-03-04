"use client";
import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Subscribe from "./Subscribe";

const index = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer -type-3 text-white bg-dark-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">
                {t("home:footer.contact_us")}
              </h5>
              <ContactInfo t={t} />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-4 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">
                {t("home:footer.get_updates_and_more")}
              </h5>
              <Subscribe />
            </div>
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
