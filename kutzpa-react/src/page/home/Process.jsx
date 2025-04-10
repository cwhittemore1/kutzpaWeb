import Hero from "../../components/home-three/hero";
import About from "../../components/home-three/about";
import AboutTwo from "../../components/home-three/about-two";
import AboutThree from "../../components/home-three/about-three";
import Services from "../../components/home-three/services";

function Process() {
	return (
		<div className="dark-bg">
			<Hero />
			<About />
			<AboutTwo />
			<AboutThree />
			<AboutTwo />
			<About />
		</div>
	);
}

export default Process;
