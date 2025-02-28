import { notFound } from "next/navigation";
import seoData from "@/public/seo-content.json";

// import Header8 from "@/components/header/header-8";
// import Footer6 from "@/components/footer/footer-6";
// import MainFilterSearchBox from "@/components/hero/hero-8/MainFilterSearchBox";
// import SupplierListUI from "@/components/common/SupplierListUI";
import styles from "@/components/hero/hero-8/hero8.scss";
import styles1 from "./city.scss";
 
import dynamic from "next/dynamic";

const MainFilterSearchBox = dynamic(
  () => import("@/components/hero/hero-8/MainFilterSearchBox"),
  { ssr: false }
);

const SupplierListUI = dynamic(
  () => import("@/components/common/SupplierListUI"),
  { ssr: false }
);

const Header8 = dynamic(
  () => import("@/components/header/header-8"),
  { ssr: false }
);

const Footer6 = dynamic(
  () => import("@/components/footer/footer-6"),
  { ssr: false }
);


// --- Page Component ---
export default function CityPage({ params }) {
  const { locale, city } = params;

  // Validate language and city
  if (!seoData[locale] || !seoData[locale][city]) {
    notFound(); // This triggers a 404
  }

  const cityData = seoData[locale][city];

  return (
    <>
      <div className="header-margin" />
      <Header8 />

      <main>
        <section className="masthead -type-8 head-top">
          <div className="masthead__bg" />
          <div className="container">
            <div className="row justify-center">
              <div className="col-xl-10">
                <div className="text-center">
                  {/* H1 Title */}
                  <h1
                    className="text-60 lg:text-40 md:text-30 text-white-1"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {cityData.h1}
                  </h1>
                  {/* Meta description snippet */}
                  <p
                    className="text-white-1 mt-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {cityData.meta_description}
                  </p>
                </div>

                <div
                  className="feature-list-container"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {/* Add any feature list if needed */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="masthead-bottom mt-80 md:mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <MainFilterSearchBox />
            {/* End Search filter box */}

            <div className="masthead-slider overflow-hidden js-masthead-slider-8">
              <SupplierListUI />

              {/* Slider Prev */}
              <div className="masthead-slider__nav -prev">
                <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-prev-active">
                  <i className="icon-arrow-left" />
                </button>
              </div>

              {/* Slider Next */}
              <div className="masthead-slider__nav -next">
                <button className="button -outline-white size-50 flex-center text-white rounded-full hero8-next-active">
                  <i className="icon-arrow-right" />
                </button>
              </div>
              {/* End Slider Nav */}
            </div>
            {/* End image slider */}
          </div>
          {/* End masthead bottom slider */}
        </section>

        <section className="layout-pt-lg layout-pb-lg">
          <div className="container">
            <div className="tabs js-tabs">
              <h2>{cityData.meta_title}</h2>
              <p>{cityData.description}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer6 />
    </>
  );
}

// --- Generate static routes for each (locale + city) combination ---
export async function generateStaticParams() {
  const paths = [];

  // Iterate over each locale in the JSON
  Object.keys(seoData).forEach((locale) => {
    // Iterate over each city in that locale
    Object.keys(seoData[locale]).forEach((cityKey) => {
      paths.push({ locale, city: cityKey });
    });
  });

  return paths;
}

// --- Generate dynamic metadata for each route ---
export async function generateMetadata({ params }) {
  const { locale, city } = params;
  const cityData = seoData[locale]?.[city];

  if (!cityData) {
    return {
      title: "404 - Not Found",
    };
  }


  // Construct canonical URL
  const baseUrl = "https://quikrentacar.com";
  const canonicalUrl = `${baseUrl}/${locale}/${cityData.slug}`;

  return {
    title: cityData.meta_title,
    description: cityData.meta_description,
    keywords: cityData.meta_keywords,
    openGraph: {
      title: cityData.meta_title,
      description: cityData.meta_description,
      url: canonicalUrl,
      siteName: "Quik Rent a Car",
      locale: locale === "en" ? "en_US" : locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cityData.meta_title,
      description: cityData.meta_description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
