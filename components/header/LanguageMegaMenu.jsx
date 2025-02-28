"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

const LanguageMegaMenu = ({ textClass }) => {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = [
    {
      id: 0,
      language: "English(UK)",
      country: "United Kingdom",
      languageCode: "en",
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    },
    {
      id: 1,
      language: "English(US)",
      country: "United States",
      languageCode: "us",
      flag:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"
    },
    {
      id: 2,
      language: "Türkçe",
      country: "Türkiye",
      languageCode: "tr",
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    },
    {
      id: 3,
      language: "Français",
      country: "France",
      languageCode: "fr",
      flag:"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
    },
    {
      id: 4,
      language: "Español",
      country: "Spain",
      languageCode: "es",
      flag:"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
    },
    {
      id: 5,
      language: "Italiano",
      country: "Italy",
      languageCode: "it",
      flag:"https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
      id: 6,
      language: "Deutsch",
      country: "Germany",
      languageCode: "de",
      flag:"https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
    },
    {
      id: 7,
      language: "Português",
      country: "Portugal",
      languageCode: "pt",
      flag:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    },
    {
      id: 8,
      language: "Русский",
      country: "Russia",
      languageCode: "ru",
      flag:"https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
    },
    {
      id: 9,
      language: "Svenska",
      country: "Sweden",
      languageCode: "sv",
      flag:"https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
    },
    {
      id: 10,
      language: "Nederlands",
      country: "Netherlands",
      languageCode: "nl",
      flag:"https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
    },
    {
      id: 11,
      language: "Polski",
      country: "Poland",
      languageCode: "pl",
      flag:"https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
    },
    {
      id: 12,
      language: "简体中文",
      country: "China",
      languageCode: "zh",
      flag:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
    }
    // Add more languages as needed 
  ];

  // Initialize selectedCurrency with the current locale's flag
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    return languageContent.find((item) => item.languageCode === currentLocale) || languageContent[0];
  });

  const handleItemClick = (item) => {
    setSelectedCurrency(item); // Update the selected currency/flag
    setClick(false);

    const newLocale = item.languageCode;

    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Extract current query parameters
    const currentSearchParams = new URLSearchParams(window.location.search);

    // Redirect to the new locale path with the query parameters
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname + "?" + currentSearchParams.toString());
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`) +
          "?" +
          currentSearchParams.toString()
      );
    }

    router.refresh();
  };

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <Image
            width={30}
            height={30}
            style={{ borderRadius: "0" }}
            src={selectedCurrency.flag} // Use the selected flag
            alt={selectedCurrency.language}
            className="rounded-full mr-10"
          />
          <span className="js-language-mainTitle">{selectedCurrency.language}</span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">
              {t("home:navbar.select_your_language")}
            </div>
            {/* End title */}
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End close button */}
          </div>
          {/* End flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency?.id === item.id ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.country}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import i18nConfig from "@/i18nConfig";

// const LanguageMegaMenu = ({ textClass }) => {
//   const { i18n, t } = useTranslation();
//   const currentLocale = i18n.language;
//   const router = useRouter();
//   const currentPathname = usePathname();

//   const [click, setClick] = useState(false);
//   const handleCurrency = () => setClick((prevState) => !prevState);

//   const languageContent = [
//     {
//       id: 1,
//       language: "English",
//       country: "United Kingdom",
//       languageCode: "en",
//       flag:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
//     },
//     { id: 2, 
//       language: "Türkçe", 
//       country: "Türkiye", 
//       languageCode: "tr",
//       flag:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
//     // { id: 3, language: "Español", country: "España" },
//     // { id: 4, language: "Français", country: "France" },
//     // { id: 5, language: "Italiano", country: "Italia" },
//     // { id: 6, language: "Dari, Pashto", country: "Afghanistan" },
//     // { id: 7, language: "Albanian", country: "Albania" },
//     // { id: 8, language: "Arabic, Berber", country: "	Algeria" },
//     // { id: 9, language: "Catalan", country: "Andorra" },
//     // { id: 10, language: "Kongo, Portuguese	", country: "Angola" },
//     // { id: 11, language: "Spanish", country: "Argentina" },
//     // { id: 12, language: "Armenian", country: "Armenia" },
//     // { id: 13, language: "English", country: "Australia" },
//     // { id: 14, language: "German", country: "Austria" },
//     // { id: 15, language: "Azerbaijani", country: "Azerbaijan" },
//     // { id: 16, language: "Bengali", country: "Bangladesh" },
//     // { id: 17, language: "English", country: "Barbados" },
//     // { id: 18, language: "Belarusian", country: "Belarus" },
//     // { id: 19, language: "Dutch, French", country: "Belgium" },
//     // { id: 20, language: "English", country: "Belize" },
//     // { id: 21, language: "English", country: "UAE" },
//   ];

//   const [selectedCurrency, setSelectedCurrency] = useState(languageContent[20]);

//   const defaultLocale = "en"; // Define your default locale

//   const handleItemClick = (item) => {
//     setSelectedCurrency(item);
//     setClick(false);

//     const newLocale = item.languageCode;

//     // set cookie for next-i18n-router
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//     // Extract current query parameters
//     const currentSearchParams = new URLSearchParams(window.location.search);

//     // Redirect to the new locale path with the query parameters
//     if (
//       currentLocale === i18nConfig.defaultLocale &&
//       !i18nConfig.prefixDefault
//     ) {
//       router.push(
//         "/" + newLocale + currentPathname + "?" + currentSearchParams.toString()
//       );
//     } else {
//       router.push(
//         currentPathname.replace(`/${currentLocale}`, `/${newLocale}`) +
//           "?" +
//           currentSearchParams.toString()
//       );
//     }
 
//     router.refresh();
//   };

//   return (
//     <>
//       {/* Start language currency Selector */}
//       <div className="col-auto">
//         <button
//           className={`d-flex items-center text-14 ${textClass}`}
//           onClick={handleCurrency}
//         >
//           <Image
//             width={30}
//             height={30}
//             style={{ borderRadius: "0" }}
//             src={selectedCurrency.flag} // Use the selected flag
//             alt={selectedCurrency.country}
//             className="rounded-full mr-10"
//           />
//           <span className="js-language-mainTitle">
//             {" "}
//             {selectedCurrency?.country}
//           </span>
//           <i className="icon-chevron-sm-down text-7 ml-15" />
//         </button>
//       </div>
//       {/* End language currency Selector */}

//       <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
//         <div className="currencyMenu__bg" onClick={handleCurrency}></div>
//         <div className="langMenu__content bg-white rounded-4">
//           <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
//             <div className="text-20 fw-500 lh-15">
//               {t("home:navbar.select_your_language")}
//             </div>
//             {/* End title */}
//             <button className="pointer" onClick={handleCurrency}>
//               <i className="icon-close" />
//             </button>
//             {/* End colse button */}
//           </div>
//           {/* Emd flex-wrapper */}
//           <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
//             {languageContent.map((item) => (
//               <li
//                 className={`modalGrid__item js-item ${
//                   selectedCurrency?.country === item.country ? "active" : ""
//                 }`}
//                 key={item.id}
//                 onClick={() => handleItemClick(item)}
//               >
//                 <div className="py-10 px-15 sm:px-5 sm:py-5">
//                   <div className="text-15 lh-15 fw-500 text-dark-1">
//                     {item.language}
//                   </div>
//                   <div className="text-14 lh-15 mt-5 js-title">
//                     {item.language}
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* End langMenu */}
//       </div>
//     </>
//   );
// };

// export default LanguageMegaMenu;
