import ChoiceCards from "@/components/choiceCards";
import DownloadTheApp from "@/components/download-the-app";
import Hero from "@/components/hero";
import HowItWorks from "@/components/ui/how-it-works";

const page = () => {
  return (
    <>
      <Hero />
      <ChoiceCards />
      <HowItWorks />
      <DownloadTheApp/>
    </>
  );
};

export default page;
