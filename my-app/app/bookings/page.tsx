import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import BookingItem from "./_components/booking-item";

const BookingsPage = async () => {
	const session = await getServerSession(authOptions);

	if (!session?.user) {
		return redirect("/reservations");
	}

	const [confirmedBookings, finishedBookings] = await Promise.all([
		db.booking.findMany({
			where: {
				userId: (session.user as any).id,
				date: {
					gte: new Date(),
				},
			},
		}),
		db.booking.findMany({
			where: {
				userId: (session.user as any).id,
				date: {
					lt: new Date(),
				},
			},
		}),
	]);

	return (
		<section className="bg-gray-50">
			<div className="px-5 py-6">
				<div className="before:content[''] before:border-2 before:absolute before:w-[153px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[153px] after:border-[#E1B168] after:absolute">
					<h1 className="py-1 tracking-wide uppercase">yours bookings</h1>
				</div>
				{confirmedBookings.length === 0 && finishedBookings.length === 0 && (
					<h2 className="text-gray-400 text-sm font-bold mt-6 mb-3 uppercase">
						confirmed
					</h2>
				)}

				<div className="grid grid-cols-1 place-content-center place-items-center gap-3 md:grid-cols-3 py-8">
					{confirmedBookings.map((booking) => (
						<BookingItem key={booking.id} booking={booking} />
					))}
				</div>

				<h2 className="text-gray-400 text-sm font-bold mt-6 mb-3 uppercase">
					finished
				</h2>

				<div className="grid grid-cols-1 place-content-center place-items-center gap-3 md:grid-cols-3 py-3">
					{finishedBookings.map((booking) => (
						<BookingItem key={booking.id} booking={booking} />
					))}
				</div>
			</div>
		</section>
	);
};

export default BookingsPage;
