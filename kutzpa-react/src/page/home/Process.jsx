import Hero from "../../components/home-three/hero";
import About from "../../components/home-three/about";
import AboutTwo from "../../components/home-three/about-two";
import AboutThree from "../../components/home-three/about-three";
import AboutFour from "../../components/home-three/about-four";
import AboutFive from "../../components/home-three/about-five";

function Process() {
	return (
		<div className="dark-bg">
			<Hero />
			<About />
			<AboutTwo />
			<AboutThree />
			<AboutFour />
			<AboutFive />
		</div>
	);
}

export default Process;
