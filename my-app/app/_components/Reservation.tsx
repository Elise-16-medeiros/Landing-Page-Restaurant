import imageBg from "@/public/bg_reservation.png";

const Reservation = () => {
	return (
		<section
			style={{ backgroundImage: `url(${imageBg.src})` }}
			className="w-full h-[977px] p-5 mt-[700px] bg-cover bg-center relative"
		>
			<div className="w-[600px] h-[600px] bg-gray-700/70 absolute top-48 right-0 md:inset-x-1/4 md:inset-y-1/4"></div>
		</section>
	);
};

export default Reservation;
