import type React from "react";
import {
  CheckCircle2,
  CircleCheck,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import Container from "../common/container";

const HowItWorks = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="container px-4 md:px-6 relative flex flex-col items-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                How it works
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Simple steps to get your package delivered
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-12 relative mt-12">
            {[
              {
                number: "1",
                icon: <Package size={24} />,
                title: "Place an Order",
                description:
                  "Begin with understanding your requirements and project scope through collaborative sessions.",
              },
              {
                number: "2",
                icon: <Truck size={24} />,
                title: "Operator Assignment",
                description:
                  "Begin with understanding your requirements and project scope through collaborative sessions.",
              },
              {
                number: "3",
                icon: <MapPin size={24} />,
                title: "Real-time Tracking",
                description:
                  "Begin with understanding your requirements and project scope through collaborative sessions.",
              },
              {
                number: "4",
                icon: <CheckCircle2 size={24} />,
                title: "Delivery Confirmation",
                description:
                  "Begin with understanding your requirements and project scope through collaborative sessions.",
              },
            ].map((step, index) => (
              <Step
                key={index}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}{" "}
            <span className="w-1 h-[475px] absolute border-l-2 border-dashed top-16 left-8 -z-1" />
            {/* <div className="border py-2 w-fit rounded-full ps-2 pe-6 flex items-center">
              <CircleCheck size={22} />
              <span>Package successfully delivered</span>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

interface StepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Step({ number, icon, title, description }: StepProps) {
  return (
    <div className="flex space-y-2 gap-6">
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted border">
          {icon}
        </div>
        <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          {number}
        </div>
      </div>
      <div className="space-y-2 bg-muted border py-4 px-6 rounded-md  w-2xl min-h-32">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className=" text-gray-500 dark:text-gray-400 max-w-[500px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
