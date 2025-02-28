"use client";

import { useGetCurrenciesQuery } from "@/redux/queries/currency";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CurrenctyMegaMenu = ({ textClass }) => {
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);
  const { data: currencies, isLoading } = useGetCurrenciesQuery();
  const router = useRouter();
  const [selectedCurrency, setSelectedCurrency] = useState({});

  useEffect(() => {

    if (localStorage.getItem("user_prefer_currency")) {

      const preferCurrency = JSON.parse(
        localStorage.getItem("user_prefer_currency")
      );

      const currencyDate = currencyContent.find(
        (item) => item.currency === preferCurrency
      );

      setSelectedCurrency(currencyDate);
    } else {
      setSelectedCurrency(currencyContent[1]);
    }
  }, []);

  const currencyContent = [
    { id: 1, name: "Euro", currency: "EUR", symbol: "€" },
    { id: 2, name: "GB Pound", currency: "GBP", symbol: "£" },
    { id: 3, name: "United States Dollar", currency: "USD", symbol: "$" },
    { id: 4, name: "United Arab Emirates Dirham", currency: "AED", symbol: "د.إ" },
    { id: 5, name: "Turkish Lira", currency: "TRY", symbol: "₺" },
    { id: 6, name: "Australian Dollar", currency: "AUD", symbol: "$" },
    { id: 23, name: "Canadian Dollar", currency: "CAD", symbol: "$" },
    { id: 8, name: "Russian Ruble", currency: "RUB", symbol: "₽" },
    { id: 7, name: "Brazilian Real", currency: "BRL", symbol: "R$" },
    { id: 9, name: "Colombian Peso", currency: "COP", symbol: "$" },
    { id: 10, name: "Omani Rial", currency: "OMR", symbol: "﷼" },
    { id: 11, name: "Indian Rupee", currency: "INR", symbol: "₹" },
    { id: 13, name: "Japanese Yen", currency: "JPY", symbol: "¥" },
    { id: 15, name: "South Korean Won", currency: "KRW", symbol: "₩" },
    { id: 16, name: "Lebanese Pound", currency: "LBP", symbol: "ل.ل" },
    { id: 19, name: "Mexican Peso", currency: "MXN", symbol: "$" },
    { id: 21, name: "Nepalese Rupee", currency: "NPR", symbol: "रू" },
    { id: 22, name: "Bulgarian Lev", currency: "BGN", symbol: "лв." },
    { id: 25, name: "Azerbaijani Manat", currency: "AZN", symbol: "₼" },
    { id: 26, name: "Chinese Yuan", currency: "CNY", symbol: "¥" }
  ];
  

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);

    localStorage.setItem("user_prefer_currency", JSON.stringify(item.currency));
    localStorage.setItem(
      "user_currency_rate",
      currencies?.rates[item.currency]
    );

    router.refresh();
  };

  return (
    <>
      {/* Start currencty dropdown wrapper */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-currencyMenu-mainTitle">
            {selectedCurrency?.currency}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-10" />
        </button>
      </div>
      {/* End currencty dropdown wrapper */}

      <div
        className={`currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`}
      >
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="currencyMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your currency</div>
            {/* End Title */}

            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* End flex wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {currencyContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency?.currency === item.currency ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.name}
                  </div>
                  <div className="text-14 lh-15 mt-5">
                    <span className="js-title">{item.currency}</span>-{" "}
                    {item.symbol}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrenctyMegaMenu;
