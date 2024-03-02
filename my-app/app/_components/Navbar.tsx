"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { linksData } from "../_lib/data";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const { data } = useSession();
	const handleLoginClick = async () => {
		await signIn();
	};
	return (
		<nav className="bg-[#292E36] p-4">
			<div className="container mx-auto flex items-center justify-between">
				<div className="hidden md:flex space-x-4">
					{linksData.map((link) => (
						<Link className="navbar-links" href={link.slash} key={link.slash}>
							{link.name}
						</Link>
					))}
				</div>
				<div className="text-white flex gap-3">
					<FaFacebook className="w-[24px] h-[23px] cursor-pointer hover:text-[#E1B168]" />
					<FaInstagram className="w-[24px] h-[23px] cursor-pointer hover:text-[#E1B168]" />

					{data?.user ? (
						<div>
							<button onClick={() => signOut()}>Logout</button>
							<h1>{data.user.name}</h1>
						</div>
					) : (
						<button onClick={handleLoginClick}>Login</button>
					)}
				</div>

				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-white">
						{isOpen ? (
							<HiXMark className="h-8 w-8 cursor-pointer" />
						) : (
							<BiMenuAltRight className="h-8 w-8" />
						)}
					</button>
					{isOpen && (
						<div className=" w-32 h-80 absolute gap-6 right-10 rounded-xl flex flex-col justify-center items-center bg-[#343942] transition-all duration-300">
							{linksData.map((link) => (
								<Link
									className="navbar-links"
									href={link.slash}
									key={link.slash}
								>
									{link.name}
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
