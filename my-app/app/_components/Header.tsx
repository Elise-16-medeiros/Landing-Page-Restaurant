import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<>
			<header className="w-full h-72 flex justify-center items-center bg-[#292E36] border-b border-b-[#5C6168] md:h-[180px]">
				<div className="flex flex-col justify-center items-center md:flex-row">
					<Badge variant="custom">Call - 123 456 789</Badge>

					<Image src="/logo.png" width={200} height={200} alt="logo" />
					<Button variant="custom" size="custom">
						<Link href="/reservation">reservation</Link>
					</Button>
				</div>
			</header>
			<Navbar />
		</>
	);
};

export default Header;
