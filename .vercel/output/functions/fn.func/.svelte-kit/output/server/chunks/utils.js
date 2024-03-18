const getImageURL = (collectionId, recordId, fileName, size = "220x160") => {
  return `https://pfsdev.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
export {
  getImageURL as g
};
