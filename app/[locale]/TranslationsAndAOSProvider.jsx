"use client";
import Aos from "aos";
import { Suspense, useEffect, useState } from "react";
import SrollTop from "../../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { Toaster } from "react-hot-toast";
import TranslationsProvider from "../TranslationProvider";
import initTranslations from "../i18n";
import CookieConsentModal from '@/components/cookie-policy/CookieConsentModal';

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  export default function TranslationsAndAOSProvider({ locale, namespaces, children }) {

    const [translations, setTranslations] = useState({
        t: null,
        resources: null,
      });
    
      useEffect(() => {
        // Fetch translations
        const fetchTranslations = async () => {
          const { t, resources } = await initTranslations(locale, namespaces);
          setTranslations({ t, resources });
        };
        fetchTranslations();
    
        // Initialize AOS
        Aos.init({ duration: 1200, once: true });
      }, [locale]);
    
      return (
        <TranslationsProvider resources={translations.resources} locale={locale} namespaces={namespaces}>
          <Provider store={store}>
            {children}
            <Toaster />
          </Provider>
          <CookieConsentModal />
        </TranslationsProvider>
        
      );
  }
