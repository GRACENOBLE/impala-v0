import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GalleryVerticalEnd, MapPin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Content */}
      <div className="min-h-[500px] border-b flex flex-col pb-6">
        <div className="flex-grow py-24 lg:py-32  flex flex-col justify-center">
          <div className="mt-0 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center items-center">
              {/* Logo */}
              <Link
                href="#"
                className="flex items-center gap-2 self-center font-medium"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                Impala Express
              </Link>
              {/* End Logo */}
            </div>
            <h1 className="scroll-m-20 text-4xl mx-auto max-w-2xl font-extrabold tracking-tight lg:text-5xl">
              Fast, reliable and secure deliveries.
            </h1>
            {/* <p className="mt-3 text-muted-foreground">
              Your AI-powered copilot for the web
            </p> */}
          </div>
          {/* Search */}
          <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Input
                type="text"
                className="p-6 block w-full rounded-full"
                placeholder="What's your address?"
              />
              <div className="absolute top-1/2 right-1 -translate-y-1/2">
                <button className="rounded-full hover:cursor-pointer hover:bg-accent p-2 transition-colors ease-in-out duration-300">
                  <MapPin strokeWidth={0.5} className="shrink-0 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          {/* End Search */}
        </div>
        {/* <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">© 2025 Acme Inc.</p>
        </footer> */}
      </div>
      {/* End Content */}
    </>
  );
};

export default Hero;
