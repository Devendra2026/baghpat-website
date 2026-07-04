

import AnnouncementTicker from "@/src/components/AnnouncementTicker";
import ChairmanMessage from "@/src/components/ChairmanMessage";
import CitizenServices from "@/src/components/CitizenServices";
import DigitalGateway from "@/src/components/DigitalGateway";
import HeroSlider from "@/src/components/HeroSlider";
import NewsAndNotices from "@/src/components/NewsAndNotices";
import Statistics from "@/src/components/Statistics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />
      <AnnouncementTicker />
      <div className="bg-gradient-flag">
        <DigitalGateway />
        <CitizenServices />
        <ChairmanMessage />
      </div>
      <Statistics />
      <NewsAndNotices />
    </div>
  );
}
