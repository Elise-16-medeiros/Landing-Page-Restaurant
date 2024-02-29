import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full h-72 flex justify-center items-center bg-[#292E36] border-b border-b-[#5C6168] md:h-[180px]">
			<div className="flex flex-col justify-center items-center md:flex-row">
				<span className="px-4 py-1 text-white border-[#E1B168] border-2 rounded">
					Call - 123 456 789
				</span>
				<Image src="/logo.png" width={200} height={200} alt="logo" />
				<Link className="link-custom-two" href="/reservation">
					reservation
				</Link>
			</div>
		</header>
	);
};

export default Header;
