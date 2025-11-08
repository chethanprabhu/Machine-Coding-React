import React, { useState } from "react";
import "./Explorer.scss";

const Explorer = ({ data, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const createFolderOrFile = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder: isFolder,
    });
  };

  const addFolderOrFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(data.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, isVisible: false });
    }
  };

  if (data.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📂{data.name}</span>
          <div>
            <button onClick={(e) => createFolderOrFile(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => createFolderOrFile(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 20 }}>
          {showInput.isVisible && (
            <>
              <span>{showInput.isFolder ? "📂" : "📄"}</span>
              <input
                autoFocus
                className="inputFiled"
                type="text"
                onKeyDown={addFolderOrFile}
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
              />
            </>
          )}

          {data.items.map((item) => (
            <Explorer
              key={item.id}
              data={item}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="file">
        <span>📄{data.name}</span>
      </div>
    );
  }
};

export default Explorer;
