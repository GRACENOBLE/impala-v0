import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  Truck,
  Home,
  Box,
  ShoppingBag,
  Briefcase,
  Warehouse,
} from "lucide-react";
import Container from "./common/container";

const ChoiceCards = () => {
  return (
    <section className="py-16 bg-muted/50 min-h-[700px]">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Tailored logistics solutions for all your delivery needs
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <Tabs defaultValue="delivery" className="w-full">
              <TabsList className="grid w-full grid-cols-3 border">
                {[
                  { value: "delivery", label: "Delivery Services" },
                  { value: "movers", label: "Movers Services" },
                  { value: "mobility", label: "Mobility Services" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    className="py-2 grid place-items-center"
                    value={tab.value}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[
                {
                  value: "delivery",
                  services: [
                    {
                      icon: <Truck size={16} />,
                      title: "Heavy Loads",
                      description:
                        "Containers, vehicles, industrial goods, and bulk cargo transportation.",
                    },
                    {
                      icon: <Warehouse size={16} />,
                      title: "Building Materials",
                      description:
                        "Construction materials, workshop supplies, and bulk restocking.",
                    },
                    {
                      icon: <Box size={16} />,
                      title: "Mid-Loads & Fragile Cargo",
                      description:
                        "Appliances, furniture, fragile items, and event equipment.",
                    },
                    {
                      icon: <Package size={16} />,
                      title: "Regular Fulfillment",
                      description:
                        "Documents, gifts, perishables, and e-commerce orders.",
                    },
                  ],
                },
                {
                  value: "movers",
                  services: [
                    {
                      icon: <Home size={16} />,
                      title: "Home Movers",
                      description:
                        "Professional relocation services for your home with skilled professionals.",
                    },
                    {
                      icon: <Briefcase size={16} />,
                      title: "Business Movers",
                      description:
                        "Seamless office relocation services for businesses of all sizes.",
                    },
                  ],
                },
                {
                  value: "mobility",
                  services: [
                    {
                      icon: <Truck size={16} />,
                      title: "Vehicle Sharing",
                      description:
                        "Transport solutions for groups of 12 or more passengers.",
                    },
                    {
                      icon: <ShoppingBag className="h-8 w-8" />,
                      title: "Vehicle Rentals",
                      description:
                        "High-quality vehicles for personal or professional use.",
                    },
                  ],
                },
              ].map((tabContent) => (
                <TabsContent
                  key={tabContent.value}
                  value={tabContent.value}
                  className="mt-6"
                >
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {tabContent.services.map((service, index) => (
                      <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-full bg-primary/10">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ChoiceCards;
