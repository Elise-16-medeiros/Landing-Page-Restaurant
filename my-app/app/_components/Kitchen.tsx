"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Kitchen = () => {
	return (
		<section id="Kitchen" className="h-[906px] mt-20 px-5 md:h-[450px]">
			<div className="before:content[''] before:border-2 before:absolute before:w-[118px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[118px] after:border-[#E1B168] after:absolute">
				<h2 className="py-1 tracking-wide uppercase">Our Kitchen</h2>
			</div>

			<div className="flex flex-col-reverse justify-center items-center gap-10 mt-5 md:flex-row">
				<div>
					<motion.h5
						className="text-xl tracking-wide font-bold pb-3 font-title"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.5,
						}}
					>
						Prepared just for you, always using fresh ingredients
					</motion.h5>
					<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.6,
						}}
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
						laborum dolore amet eos numquam nobis. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Amet, ex.
					</motion.p>

					<div className="flex flex-row justify-center items-center mt-5 gap-10">
						<div>
							<motion.h2
								className="text-xl tracking-wide font-bold"
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 1, opacity: 1 }}
								transition={{
									duration: 0.8,
									type: "tween",
									ease: "easeIn",
									delay: 0.6,
								}}
							>
								Our Chefs
							</motion.h2>
							<motion.p
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 1, opacity: 1 }}
								transition={{
									duration: 0.8,
									type: "tween",
									ease: "easeIn",
									delay: 0.7,
								}}
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Nesciunt, alias!
							</motion.p>
						</div>

						<div className="flex flex-col">
							<motion.h2
								className="text-xl tracking-wide font-bold"
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 1, opacity: 1 }}
								transition={{
									duration: 0.8,
									type: "tween",
									ease: "easeIn",
									delay: 0.6,
								}}
							>
								Our Ingredients
							</motion.h2>
							<motion.p
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 1, opacity: 1 }}
								transition={{
									duration: 0.8,
									type: "tween",
									ease: "easeIn",
									delay: 0.7,
								}}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae, odit.
							</motion.p>
						</div>
					</div>
				</div>
				<motion.span
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 1, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "tween",
						ease: "easeIn",
						delay: 0.8,
					}}
				>
					<Image src="/kitchen.jpg" width={398} height={548} alt="kitchen" />
				</motion.span>
			</div>
		</section>
	);
};

export default Kitchen;
