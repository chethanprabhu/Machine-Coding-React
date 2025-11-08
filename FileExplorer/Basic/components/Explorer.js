import React, { useState } from "react";
import "./Explorer.scss";

const Explorer = ({ data }) => {
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpand(!expand)}>
          📂<span>{data.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {data.items.map((item) => {
            return <Explorer data={item} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <div className="file">
        📄<span>{data.name}</span>
      </div>
    );
  }
};

export default Explorer;
