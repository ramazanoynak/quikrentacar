import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import NotFound from "@/components/common/NotFound";
import Header8 from "@/components/header/header-8";
import Footer6 from "@/components/footer/footer-6";

export const metadata = {
  title: "404 || QuikRentaCar - Search for the best car hire deals",
  description: "Discover and book exceptional cars from trusted local hosts across the globe.",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header8 />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <Footer6 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
