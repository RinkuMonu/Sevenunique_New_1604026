import { serviceData } from "./data";
import ServiceHeroSection from "@/components/Services/ServiceHeroSection";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const data =
    serviceData[slug] ||
    serviceData[`${slug}-development`];

  if (!data) {
    return <div className="p-10">No data found for: {slug}</div>;
  }

  return <ServiceHeroSection data={data} />;
}
