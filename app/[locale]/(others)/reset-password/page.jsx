import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/header-8";
import DefaultFooter from "@/components/footer/footer-6";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import ForgetPasswordForm from "@/components/common/ForgetPasswordForm";
import ResetPasswordForm from "@/components/common/resetPasswordForm";

export const metadata = {
  title: "Sign Up || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const ForgetPassword = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <ResetPasswordForm />
                {/* End ResetPasswordForm */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <CallToActions /> */}
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ForgetPassword), { ssr: false });
