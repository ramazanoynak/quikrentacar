import { useTranslation } from "react-i18next";
import Social from "../../common/social/Social";

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <a
                href="https://themeforest.net/user/ib-themes"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                QuickRentACar.com
              </a>
              {t("home:footer.all_rights_reserved")}

              {"  "}Powered by {"  "}&nbsp;
              <a
                href="https://smartlifeaitech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-2 underline"
              ><span> </span> Smart Life AI Tech Limited
              </a>
            </div>
 
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-15">
              <a href="/privacy-policy">{t("home:footer.privacy")}</a>
              <a href="/terms-and-conditions">{t("home:footer.terms")}</a>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <button className="d-flex items-center text-14 fw-500 text-white mr-10">
                <i className="icon-globe text-16 mr-10" />
                <span className="underline">English (US)</span>
              </button>
              <button className="d-flex items-center text-14 fw-500 text-white">
                <i className="icon-usd text-16 mr-10" />
                <span className="underline">USD</span>
              </button>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              {/* <Social /> */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
