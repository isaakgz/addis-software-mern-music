import { useState } from "react";
import Albums from "../Albums/Albums";
import Artists from "../Artists/Artists";
import Genres from "../Generes/Genres";
import Songs from "../Songs/Songs";
import { Tab, TabsContainer, TabsContent } from "./TabsStyle";

function Tabs() {
  const tabs = ["Songs", "Albums", "Artists", "Genres"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Songs":
        return <Songs />;
      case "Albums":
        return <Albums />;
      case "Artists":
        return <Artists />;
      case "Genres":
        return <Genres />;
      default:
        return <Songs />; // Default to songs
    }
  };
  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <TabsContent>{renderTabContent()}</TabsContent>
    </>
  );
}

export default Tabs;
