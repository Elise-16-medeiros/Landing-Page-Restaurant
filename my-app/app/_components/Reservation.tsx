"use client";

import { useMemo, useState } from "react";
import { Calendar } from "./ui/calendar";
import imageBg from "@/public/bg_reservation.png";
import { generateDayTimeList } from "../_helpers/hours";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { format } from "date-fns";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

const Reservation = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [hour, setHour] = useState<string | undefined>();

	const handleDateClick = (date: Date | undefined) => {
		setDate(date);
		setHour(undefined);
	};

	const handleHourClick = (time: string) => {
		setHour(time);
	};

	const timeList = useMemo(() => {
		return date ? generateDayTimeList(date) : [];
	}, [date]);

	return (
		<section
			style={{ backgroundImage: `url(${imageBg.src})` }}
			className="w-full h-[977px] p-5 mt-[700px] bg-cover bg-center"
		>
			<span className="flex flex-col justify-center items-center py-8">
				<div className="before:content[''] before:border-2 before:absolute before:w-[138px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[138px] after:border-[#bc9458] after:absolute">
					<h3 className="py-1 tracking-widest px-3 text-sm text-white uppercase">
						Reservations
					</h3>
				</div>
				<h1 className="text-3xl text-white tracking-wide font-title pt-8">
					Book Your Table
				</h1>
			</span>
			<span className="flex justify-center items-center">
				<div className="w-[750px] h-[750px] bg-gray-700/90 text-white grid grid-cols-1 place-content-between place-items-center md:w-[650px] md:h-[650px]">
					<div className="my-10 grid grid-cols-1 gap-10 place-content-center place-items-center md:my-32 md:grid-cols-2">
						<div className="flex">
							<Calendar
								mode="single"
								selected={date}
								onSelect={handleDateClick}
								fromDate={new Date()}
							/>
						</div>
						<div className="grid grid-cols-1 gap-8">
							{date && (
								<div className="grid grid-cols-2 place-content-end place-items-center gap-3">
									{timeList.map((time) => (
										<Button
											onClick={() => handleHourClick(time)}
											key={time}
											variant={hour === time ? "custom2" : "outline"}
											size="default"
										>
											{time}
										</Button>
									))}
								</div>
							)}
							<Button variant="custom">Booking</Button>
						</div>
					</div>

					<Alert className="rounded w-1/2 h-24 bottom-10">
						<AlertTitle className="text-center py-1">
							Reservation Confirmed
						</AlertTitle>
						<AlertDescription className="flex justify-around items-center py-2">
							{date && (
								<div className="flex items-center gap-2">
									<h2 className="font-bold">Date:</h2>
									<h4>{format(date, "dd MMMM")}</h4>
								</div>
							)}
							{hour && (
								<div className="flex items-center gap-2">
									<h2 className="font-bold">Hour:</h2>
									<h4>{hour}</h4>
								</div>
							)}
						</AlertDescription>
					</Alert>
				</div>
			</span>
		</section>
	);
};

export default Reservation;

/* md:top-48 md:right-0 md:inset-x-1/4 md:inset-y-1/4 md:mt-12*/
