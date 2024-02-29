import { MdOutlinePinDrop } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Vectors = () => {
	return (
		<section className="bg-[#FFF8F5] w-full h-[340px] md:h-[230px]">
			<div className="flex flex-col justify-around items-center gap-8 pt-20 px-5 md:flex-row">
				<div className="flex items-center justify-center gap-2">
					<span className="bg-[#292e36] w-11 h-11 flex justify-center items-center rounded-full">
						<span>
							<MdOutlinePinDrop size={25} className="text-white" />
						</span>
					</span>
					<ul>
						<li>
							<h3 className="text-lg tracking-wide font-semibold">Locate Us</h3>
						</li>
						<li className="text-sm">Via Cavour 25, Florence, Tuscany</li>
					</ul>
				</div>
				<div className="flex items-center justify-center gap-2">
					<span className="bg-[#292e36] w-11 h-11 flex justify-center items-center rounded-full">
						<span>
							<FiClock size={25} className="text-white" />
						</span>
					</span>
					<ul>
						<li>
							<h3 className="text-lg tracking-wide font-semibold">
								Open Hours
							</h3>
						</li>
						<li className="text-sm">Mon To Sat 18:00 PM - 23:00 PM</li>
					</ul>
				</div>
				<div className="flex items-center justify-center gap-2">
					<span className="bg-[#292e36] w-11 h-11 flex justify-center items-center rounded-full">
						<span>
							<HiOutlineDevicePhoneMobile size={25} className="text-white" />
						</span>
					</span>
					<ul>
						<li>
							<h3 className="text-lg tracking-wide font-semibold">
								Reservation
							</h3>
						</li>
						<li className="text-sm">reservation_botticelli@gmail.com</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Vectors;
