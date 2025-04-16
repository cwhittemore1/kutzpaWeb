import Star2Img from "../../../assets/images/v1/star2.png";
import productPromo from "../../../assets/images/v1/productPromo.png";
import miniSeries from "../../../assets/images/v1/miniSeries.png";
import foundersStory from "../../../assets/images/v1/foundersStory.png";
import abstractConcepts from "../../../assets/images/v1/abstractConcepts.png";
import brandIdentity from "../../../assets/images/v1/brandIdentity.png";
import customProject from "../../../assets/images/v1/customProject.png";
import companyOverview from "../../../assets/images/v1/companyOverview.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Company Overview",
		subtitle: "Who you are and what you do",
		description: "A company overview video captures who you are, what you do, and what makes you different from everyone else.",
		img: companyOverview,
	},
	{
		id: crypto.randomUUID(),
		title: "Abstract Concept",
		subtitle: "Intangible ideas",
		description: "Not everything you need to communicate is tied to a product. Video can bring clarity to big ideas, like how something works, why it matters, or next steps.",
		img: abstractConcepts,
	},
	{
		id: crypto.randomUUID(),
		title: "Product Promo",
		subtitle: "Show off what you’ve built",
		description: "Whether it’s a new feature for an existing product or something brand new to the world, marketing with a promo video makes it easy to get people excited and informed—fast.",
		img: productPromo,
	},
	{
		id: crypto.randomUUID(),
		title: "Mini-Series",
		subtitle: "One topic many angles",
		description: "Perfect for when one video isn’t enough. A mini series lets you dive deep with multiple short, focused episodes. Great for onboarding, rollouts, and educational materials.",
		img: miniSeries,
	},
	{
		id: crypto.randomUUID(),
		title: "Founders Story",
		subtitle: "Every company starts somewhere",
		description: "This is your origin story. What sparked the idea, what keeps you going, and what makes your team different? A founder’s story adds heart and human connection to your brand.",
		img: foundersStory,
	},
	{
		id: crypto.randomUUID(),
		title: "Brand & Identity",
		subtitle: "Look and feel, in a nutshell",
		description: "Show the world who you are! With a brand and identity video, you share your personality and purpose in a way that leaves a lasting impression.",
		img: brandIdentity,
	},
	{
		id: crypto.randomUUID(),
		title: "Custom",
		subtitle: "Need something a little different?",
		description: "We taken on projects of all shapes and sizes, and love those that don't fit easily in boxes. If you have a unique context or audience, we can help you make it make sense.",
		img: customProject,
	},
];

const swiperSettings = {
	spaceBetween: 0,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination],
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 2.25,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			{/* <div className="container">
				<div className="aximo-section-title center light">
					<h2>
						<span className="aximo-title-animation">
							service types
						</span>
					</h2>
				</div>
			</div> */}
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
