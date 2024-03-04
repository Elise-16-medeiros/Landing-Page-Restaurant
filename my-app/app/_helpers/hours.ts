import { addMinutes, format, setHours, setMinutes } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
	const startTime = setMinutes(setHours(date, 18), 0);
	const endTime = setMinutes(setHours(date, 23), 0);
	const interval = 45;
	const timeList: string[] = [];

	let currentTime = startTime;

	while (currentTime <= endTime) {
		timeList.push(format(currentTime, "HH:mm"));
		currentTime = addMinutes(currentTime, interval);
	}
	return timeList;
}
