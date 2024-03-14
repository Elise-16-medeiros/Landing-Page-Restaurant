"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full h-[540px] md:h-[310px] bg-[#292D36] mt-5">
			<div className="flex flex-col justify-center items-center gap-3 text-white mx-5 py-10 md:flex-row md:justify-between md:items-center">
				<motion.div
					className="flex flex-col justify-center items-center gap-2 md:justify-start md:items-start text-xs"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.6,
						ease: "easeInOut",
					}}
				>
					<div className="mb-3 before:content[''] before:border before:absolute before:w-[60px] before:border-[#E1B168] after:content-[''] after:border after:w-[60px] after:border-[#E1B168] after:absolute">
						<h5 className="py-1 uppercase tracking-wide">Contact</h5>
					</div>
					<p>Via Cavour 25, Florence, Tuscany</p>
					<p className="text-[#E1B168]">123 456 789</p>
					<p className="text-[#E1B168]">reservation_botticelli@gmail.com</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.7,
						ease: "easeInOut",
					}}
				>
					<Image src="/logo.png" width={180} height={100} alt="logo" />
				</motion.div>

				<motion.div
					className="flex flex-col justify-center items-center gap-2 text-xs md:justify-end md:items-end"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.8,
						ease: "easeInOut",
					}}
				>
					<div className="mb-3 before:content[''] before:border before:absolute before:w-[106px] before:border-[#E1B168] after:content-[''] after:border after:w-[106px] after:border-[#E1B168] after:absolute">
						<h5 className="py-1 uppercase tracking-wide">Working Hours</h5>
					</div>
					<p>
						<span className="text-[#E1B168]">Mon-Fri:</span> 18:00pm - 23:00pm
					</p>
					<p>
						<span className="text-[#E1B168]">Sat:</span> 18:00pm - 23:00pm
					</p>
					<p>
						<span className="text-[#E1B168]">Sun:</span> 18:00pm - 23:00pm
					</p>
				</motion.div>
			</div>
			<div className="border-t border[#5C6168] my-10">
				<div className=" flex justify-between items-center text-white text-xs tracking-wide py-3 px-3">
					<p>₢ Copyright - Elise Medeiros</p>
					<p>Template inspired by Figma(TasteEat)</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
