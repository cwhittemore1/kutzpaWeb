import About from "../../components/home-one/about";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";



function HomeOne() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<TwoColumnFaq />
		</>
	);
}

export default HomeOne;
