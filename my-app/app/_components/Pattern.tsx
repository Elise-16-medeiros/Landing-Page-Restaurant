import Image from "next/image";

const Pattern = () => {
	return (
		<section className="w-full">
			<Image src="/pattern.png" width={1440} height={600} alt="image" />
		</section>
	);
};

export default Pattern;
