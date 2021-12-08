export default class IntlProvider {

	/**
	 * Converts a timestamp or date string into a Intl formatted
	 * string.
	 *
	 * @param timestamp The timestamp or date string.
	 * @returns string
	 */
	public convertDateTime(timestamp: number | string): string {
		const datetime = new Date(timestamp);
		return Intl.DateTimeFormat('en-GB', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
			timeZone: 'Europe/London',
		}).format(datetime);
	}
}
