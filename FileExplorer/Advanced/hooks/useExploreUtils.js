const useExploreUtil = () => {
    const insertNode = (root, folderId, name, isFolder) => {
      if (root.id === folderId) {
        root.items.unshift({
          id: new Date().getTime(),
          name: name,
          isFolder: isFolder,
          items: [],
        });
  
        return root;
      }
  
      const latestData = root.items.map((obj) => {
        return insertNode(obj, folderId, name, isFolder);
      });
  
      console.log(latestData);
  
      return { ...root, items: latestData };
    };
  
    return { insertNode };
  };
  
  export default useExploreUtil;
  