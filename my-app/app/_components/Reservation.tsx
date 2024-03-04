"use client";

import * as React from "react";
import { Calendar } from "./ui/calendar";
import imageBg from "@/public/bg_reservation.png";

const Reservation = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<section
			style={{ backgroundImage: `url(${imageBg.src})` }}
			className="w-full h-[977px] p-5 mt-[700px] bg-cover bg-center relative"
		>
			<span className="flex flex-col justify-center items-center my-20">
				<div className="before:content[''] before:border-2 before:absolute before:w-[138px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[138px] after:border-[#bc9458] after:absolute">
					<h3 className="py-1 tracking-widest px-3 text-sm text-white uppercase">
						Reservations
					</h3>
				</div>
				<h1 className="text-3xl text-white tracking-wide pb-3 font-title my-10">
					Book Your Table
				</h1>
			</span>
			<div className="w-3/4 h-1/2 inset-x-0 left-14 bg-gray-700/90 text-white absolute flex items-center justify-center md:mt-12 md:w-[600px] md:h-[600px] md:top-48 md:right-0 md:inset-x-1/4 md:inset-y-1/4">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className=""
				/>
			</div>
		</section>
	);
};

export default Reservation;
