/**
 * Returns the URL for an image with the given parameters.
 * @param {string} collectionId - The ID of the collection containing the image.
 * @param {string} recordId - The ID of the record containing the image.
 * @param {string} fileName - The name of the image file.
 * @param {string} [size='220x160'] - The size of the image thumbnail to retrieve.
 * @returns {string} The URL for the requested image.
 */
export const getImageURL = (collectionId, recordId, fileName, size = '220x160') => {
	return `https://pfsdev.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
