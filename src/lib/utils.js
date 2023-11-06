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

/**
 * Defines the styles for a grid component.
 */
export const gridStyle = {
	container: 'w-full text-sm text-left dark:bg-gray-800 p-4 shadow-md',
	table: 'w-full',
	td: 'px-4 py-3 hover:bg-blue-200/70',
	th: 'px-4 py-2 text-xs text-gray-700 uppercase bg-gray-200 dark:bg-blue-700 dark:text-gray-300 focus:outline-none focus:shadow-outline focus:border-blue-500 dark:focus:border-blue-500 w-full',
	tr: 'border-b dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-900',
	header: '',
	footer: '',
	thead: '',
	tbody: 'text-gray-700 dark:text-gray-400',
	search: 'relative flex items-center w-full p-1 justify-between bg-gray-200',
	sort: 'relative flex items-center justify-between bg-black text-black',
	pagination: 'flex items-center justify-between',
	paginationSummary: 'font-sans text-sm text-gray-700 dark:text-gray-400',
	paginationButton:
		'ml-2 px-2 py-1 my-2 border rounded border-gray-400 dark:border-gray-600 hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700',
	paginationButtonNext:
		'hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700  dark:border-blue-500 border-1',
	paginationButtonCurrent: 'bg-blue-300 dark:text-white dark:bg-blue-600',
	paginationButtonPrev:
		'hover:bg-gray-200 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-blue-500 border-1',
	loading: 'p-4 text-gray-700 dark:text-gray-400',
	notfound: 'p-4 text-gray-700 dark:text-gray-400',
	error: 'p-4 text-red-500 dark:text-red-400'
};
