"use client";
import Image from "next/image";
import Vectors from "./Vectors";
import { motion } from "framer-motion";

const About = () => {
	return (
		<>
			<Vectors />
			<section
				id="about"
				className="bg-[#FFF8F5] w-full h-[628px] pt-5 md:h-[428px]"
			>
				<div className="px-5 flex flex-col-reverse justify-center items-center gap-10 md:flex-row">
					<motion.div
						className="col-span-2"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.5,
						}}
					>
						<Image
							className="container"
							src="/about.png"
							width={680}
							height={580}
							alt="restaurant"
						/>
					</motion.div>
					<div>
						<motion.h2
							className="text-xl tracking-wide font-bold pb-3"
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 1, opacity: 1 }}
							transition={{
								duration: 0.8,
								type: "tween",
								ease: "easeIn",
								delay: 0.6,
							}}
						>
							Botticelli Italian Restaurant
						</motion.h2>
						<motion.p
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 1, opacity: 1 }}
							transition={{
								duration: 0.8,
								type: "tween",
								ease: "easeIn",
								delay: 0.7,
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
							quam libero accusamus quasi quas harum! Lorem, ipsum dolor sit
							amet consectetur adipisicing elit. Nulla!
						</motion.p>

						<motion.div
							className="flex flex-row justify-center items-center mt-5 gap-10"
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 1, opacity: 1 }}
							transition={{
								duration: 0.8,
								type: "tween",
								ease: "easeIn",
								delay: 0.7,
							}}
						>
							<div className="flex flex-col">
								<h2 className="text-xl tracking-wide font-bold">1987</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Nesciunt, alias!
								</p>
							</div>

							<div className="flex flex-col">
								<h2 className="text-xl tracking-wide font-bold">2024</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repudiandae, odit.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
