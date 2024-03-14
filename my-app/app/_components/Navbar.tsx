"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { linksData } from "../_lib/data";
import { signIn, signOut, useSession } from "next-auth/react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const { data, status } = useSession();
	const handleLoginClick = () => signOut();
	const handleLogoutClick = () => signIn("google");

	return (
		<nav className="bg-[#292E36] p-4 flex justify-between items-center">
			<div className=" hidden md:flex md:items-center md:gap-3">
				{data?.user ? (
					<>
						{linksData.map((link) => (
							<Link className="navbar-links" href={link.hash} key={link.hash}>
								{link.name}
							</Link>
						))}
						<Link href="/bookings" className="navbar-links">
							Bookings
						</Link>
					</>
				) : (
					<div className="flex items-center gap-3">
						{linksData.map((link) => (
							<Link className="navbar-links" href={link.hash} key={link.hash}>
								{link.name}
							</Link>
						))}
					</div>
				)}
			</div>
			<div>
				{data?.user ? (
					<div className="flex justify-between items-center px-5 py-6">
						<div className="flex items-center gap-3">
							<Avatar>
								<AvatarImage src={data.user.image ?? ""}></AvatarImage>
							</Avatar>
							<h2 className="font-bold text-white">{data.user.name}</h2>
						</div>
						<Button size="icon">
							<IoIosLogOut
								onClick={handleLoginClick}
								size={20}
								className="text-white navbar-links"
							/>
						</Button>
					</div>
				) : (
					<div>
						<Button
							onClick={handleLogoutClick}
							className="invisible navbar-links md:visible"
						>
							Login
							<IoIosLogIn size={20} className="ml-1" />
						</Button>
					</div>
				)}
			</div>
			<span className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button size="icon" className="w-8 h-8">
							<BiMenuAltRight size={20} className="text-white" />
						</Button>
					</SheetTrigger>
					<SheetContent className="p-0">
						<SheetHeader className="border-b border-b-[#5C6168] p-5">
							<SheetTitle className="text-left">Menu</SheetTitle>
						</SheetHeader>

						{data?.user ? (
							<div className="flex justify-between items-center px-5 py-6">
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src={data.user.image ?? ""}></AvatarImage>
									</Avatar>
									<h2 className="font-bold">{data.user.name}</h2>
								</div>
								<Button size="icon">
									<IoIosLogOut
										onClick={handleLoginClick}
										size={20}
										className="text-white"
									/>
								</Button>
							</div>
						) : (
							<div className="flex justify-between items-center">
								<div className="flex items-center gap-2 px-5 py-6">
									<LuUser size={25} />
									<h2 className="font-bold">Visitor</h2>
								</div>
								<Button>
									<IoIosLogIn onClick={handleLogoutClick} size={20} />
								</Button>
							</div>
						)}

						<div className="flex flex-col gap-3 px-5">
							{data?.user ? (
								<>
									{linksData.map((link) => (
										<Link
											className="navbar-links"
											href={link.hash}
											key={link.hash}
										>
											{link.name}
										</Link>
									))}
									<Link href="/bookings" className="navbar-links">
										Bookings
									</Link>
								</>
							) : (
								<div className="flex flex-col gap-3 px-5">
									{linksData.map((link) => (
										<Link
											className="navbar-links"
											href={link.hash}
											key={link.hash}
										>
											{link.name}
										</Link>
									))}
								</div>
							)}
						</div>
					</SheetContent>
				</Sheet>
			</span>
		</nav>
	);
};

export default Navbar;
