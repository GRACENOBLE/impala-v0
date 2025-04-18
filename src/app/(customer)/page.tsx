import Services from "@/components/services";
import DownloadTheApp from "@/components/download-the-app";
import Hero from "@/components/hero";
import HowItWorks from "@/components/ui/how-it-works";

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <DownloadTheApp/>
    </>
  );
};

export default page;
