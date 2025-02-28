// app/locations/[city]/head.jsx
import { cities } from '@/cityData';

export default function Head({ params }) {
  const cityData = cities.find((c) => c.slug === params.city);

  if (!cityData) {
    return (
      <>
        <title>City not found | QuikRentACar</title>
      </>
    );
  }
 
  return (
    <>
      <title>{cityData.title}</title>
      <meta name="description" content={cityData.description} />
      <meta name="keywords" content={cityData.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={cityData.title} />
      <meta property="og:description" content={cityData.description} />
      <meta property="og:url" content={`https://www.quikrentacar.com/locations/${cityData.slug}`} />
      <meta property="og:site_name" content="QuikRentACar" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={cityData.title} />
      <meta name="twitter:description" content={cityData.description} />
    </>
  );
}
