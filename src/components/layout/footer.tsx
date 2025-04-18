import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Impalaexpress.com",
    url: "https://www.impalaexpress.com",
  },
  tagline = "Fast, reliable and secure deliveries.",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 imapalaexpress.com. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="pt-16 bg-foreground/80 text-background">
      <Container>
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://impalaexpress.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 text-muted-foreground">{tagline}</p>
              <div className="mt-10 flex flex-col gap-4">
                <Link
                  href={""}
                  className={cn(
                    "flex gap-2 items-center bg-foreground rounded-md py-2 px-6 text-background w-fit"
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
                    "flex gap-2 items-center bg-foreground rounded-md py-2 px-6 text-background w-fit"
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
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-background/80">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="text-background/40 hover:text-background/60"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex justify-between gap-4 border-t border-t-muted/32 py-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export { Footer };
