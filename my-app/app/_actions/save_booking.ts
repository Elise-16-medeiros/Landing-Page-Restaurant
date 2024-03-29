"use server";
import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

interface SaveBookingParams {
	userid: string;
	date: Date;
}

export const saveBooking = async (params: SaveBookingParams) => {
	await db.booking.create({
		data: {
			userId: params.userid,
			date: params.date,
		},
	});

	revalidatePath("/bookings");
};
