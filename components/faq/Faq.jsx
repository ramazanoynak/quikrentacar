

import { useTranslation } from "react-i18next";


// export default Faq;
const Faq = () => {
  const { t } = useTranslation();
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: t("home:freqently_asked_questions.q1"),
      content: t("home:freqently_asked_questions.q1_answer"),
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: t("home:freqently_asked_questions.q2"),
      content: t("home:freqently_asked_questions.q2_answer"),
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: t("home:freqently_asked_questions.q3"),
      content: t("home:freqently_asked_questions.q3_answer.title"),
      list: [
        t("home:freqently_asked_questions.q3_answer.subtitle1"),
        t("home:freqently_asked_questions.q3_answer.subtitle2"),
        t("home:freqently_asked_questions.q3_answer.subtitle3"),
      ],
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: t("home:freqently_asked_questions.q4"),
      content: t("home:freqently_asked_questions.q4_answer"),
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: t("home:freqently_asked_questions.q5"),
      content: t("home:freqently_asked_questions.q5_answer"),
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: t("home:freqently_asked_questions.q6"),
      content: t("home:freqently_asked_questions.q6_answer"),
    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: t("home:freqently_asked_questions.q7"),
      content: t("home:freqently_asked_questions.q7_answer"),
    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: t("home:freqently_asked_questions.q8"),
      content: t("home:freqently_asked_questions.q8_answer"),
    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: t("home:freqently_asked_questions.q9"),
      content: t("home:freqently_asked_questions.q9_answer"),
    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: t("home:freqently_asked_questions.q10"),
      content: t("home:freqently_asked_questions.q10_answer"),
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: t("home:freqently_asked_questions.q11"),
      content: t("home:freqently_asked_questions.q11_answer"),
    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title: t("home:freqently_asked_questions.q12"),
      content: t("home:freqently_asked_questions.q12_answer"),
    },
    {
      id: 13,
      collapseTarget: "Thirteen",
      title: t("home:freqently_asked_questions.q13"),
      content: t("home:freqently_asked_questions.q13_answer"),
    },
    {
      id: 14,
      collapseTarget: "Fourteen",
      title: t("home:freqently_asked_questions.q14"),
      content: t("home:freqently_asked_questions.q14_answer"),
    },
    {
      id: 15,
      collapseTarget: "Fifteen",
      title: t("home:freqently_asked_questions.q15"),
      content: t("home:freqently_asked_questions.q15_answer"),
    },
    {
      id: 16,
      collapseTarget: "Sixteen",
      title: t("home:freqently_asked_questions.q16"),
      content: t("home:freqently_asked_questions.q16_answer"),
    },
    {
      id: 17,
      collapseTarget: "Seventeen",
      title: t("home:freqently_asked_questions.q17"),
      content: t("home:freqently_asked_questions.q17_answer"),
    },
    {
      id: 18,
      collapseTarget: "Eighteen",
      title: t("home:freqently_asked_questions.q18"),
      content: t("home:freqently_asked_questions.q18_answer"),
    },
    {
      id: 19,
      collapseTarget: "Nineteen",
      title: t("home:freqently_asked_questions.q19"),
      content: t("home:freqently_asked_questions.q19_answer"),
    },
    {
      id: 20,
      collapseTarget: "Twenty",
      title: t("home:freqently_asked_questions.q20"),
      content: t("home:freqently_asked_questions.q20_answer"),
    },
  ];

  return (
    <section className="faq" id="Faq">
      <div className="row gap-2 justify-center">
        {faqContent.map((item) => (
          <div className="col-md-5" key={item.id}>
            <div className="accordion__item px-20 py-20 border-light rounded-4">
              <div
                className="accordion__button d-flex items-center"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.collapseTarget}`}
              >
                <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                  <i className="icon-plus" />
                  <i className="icon-minus" />
                </div>
                <div className="button text-dark-1 text-start">
                  {item.title}
                </div>
              </div>
              {/* End accordion button */}

              <div
                className="accordion-collapse collapse"
                id={item.collapseTarget}
                data-bs-parent="#Faq1"
              >
                <div className="pt-15 pl-60">
                  {item.id === 3 ? (
                    <>
                      <p className="text-15">{item.content}</p>
                      <ul>
                        {item.list.map((item, index) => (
                          <li key={index} className="text-15">
                            <p>● {item}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-15">{item.content}</p>
                  )}
                </div>
              </div>
              {/* End accordion conent */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

