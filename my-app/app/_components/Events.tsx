"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
	{
		url: "https://assets-global.website-files.com/62b5237dc8704ae48520bb20/62ba9f4762a08d3b22706551_slide_1.jpg",
	},
	{
		url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		url: "https://assets-global.website-files.com/62b5237dc8704ae48520bb20/62ba9f4778540613b3edcf42_slide_2.jpg",
	},

	{
		url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const Events = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: React.SetStateAction<number>) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<section id="events" className="w-full h-60 p-5 mt-20">
			<div className="before:content[''] before:border-2 before:absolute before:w-[178px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[178px] after:border-[#E1B168] after:absolute">
				<h2 className="py-1 tracking-wide uppercase">Weddings & Events</h2>
			</div>

			<div className="flex flex-col justify-center items-center gap-3 mt-11">
				<h5 className="text-xl text-center tracking-wide font-bold pb-3 font-title">
					Meals for your weddings and events
				</h5>
				<p className="text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
					adipisci.
				</p>
			</div>

			<div className="max-w-screen-xl h-[680px] w-full mx-auto py-16 px-4 relative group">
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="w-full h-full rounded-2xl bg-center bg-cover object-scale-down duration-500"
				></div>
				{/* Left Arrow */}
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				{/* Right Arrow */}
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
				<div className="flex top-4 justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className="text-2xl cursor-pointer"
						>
							<RxDotFilled />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
