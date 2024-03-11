import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full h-[540px] md:h-[310px] bg-[#292D36] mt-5">
			<div className="flex flex-col justify-center items-center gap-3 text-white mx-5 py-10 md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col justify-center items-center gap-2 md:justify-start md:items-start text-xs">
					<div className="mb-3 before:content[''] before:border before:absolute before:w-[60px] before:border-[#E1B168] after:content-[''] after:border after:w-[60px] after:border-[#E1B168] after:absolute">
						<h5 className="py-1 uppercase tracking-wide">Contact</h5>
					</div>
					<p>Via Cavour 25, Florence, Tuscany</p>
					<p className="text-[#E1B168]">123 456 789</p>
					<p className="text-[#E1B168]">reservation_botticelli@gmail.com</p>
				</div>
				<div>
					<Image src="/logo.png" width={180} height={100} alt="logo" />
				</div>

				<div className="flex flex-col justify-center items-center gap-2 text-xs md:justify-end md:items-end">
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
				</div>
			</div>
			<div className="border-t border[#5C6168] my-10">
				<div className="text-white text-xs text-left tracking-wide py-3 px-3">
					₢ Copyright - Elise Medeiros
				</div>
			</div>
		</footer>
	);
};

export default Footer;
