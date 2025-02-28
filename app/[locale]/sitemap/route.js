import { NextResponse } from 'next/server';
import seoData from '@/public/seo-content.json';

export async function GET() {
  const baseUrl = 'https://quikrentacar.com';

  // Collect all URLs in an array of strings
  const urls = [];

  // (Optional) Add your homepage (if you want root "/" in the sitemap)
  urls.push(`<url><loc>${baseUrl}</loc></url>`);

  // Loop over each locale in seoData
  for (const localeKey of Object.keys(seoData)) {
    // Add top-level locale page (e.g. /en, /fr)
    const localeUrl = `${baseUrl}/${localeKey}`;
    urls.push(`<url><loc>${localeUrl}</loc></url>`);

    // Grab the "cities" object for this locale
    const citiesObj = seoData[localeKey];
    if (!citiesObj) continue; // If no city object, skip

    // Loop over each city key
    for (const cityKey of Object.keys(citiesObj)) {
      const cityData = citiesObj[cityKey];
      if (!cityData?.slug) continue;

      // e.g. /en/liverpool-car-rental
      const cityUrl = `${baseUrl}/${localeKey}/${cityData.slug}`;
      urls.push(`<url><loc>${cityUrl}</loc></url>`);
    }
  }

  // Build the XML as a string
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >
    ${urls.join('\n')}
  </urlset>`;

  // Return the sitemap as XML
  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      // Cache if desired (e.g. daily)
      'Cache-Control': 'max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
