"use client";

import { useMemo, useState } from "react";
import { Calendar } from "./ui/calendar";
import imageBg from "@/public/bg_reservation.png";
import { generateDayTimeList } from "../_helpers/hours";
import { Button } from "./ui/button";
import { format, setHours, setMinutes } from "date-fns";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import Image from "next/image";
import { saveBooking } from "../_actions/save_booking";
import { useSession } from "next-auth/react";

const Reservation = () => {
	const { data } = useSession();

	const [date, setDate] = useState<Date | undefined>(undefined);
	const [hour, setHour] = useState<string | undefined>();
	const [showToast, setShowToast] = useState(false);

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

	const handleBookingSubmit = async () => {
		setShowToast(true);

		try {
			if (!hour || !date || !data?.user) {
				return;
			}

			const dateHour = Number(hour.split(":")[0]);
			const dateMinutes = Number(hour.split(":")[1]);
			const newDate = setMinutes(setHours(date, dateHour), dateMinutes);
			await saveBooking({
				date: newDate,
				userid: (data.user as any).id,
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="w-full p-5 mt-[700px]">
			<div className=" relative h-[977px]">
				<Image
					alt="Restaurant"
					src={imageBg}
					placeholder="blur"
					quality={100}
					fill
					sizes="100vw"
					className="-z-50 object-cover"
				/>
				<div className="flex flex-col justify-center items-center py-8">
					<div className="before:content[''] before:border-2 before:absolute before:w-[138px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[138px] after:border-[#bc9458] after:absolute">
						<h3 className="py-1 tracking-widest px-3 text-sm text-white uppercase">
							Reservations
						</h3>
					</div>
					<h1 className="text-3xl text-white tracking-wide font-title pt-8">
						Book Your Table
					</h1>
				</div>
				<div className="z-30 w-full max-w-sm h-full max-h-[650px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-[30px] text-white backdrop-blur-sm bg-black/30 md:max-w-4xl">
					<span className="z-50">
						<div className="flex justify-center items-center mt-8">
							<div className="grid grid-cols-2 gap-8 place-content-center place-items-center">
								<div>
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
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-end items-center mt-10">
							<Alert className="rounded w-64 h-24 bottom-4">
								<AlertTitle className="text-center py-1">
									Confirm reservation?
								</AlertTitle>
								<AlertDescription className="flex justify-around items-center py-2">
									{date && (
										<div className="flex items-center gap-2">
											<h2 className="font-bold">Date:</h2>
											<h4>{format(date, "dd MMMM")}</h4>
										</div>
									)}

									{hour && (
										<div className="flex items-center gap-1">
											<h2 className="font-bold">Hour:</h2>
											<h4>{hour}</h4>
										</div>
									)}
								</AlertDescription>
							</Alert>

							<div>
								{!showToast && (
									<Button
										onClick={handleBookingSubmit}
										disabled={!hour || !date}
										variant="custom"
									>
										Reserve
									</Button>
								)}
								{showToast && (
									<div>
										<p>Esta é a mensagem no card.</p>
									</div>
								)}
							</div>
						</div>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Reservation;
