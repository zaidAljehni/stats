/**
 * Convert a string representing date in the form d/m/y to a Date object.
 * @param dateString string
 * @returns Date
 */
export const stringToDate = (dateString: string): Date => {
	const dateIntElements = dateString
		.split("/")
		.map((dateStringElement) => parseInt(dateStringElement));

	return new Date(
		dateIntElements[2],
		dateIntElements[1] - 1,
		dateIntElements[0]
	);
};
