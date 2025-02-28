import { useTranslation } from "react-i18next";
import styles from "./BlockGuide.scss"; // Create a CSS Module for styling

const BlockGuide = () => {
  const { t } = useTranslation();
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.svg",
      title: t("home:hero.why_choose_us.card_1_title"),
      text: t("home:hero.why_choose_us.card_1_description"),
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.svg",
      title: t("home:hero.why_choose_us.card_2_title"),
      text: t("home:hero.why_choose_us.card_2_description"),
      delayAnim: "300",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.svg",
      title: t("home:hero.why_choose_us.card_3_title"),
      text: t("home:hero.why_choose_us.card_3_description"),
      delayAnim: "500",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          {/* New Card Container */}
          <div className="why-card">
            <div className="why-card__icon">
              <img
                src={item.icon}
                alt="icon"
                className="why-card__img js-lazy"
              />
            </div>
            <h4 className="why-card__title">{item.title}</h4>
            <p className="why-card__text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;