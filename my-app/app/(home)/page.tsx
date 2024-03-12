import Reservation from "../_components/Reservation";
import About from "../_components/About";
import Hero from "../_components/Hero";
import Kitchen from "../_components/Kitchen";
import Menu from "../_components/Menu";
import Pattern from "../_components/Pattern";
import Events from "../_components/Events";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Kitchen />
			<Menu />
			<Pattern />
			<Events />
			<Reservation />
		</>
	);
}
