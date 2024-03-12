import Image from "next/image";

const Vectors = () => {
	return (
		<section className="w-full max-w-full h-full max-h-max py-16 bg-[#FFF8F5]">
			<div className="flex flex-col justify-around items-center gap-6 md:flex-row">
				<div className="w-24 h-32 flex flex-col items-center justify-center gap-2">
					<Image
						src="/vegetables.png"
						width={64}
						height={64}
						alt="vegetables"
					/>
					<h2 className="text-center tracking-wide font-semibold">
						FRESH INGREDIENTS
					</h2>
				</div>
				<div className="w-24 h-32 flex flex-col items-center justify-center gap-2">
					<Image src="/chef.png" width={64} height={64} alt="chef" />
					<h2 className="text-center tracking-wide font-semibold">
						CHEF'S SPECIALTIES
					</h2>
				</div>
				<div className="w-24 h-32 flex flex-col items-center justify-center gap-2">
					<Image
						src="/wedding-cake.png"
						width={64}
						height={64}
						alt="wedding cake"
					/>
					<h2 className="text-center tracking-wide font-semibold">
						WEDDINGS & EVENTS
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Vectors;
