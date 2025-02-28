

import { GoogleAnalytics } from '@next/third-parties/google'

import TranslationsAndAOSProvider from "./TranslationsAndAOSProvider";


const namespaces = ["home", "common", "search", "auth", "booking"];

export default function RootLayout({ children, params: { locale } }) {
  // State to store translations
  // const [translations, setTranslations] = useState({
  //   t: null,
  //   resources: null,
  // });

  // // Fetch translations on component mount
  // useEffect(() => {
  //   const fetchTranslations = async () => {
  //     const { t, resources } = await initTranslations(locale, namespaces);
  //     setTranslations({ t, resources });
  //   };

  //   fetchTranslations();

  //   // Initialize AOS (animations)
  //   Aos.init({
  //     duration: 1200,
  //     once: true,
  //   });
  // }, [locale]);
  return (
    <html lang="en">

<head>
  {/* Preconnect for Performance */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap" rel="stylesheet" />
  
  {/* Favicon */}
  <link rel="icon" href="./favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Schema.org JSON-LD (Helps Google Understand the Page) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CarRental",
        "name": "Quick Rent A Car",
        "url": "https://quikrentacar.com",
        "description": "Rent a car at the best rates. Choose from a wide range of vehicles.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locale,
          "addressCountry": "United Kingdom"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1234567890",
          "contactType": "ramazan@quikrentacar.com"
        },
      }),
    }}
  />

</head>
      <body>
        <main>
        <TranslationsAndAOSProvider locale={locale} namespaces={namespaces}>
          {/* The rest of your app */}
          {children}

          {/* Cookie Consent / other global components */}
         
        </TranslationsAndAOSProvider>
          {/* <TranslationsProvider
            resources={translations.resources}
            locale={locale}
            namespaces={namespaces}
          >
            <Provider store={store}>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
              <SrollTop />
              <Toaster />
            </Provider>
          </TranslationsProvider> */}
            {/* Cookie Consent Modal */}
        {/* <CookieConsentModal /> */}
        </main>
      </body>

   <GoogleAnalytics gaId="G-LDG3VHBHJV" />

    </html>
  );
}

export const metadata = 
  {
    title: "🚗 Rent a Car | Best Car Rental Deals & Discounts",
    description: "Discover and book exceptional cars from trusted local hosts across the globe.",
    keywords: "car rental london, car rental dubai, rent a car manchester, car rental liverpool, cheap car rental paris, best car hire deals, airport car rental milan",
    openGraph: {
      title: "🚗 Rent a Car | Best Car Rental Deals",
      description: "Looking for a car rental? Get the best rates, easy booking, and top deals. Rent a car now and enjoy hassle-free travel!",
      url: "https://quikrentacar.com/en/",
      siteName: "Quik Rent a Car",
      locale:  "en" ,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "🚗 Rent a Car  | Best Car Rental Deals",
      description: "Best car rental service. Low prices, reliable vehicles, and easy booking!",
    },
    alternates: {
      canonical: "https://quikrentacar.com/en/",
    }

}
