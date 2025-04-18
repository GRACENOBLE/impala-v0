import Link from "next/link";
import Container from "./common/container";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const DownloadTheApp = () => {
  return (
    <section className="bg-muted py-16">
      <Container>
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                Download the app
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get our best experience on the Impala Express mobile app
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href={""}
                className={cn(
                  "flex gap-2 items-center bg-foreground rounded-md py-2 px-6 text-background"
                )}
              >
                <Image
                  src={"/icons/apple.png"}
                  alt={""}
                  width={500}
                  height={500}
                  className="h-8 w-8 object-contain"
                />
                <p className="flex flex-col items-start">
                  <span className="text-xs"> Get it on the</span>
                  <span className="font-semibold"> App Store</span>
                </p>
              </Link>
              <Link
                href={""}
                className={cn(
                  "flex gap-2 items-center bg-foreground rounded-md py-2 px-6 text-background"
                )}
              >
                <Image
                  src={"/icons/play-store.png"}
                  alt={""}
                  width={500}
                  height={500}
                  className="h-8 w-8 object-contain"
                />
                <p className="flex flex-col items-start">
                  <span className="text-xs"> Get it on</span>
                  <span className="font-semibold"> Play Store</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadTheApp;
