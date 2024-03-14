"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Vectors = () => {
	return (
		<section className="w-full max-w-full h-full max-h-max py-16 bg-[#FFF8F5]">
			<div className="flex flex-col justify-around items-center gap-6 md:flex-row">
				<motion.div
					className="w-24 h-32 flex flex-col items-center justify-center gap-2"
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 1, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "tween",
						ease: "easeIn",
						delay: 0.6,
					}}
				>
					<Image
						src="/vegetables.png"
						width={64}
						height={64}
						alt="vegetables"
					/>
					<h2 className="text-center tracking-wide font-semibold">
						FRESH INGREDIENTS
					</h2>
				</motion.div>
				<motion.div
					className="w-24 h-32 flex flex-col items-center justify-center gap-2"
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 1, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "tween",
						ease: "easeIn",
						delay: 0.7,
					}}
				>
					<Image src="/chef.png" width={64} height={64} alt="chef" />
					<h2 className="text-center tracking-wide font-semibold">
						CHEF'S SPECIALTIES
					</h2>
				</motion.div>
				<motion.div
					className="w-24 h-32 flex flex-col items-center justify-center gap-2"
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 1, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "tween",
						ease: "easeIn",
						delay: 0.8,
					}}
				>
					<Image
						src="/wedding-cake.png"
						width={64}
						height={64}
						alt="wedding cake"
					/>
					<h2 className="text-center tracking-wide font-semibold">
						WEDDINGS & EVENTS
					</h2>
				</motion.div>
			</div>
		</section>
	);
};

export default Vectors;
