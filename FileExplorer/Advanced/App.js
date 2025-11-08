import React, { useState } from "react";
import Explorer from "./components/Explorer";
import expData from "./data/explorerData";
import useExploreUtil from "./hooks/useExploreUtils";

const App = () => {
  const { insertNode } = useExploreUtil();
  const [exploreData, setExploreData] = useState(expData);

  const handleInsertNode = (folderId, name, isFolder) => {
    const newRoot = insertNode(exploreData, folderId, name, isFolder);
    setExploreData(newRoot);
  };

  return <Explorer data={exploreData} handleInsertNode={handleInsertNode} />;
};

export default App;
