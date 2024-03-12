import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Booking } from "@prisma/client";
import { format, isFuture, isPast } from "date-fns";

interface BookingItemProps {
	booking: Booking;
}

const BookingItem = ({ booking }: BookingItemProps) => {
	const isBookingConfirmed = isFuture(booking.date);
	return (
		<Card className="w-64 h-32 bg-[#292D36] text-white rounded">
			<CardContent className="px-5 flex justify-between py-0">
				<div className="flex flex-col justify-center items-center gap-2 py-5">
					<Badge
						className="w-fit"
						variant={isBookingConfirmed ? "default" : "secondary"}
					>
						{isBookingConfirmed ? "Confirmed" : "Finished"}
					</Badge>
					<p className="text-sm font-bold capitalize">
						{format(booking.date, "MMMM")}
					</p>
					<p className="text-2xl">{format(booking.date, "dd")}</p>
				</div>

				<div className="flex flex-col justify-center items-center border-l border-zinc-100/20 px-3">
					<p className="text-sm">{format(booking.date, "kk:mm")}</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default BookingItem;
