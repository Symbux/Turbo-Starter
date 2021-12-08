export default function useDate(): string {
	const today = new Date();
	const dateString = today.toLocaleDateString().split('/').reverse().join('-');
	const timeString = new Date().toLocaleTimeString().split(':').slice(0, 2).join(':');
	return `${dateString}T${timeString}`;
}
