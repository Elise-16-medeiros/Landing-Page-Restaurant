"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const Header = () => {
	return (
		<>
			<header className="w-full h-72 flex justify-center items-center bg-[#292E36] border-b border-b-[#5C6168] md:h-[180px]">
				<div className="flex flex-col justify-center items-center md:flex-row">
					<motion.span
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeOut",
							delay: 0.5,
						}}
					>
						<Badge variant="custom">Call - 123 456 789</Badge>
					</motion.span>

					<motion.span
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeOut",
							delay: 0.6,
						}}
					>
						<Link href="/">
							<Image src="/logo.png" width={200} height={200} alt="logo" />
						</Link>
					</motion.span>
					<motion.span
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 1, opacity: 1 }}
						transition={{
							duration: 0.8,
							type: "tween",
							ease: "easeOut",
							delay: 0.7,
						}}
					>
						<Button variant="custom" size="custom">
							<Link href="#reservation">reservation</Link>
						</Button>
					</motion.span>
				</div>
			</header>
			<Navbar />
		</>
	);
};

export default Header;
