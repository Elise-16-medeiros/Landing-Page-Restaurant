"use client";
import { useState } from "react";
import { Booking } from "@prisma/client";
import { format, isFuture } from "date-fns";
import { cancelBooking } from "@/app/_actions/cancel_booking";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/app/_components/ui/card";
import { toast } from "sonner";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";

interface BookingItemProps {
	booking: Booking;
}
const BookingItem = ({ booking }: BookingItemProps) => {
	const isBookingConfirmed = isFuture(booking.date);
	const [alertDialogIsOpen, setAlertDialogIsOpen] = useState(false);

	const handleCancelClick = async () => {
		try {
			await cancelBooking(booking.id);
			setAlertDialogIsOpen(false);
			toast.success("Booking canceled");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Card className="w-full max-w-60 h-full max-h-52 bg-[#292D36] text-white rounded">
			<CardHeader>
				<Badge
					className="w-fit"
					variant={isBookingConfirmed ? "default" : "secondary"}
				>
					{isBookingConfirmed ? "Confirmed" : "Finished"}
				</Badge>
			</CardHeader>
			<CardContent className="px-5 py-0 flex flex-col justify-center gap-3">
				<div className="flex justify-between">
					<p className="text-sm font-bold capitalize">
						{format(booking.date, "MMMM")}
					</p>
					<p className="text-xl font-bold">{format(booking.date, "dd")}</p>
				</div>

				<div className="flex justify-between">
					<p className="text-sm">{format(booking.date, "cccc")}</p>
					<p className="text-sm">{format(booking.date, "p")}</p>
				</div>
			</CardContent>
			<CardFooter className="py-4 flex justify-between">
				<Button className="text-slate-300 hover:text-slate-50">Return</Button>
				<AlertDialog
					open={alertDialogIsOpen}
					onOpenChange={setAlertDialogIsOpen}
				>
					<AlertDialogTrigger asChild>
						<Button className="text-[#f04747] hover:text-red-400">
							Cancel
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent className="bg-white">
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your reservation from our servers.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogAction className="bg-slate-300 rounded hover:bg-slate-50">
								Return
							</AlertDialogAction>
							<AlertDialogCancel
								onClick={handleCancelClick}
								disabled={!isBookingConfirmed}
								className="bg-[#f04747] text-white border-none hover:bg-red-400"
							>
								Cancel
							</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardFooter>
		</Card>
	);
};

export default BookingItem;
