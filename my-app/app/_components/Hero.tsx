"use client";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "../_lib/data";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const { pretitle, title, btnText } = heroData;
const Hero = () => {
	return (
		<section id="home" className=" bg-[#292E36] text-white pb-8 pt-8">
			<div className="flex flex-col justify-center items-center gap-16 md:flex-row">
				<div className="flex flex-col justify-center items-start md:ml-10">
					<motion.span
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.5,
						}}
					>
						<h2 className="text-xl tracking-wide md:text-[30px]">{pretitle}</h2>
						<h1 className="text-[3.5rem] leading-[3rem] tracking-wide md:text-[100px] md:leading-[110px]">
							{title}
						</h1>
					</motion.span>

					<motion.div
						className="flex flex-col justify-center items-start"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.6,
						}}
					>
						<span className="text-sm tracking-wide leading-[30px]">
							We use only the finest local ingredients available
							<br />
						</span>
						<span className="text-sm tracking-wide leading-[30px]">
							and offer seasonal specials throughout the year
						</span>
					</motion.div>
					<motion.span
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeIn",
							delay: 0.7,
						}}
					>
						<Button variant="custom" size="custom" className="mt-3">
							<Link href="#reservation">{btnText}</Link>
						</Button>
					</motion.span>
				</div>

				<motion.div
					className="w-[20rem] h-[95%] overflow-hidden rounded-t-[15rem] border-8 border-[#343942] md:w-[30rem] md:h-[100%] md:mr-10"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 1, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "tween",
						ease: "easeIn",
						delay: 0.7,
					}}
				>
					<Image src="/hero.jpeg" width={655} height={769} alt="hero image" />
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
