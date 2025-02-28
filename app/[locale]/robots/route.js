export async function GET() {
    const baseUrl = 'https://quikrentacar.com';
  
    // Typically you allow all and just point to the sitemap
    const content = `
  User-agent: *
  Allow: /
  Sitemap: ${baseUrl}/sitemap.xml
  `;
  
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  