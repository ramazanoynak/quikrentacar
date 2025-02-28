import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_8/page";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationProvider";

// export const metadata = {
//   title: "Quick Rent A Car",
//   description: "Quick Rent A Car - Rent Cars with ease",
// };

export default async function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
