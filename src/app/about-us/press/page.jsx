"use client";

import { useState } from "react";
import Tabs from "@/components/press-release/Tabs";
import MediaHub from "@/components/press-release/MediaHub";
import PressRelease from "@/components/press-release/PressRelease";
import InTheNews from "@/components/press-release/InTheNews";

export default function PressReleasePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && <MediaHub />}
      {activeTab === 1 && <PressRelease />}
      {activeTab === 2 && <InTheNews />}
    </div>
  );
}