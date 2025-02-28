import Link from "next/link";
import { useTranslation } from "react-i18next";
// import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  const { t } = useTranslation();

  const footerContent = [
    {
      id: 1,
      title: "Quick Rent A Car",
      menuList: [
        {
          name: t("home:footer.contact_us"),
          routerPath: "mailto:ramazan@quikrentacar.com",
        },
        { name: t("common:privacy_policy"), routerPath: "/privacy-policy" },
        {
          name: t("common:terms_and_conditions"),
          routerPath: "/terms-and-conditions",
        },
      ],
    },
    {
      id: 2,
      title: t("home:footer.other_services"),
      menuList: [
        { name: t("home:footer.rent_a_car"), routerPath: "#search" },
        { name: "FAQ", routerPath: "#Faq" },
      ],
    },
  ];

  return (
    <>
      {footerContent.map((item) => (
        <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
